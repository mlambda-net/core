import React from 'react';
import cls from 'clsx';
import Header from './header';
import Navigation from './navigation';
import { withStyles, withTheme } from '@material-ui/core/styles';

const drawerWidth = 240;

const styles = (theme) => ({
  root: {},
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
});

class DefaultLayout extends React.Component {
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

  render = () => {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Header
          name={this.props.name}
          open={this.state.open}
          onClick={this.openDrawer}
          className={cls(classes.appBar, {
            [classes.appBarShift]: this.state.open,
          })}
        />
        <Navigation
          width={drawerWidth}
          name="Welcome"
          open={this.state.open}
          onClose={this.openDrawer}
        />
      </div>
    );
  };
}

export default withStyles(styles)(withTheme(DefaultLayout));
