import React from 'react';
import { Box, IconButton } from '@mui/material';
import { withThemes } from '@mlambda-net/web-core/utils';

const styles = (theme) => ({
  container: {
    position: 'absolute',
    right: '10px',
    top: '80px',
  },

  panel: {
    width: '100%',
    height: '100%',
  },
});

class Option extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: this.props.open };
  }

  render() {
    const { classes } = this.props;
    const Icon = this.props.icon;

    return (
      <Box>
        <IconButton
          color="inherit"
          onClick={() => this.setState({ open: !this.state.open })}
          size="large">
          <Icon />
        </IconButton>
        <Box
          onMouseLeave={() => this.setState({ open: false })}
          className={classes.container}
          width={this.props.width}
          height={this.props.height}
          style={{ display: this.state.open ? '' : 'none' }}>
          {this.props.children}
        </Box>
      </Box>
    );
  }
}

export default withThemes(styles)(Option);
