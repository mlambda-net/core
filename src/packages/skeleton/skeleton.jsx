import React from 'react';
import { withStyles, withTheme } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import LocalizedStrings from 'react-localization';
import withLanguage from '@mlambda-net/core/lang/language';
import { Valid } from '@mlambda-net/core/common/validations';
import Box from '@material-ui/core/Box';

const valid = Valid;

const language = new LocalizedStrings({
  en: {
  },
  es: {
  },
});

const styles = (theme) => {
  console.log(theme)
  return ({})
};

class Skeleton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    language.setLanguage(this.props.lang);
    return (
      <Box width="100%">
        Skeleton
      </Box>
    );
  }
}

Skeleton.protoTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  lang: PropTypes.string,
};

export default  withStyles(styles)(withTheme(withLanguage(Skeleton)));
