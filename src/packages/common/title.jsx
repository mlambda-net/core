import React from 'react';
import { withStyles, withTheme } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import LocalizedStrings from 'react-localization';
import withLanguage from '@mlambda-net/core/lang/language';
import { Valid } from '@mlambda-net/core/common/validations';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const valid = Valid;

const language = new LocalizedStrings({
  en: {
  },
  es: {
  },
});

const styles = (theme) => {
  return ({})
};


class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    language.setLanguage(this.props.lang);
    return (
      <Typography
        color="primary"
        variant="h4"
        component="h5"
        gutterBottom>
        {this.props.title}
      </Typography>
    );
  }
}

Title.protoTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  lang: PropTypes.string,
  title: PropTypes.string
};

export default withStyles(styles)(withTheme(withLanguage(Title)));
