import Catalog from '../packages/market/catalog';
import React from 'react';
import { withStyles, withTheme } from '@mui/styles';
import cls from 'clsx';
import Box from '@mui/material/Box';
import { Header, Label } from '@mlambda-net/core/common';
import Navigation from '@mlambda-net/core/common/navigation';
import Profile from '@mlambda-net/core/login/profile';
import Button from '@mui/material/Button';
import { Toolbar } from '@mui/material';

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

    const content = () => {
      return (
        <Box>
          <Label
            label="Name"
            style={{ paddingTop: '10px' }}
            value="Roy Gonzalez"
          />
          <Label
            label="Email"
            style={{ paddingTop: '10px' }}
            value="yordivad@gmail.com"
          />
        </Box>
      );
    };

    const actions = () => {
      return <Button>Update</Button>;
    };

    return (
      <Box className={classes.root}>
        <div className={classes.header}>
          <Header
            name="my tienda"
            open={this.state.open}
            onClick={this.openDrawer}
            className={cls(classes.collapse, {
              [classes.collapseShift]: this.state.open,
            })}>
            <Profile
              user={{ name: 'Roy Gonzalez', email: 'yordivad@gmail.com' }}
              content={content}
              actions={actions}
              open="true"
              width="250px"
              height="300px"
            />
          </Header>
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
