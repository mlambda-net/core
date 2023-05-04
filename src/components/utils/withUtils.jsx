import { withLanguage } from '@mlambda-net/core/lang/language';
import { withRoute } from '@mlambda-net/core/routes';
import { withStyles, withTheme } from '@mui/styles';
import { withValidation } from '@mlambda-net/core/common';

const withUtils = (styles) => {
  return (Component) =>
    withTheme(
      withStyles(styles)(withLanguage(withRoute(withValidation(Component))))
    );
};

export default withUtils;
