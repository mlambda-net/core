import { withLanguage } from '@mlambda-net/core/lang/language';
import { withRoute } from '@mlambda-net/core/routes';
import { withStyles } from '@material-ui/core/styles';
import { withValidation } from '@mlambda-net/core/common';
import withTheme from '@material-ui/core/styles/withTheme';

const withUtils = (styles) => {
  return (Component) =>
    withTheme(
      withStyles(styles)(withLanguage(withRoute(withValidation(Component))))
    );
};

export default withUtils;
