import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    direction: 'rtl',
    components: {
        MuiTextField: {
            variants: [
                {
                    props: {type: 'number'},
                    style: {
                        //for disable arrows
                        '& input::-webkit-outer-spin-button': {
                            '-webkit-appearance': 'none',
                            m: 0
                        },
                        '& input::-webkit-inner-spin-button': {
                            '-webkit-appearance': 'none',
                            m: 0
                        },
                        '& input[type=number]': {
                            '-moz-appearance': 'textfield',
                        },
                    },
                }
            ]
        }
    },
    palette: {
        primary: {
            main: '#673ab7',
            dark: '#311b92',
            light: '#9575cd',
        },
        common:{
            white: '#ffffff',
            black: '#000000'
        },
        warning:{
            main: '#ffeb3b',
            dark: '#fbc02d',
            light: '#ffee58',
        },
        error:{
            main: '#d32f2f',
            dark: '#b71c1c',
            light: '#ef5350',
        },
        success:{
            main: '#388e3c',
            dark: '#1b5e20',
            light: '#4caf50',
        },
        secondary:{
            main: '#1565c0',
            dark: '#0d47a1',
            light: '#1976d2',
        }
    },
    typography: {
        fontFamily: 'dena',
    }
});

export default theme;