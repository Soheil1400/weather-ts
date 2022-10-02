import './App.css';
import {Typography, Grid, CircularProgress, Autocomplete, TextField} from "@mui/material/";
import CloudIcon from '@mui/icons-material/Cloud';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import AirIcon from '@mui/icons-material/Air';
import DeviceThermostatRoundedIcon from '@mui/icons-material/DeviceThermostatRounded';
import NightsStayRoundedIcon from '@mui/icons-material/NightsStayRounded';
import {useEffect, useState} from "react";
import {Button} from "@mui/material";

const App = (): JSX.Element => {
    const [loading, setLoading] = useState(true)
    const [city, setCity] = useState<any>({})

    const handleGetData = async () => {
        const data = await fetch('https://api.openweathermap.org/data/2.5/weather?q=tabriz&lang=fa&appid=f165eb3ac71fb18e5bbcbe5de1478baa&units=metric').then(res => res.json())
        setLoading(false)
        setCity(data)
    }

    useEffect(() => {
        handleGetData()
    }, [])

    console.log(city)
    return (
        <Grid container alignItems={'center'} justifyContent={'center'} flexDirection={'column'} p={2} dir={'rtl'}>
            {loading
                ?
                <Grid container item xs={12} alignItems={'center'} justifyContent={'center'}>
                    <CircularProgress/>
                </Grid>
                :
                <>
                    <Grid container
                          justifyContent={'space-between'}
                          item
                          xs={12}
                          bgcolor={'secondary.main'}
                          borderRadius={4}
                          color={'common.white'}
                          p={2}
                    >
                        <Typography>
                            وضعیت آب و هوا
                        </Typography>
                        <Grid>
                            <CloudIcon/>
                        </Grid>
                    </Grid>
                    <Grid container
                          item
                          xs={12}
                          md={3}
                          mt={2}
                          bgcolor={'secondary.light'}
                          color={'common.white'}
                          px={0}
                          borderRadius={4}
                    >
                        <Grid container item xs={12} p={2}>
                            <Grid container alignItems={'center'} item xs={12} my={1}>
                                <LocationCityIcon/>
                                <Typography mr={1}>
                                    شهر : {city.name}
                                </Typography>
                            </Grid>
                            <Grid container alignItems={'center'} item xs={12} my={1}>
                                <NightsStayRoundedIcon/>
                                <Typography mr={1}>
                                    وضعیت هوا : {city.weather[0].description}
                                </Typography>
                            </Grid>
                            <Grid container alignItems={'center'} item xs={12} my={1}>
                                <DeviceThermostatRoundedIcon/>
                                <Typography mr={1}>
                                    دما : {city.main.temp}
                                </Typography>
                            </Grid>
                            <Grid container alignItems={'center'} item xs={12} my={1}>
                                <CloudIcon/>
                                <Typography mr={1}>
                                    میزان ابری بودن : {city.clouds.all}
                                </Typography>
                            </Grid>
                            <Grid container alignItems={'center'} item xs={12} my={1}>
                                <AirIcon/>
                                <Typography mr={1}>
                                    میزان سرعت باد : {city.wind.speed}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid alignItems={'center'} item xs={12} mt={1}>
                            <Button variant={'contained'} sx={{
                                boxShadow: 'none',
                                width: '100%',
                                borderRadius: '0 0 16px 16px',
                                bgcolor: 'secondary.dark',
                                '&:hover': {
                                    bgcolor: 'common.white',
                                    color: 'secondary.dark',
                                }
                            }}>
                                مشاهده 4 روز آینده
                            </Button>
                        </Grid>
                    </Grid>
                </>
            }
        </Grid>
    );
}

export default App;
