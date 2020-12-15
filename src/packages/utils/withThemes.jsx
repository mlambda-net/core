import { withLanguage } from '@mlambda-net/core/lang/language';
import { withStyles } from '@material-ui/core/styles';
import withTheme from '@material-ui/core/styles/withTheme';

const withThemes = (styles) => {
  return (Component) => withTheme(withStyles(styles)(withLanguage(Component)));
};

export default withThemes;
