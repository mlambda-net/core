import { withStyles, withTheme } from '@mui/styles';
import { withLanguage } from '@mlambda-net/web-core/lang';
import { withValidation } from '@mlambda-net/web-core/common';
import { WithLink } from '@mlambda-net/web-core/routes/index.jsx';

const withUtils = (styles) => {
  return (Component) =>
    withTheme(
      withStyles(styles)(withLanguage(WithLink(withValidation(Component)))),
    );
};

export default withUtils;
