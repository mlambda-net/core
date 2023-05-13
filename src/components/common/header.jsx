import React from 'react';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { withThemes } from '@mlambda-net/web-core/utils';

const styles = () => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
});

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children, name, classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="fixed" className={this.props.className}>
          <Toolbar>
            <IconButton
              style={{ display: this.props.open ? 'none' : '' }}
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={this.props.onClick}
              size="large">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              {name}
            </Typography>
            {children}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withThemes(styles)(Header);
