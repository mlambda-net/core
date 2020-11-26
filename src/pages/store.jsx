import Catalog from '../packages/market/catalog';
import React from 'react';
import { withStyles, withTheme } from '@material-ui/core/styles';
import cls from 'clsx';
import Box from '@material-ui/core/Box';
import { Header } from '@mlambda-net/core/common';
import Navigation from '@mlambda-net/core/common/navigation';

const drawerWidth = 240;

const styles = (theme) => ({
  root: {},
  collapse: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  collapseShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },

  header: {
    height: '100px',
  },
  content: {},
});

class Store extends React.Component {
  constructor(props) {
    super(props);
    this.openDrawer = this.openDrawer.bind(this);
    this.state = {
      open: false,
    };
  }

  openDrawer() {
    this.setState({ open: !this.state.open });
  }

  render() {
    const { classes } = this.props;
    return (
      <Box className={classes.root}>
        <div className={classes.header}>
          <Header
            name="my tienda"
            open={this.state.open}
            onClick={this.openDrawer}
            className={cls(classes.collapse, {
              [classes.collapseShift]: this.state.open,
            })}
          />
          <Navigation
            width={drawerWidth}
            name="Welcome"
            open={this.state.open}
            onClose={this.openDrawer}
          />
        </div>
        <div
          className={cls(
            classes.collapse,
            {
              [classes.collapseShift]: this.state.open,
            },
            classes.content
          )}>
          <Catalog />
        </div>
      </Box>
    );
  }
}

export default withStyles(styles)(withTheme(Store));
