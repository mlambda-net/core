import React from 'react';
import PropTypes from 'prop-types';
import LocalizedStrings from 'react-localization';
import { Box } from '@mui/material';
import withUtils from '@mlambda-net/core/utils/withUtils';

const language = new LocalizedStrings({
  en: {},
  es: {},
});

const styles = (theme) => {
  return {};
};

class Skeleton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    language.setLanguage(this.props.lang);
    return <Box width="100%">Skeleton</Box>;
  }
}

Skeleton.protoTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  lang: PropTypes.string,
};

export default withUtils(styles)(Skeleton);
