import { createMuiTheme } from '@material-ui/core/styles';
import pink from '@material-ui/core/colors/pink';
import teal from '@material-ui/core/colors/teal';

export const theme = createMuiTheme({
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
});
