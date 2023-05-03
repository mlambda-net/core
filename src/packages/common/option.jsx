import React from 'react';
import PropTypes from 'prop-types';
import { IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import withThemes from '@mlambda-net/core/utils/withThemes';

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

Option.protoTypes = {
  className: '',
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool,
  icon: PropTypes.element,
  width: PropTypes.string,
  height: PropTypes.string,
};

export default withThemes(styles)(Option);
