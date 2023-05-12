import { createTheme } from '@mui/material/styles';
import { pink, teal } from '@mui/material/colors';

export const light = createTheme({
  typography: {
    fontSize: 12,
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  palette: {
    primary: {
      main: pink[500],
      dark: pink[700],
      light: pink[200],
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: teal[500],
      dark: teal[700],
      light: teal[200],
      contrastText: '#757575',
    },
    text: {
      primary: '#212121',
      secondary: '#757575',
    },
    divider: '#BDBDBD',
  },
  spacing: 4,
});

export const black = createTheme({
  typography: {
    fontSize: 10,
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  palette: {
    primary: {
      main: pink[500],
      dark: pink[700],
      light: pink[200],
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: teal[500],
      dark: teal[700],
      light: teal[200],
      contrastText: '#757575',
    },
    text: {
      primary: '#212121',
      secondary: '#757575',
    },
    divider: '#BDBDBD',
  },
  spacing: 4,
});

export const theme = light;
