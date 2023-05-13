import React from 'react';
import { Box, Typography } from '@mui/material';
import { withThemes } from '@mlambda-net/web-core/utils';

const styles = () => ({
  label: {
    fontSize: '0.9em',
  },
  value: {
    fontSize: '0.8em',
  },
});

class Label extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;

    return (
      <Box style={this.props.style} className={this.props.className}>
        <Typography color="textPrimary" className={classes.label}>
          {this.props.label}
        </Typography>
        <Typography color="textSecondary" className={classes.value}>
          {this.props.value}
        </Typography>
      </Box>
    );
  }
}

export default withThemes(styles)(Label);
