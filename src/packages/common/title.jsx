import React from 'react';
import PropTypes from 'prop-types';
import LocalizedStrings from 'react-localization';
import Typography from '@material-ui/core/Typography';
import withThemes from '@mlambda-net/core/utils/withThemes';

const language = new LocalizedStrings({
  en: {},
  es: {},
});

const styles = (theme) => {
  return {};
};

class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    language.setLanguage(this.props.lang);
    return (
      <Typography color="primary" variant="h4" component="h5" gutterBottom>
        {this.props.title}
      </Typography>
    );
  }
}

Title.protoTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  lang: PropTypes.string,
  title: PropTypes.string,
};

export default withThemes(styles)(Title);
