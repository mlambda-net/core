import { withLanguage } from '@mlambda-net/core/lang/language';
import { withStyles, withTheme } from '@mui/styles';


const withThemes = (styles) => {
  return (Component) => withTheme(withStyles(styles)(withLanguage(Component)));
};

export default withThemes;
