import React from 'react';
import LocalizedStrings from 'react-localization';
import { Box } from '@mui/material';
import withUtils from '@mlambda-net/web-core/utils/withUtils';

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

export default withUtils(styles)(Skeleton);
