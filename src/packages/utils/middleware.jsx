import { withLanguage } from '@mlambda-net/core/lang/language';
import { withRoute } from '@mlambda-net/core/routes';
import { withStyles } from '@material-ui/core/styles';
import { withValidation } from '@mlambda-net/core/common';
import withTheme from '@material-ui/core/styles/withTheme';

function withUtils(styles) {
  return (Component) =>
    withTheme(
      withStyles(styles)(withLanguage(withRoute(withValidation(Component))))
    );
}

function withThemes(styles) {
  return (Component) => withTheme(withStyles(styles)(withLanguage(Component)));
}

export { withUtils, withThemes };
