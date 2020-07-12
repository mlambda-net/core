import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    padding: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
});

class Header extends React.Component {
  static defaultProps = {
    open: PropTypes.bool,
    className: '',
    name: PropTypes.string,
    classes: PropTypes.object.isRequired,
    onClick: PropTypes.func,
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="fixed" className={this.props.className}>
          <Toolbar>
            <IconButton
              style={{ display: this.props.open ? 'none' : '' }}
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={this.props.onClick}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              {this.props.name}
            </Typography>
            {this.props.children}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(Header);
