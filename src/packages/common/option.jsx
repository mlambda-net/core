import React from 'react';
import { withStyles, withTheme } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import withLanguage from '@mlambda-net/core/lang/language';
import { IconButton } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';

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
          onClick={() => this.setState({ open: !this.state.open })}>
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

export default withStyles(styles)(withTheme(withLanguage(Option)));
