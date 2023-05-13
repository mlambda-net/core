import React from 'react';
import LocalizedStrings from 'react-localization';
import { Typography } from '@mui/material';
import { withThemes } from '@mlambda-net/web-core/utils';

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

export default withThemes(styles)(Title);
