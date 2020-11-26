import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import PropTypes from 'prop-types';
import { withStyles, withTheme } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { withThemes } from '@mlambda-net/core/utils';

const styles = (theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    flexShrink: 0,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    justifyContent: 'flex-end',
    ...theme.mixins.toolbar,
  },
  paper: {
    width: 'inherit',
  },
  title: {
    flexGrow: 1,
  },
});

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.emitChange.bind(this);
  }

  emitChange(event) {
    this.props.onClose(event);
    event.preventDefault();
  }

  render = () => {
    const { name, position, classes, themes, open, children } = this.props;
    return (
      <div className={classes.root}>
        <Drawer
          style={{ width: open ? this.props.width : '0' }}
          open={open}
          className={classes.drawer}
          variant="persistent"
          anchor={position}
          classes={{
            paper: classes.paper,
          }}>
          <div className={classes.drawerHeader}>
            <Typography variant="h6" className={classes.title}>
              {name}
            </Typography>
            <IconButton color="secondary" onClick={this.onChange}>
              <ArrowBackIcon />
            </IconButton>
          </div>
          <Divider />
          {children}
        </Drawer>
      </div>
    );
  };
}

Navigation.protoTypes = {
  name: PropTypes.string,
  open: PropTypes.bool,
  position: PropTypes.string,
  width: PropTypes.string,
  classes: PropTypes.object.isRequired,
  themes: PropTypes.object.isRequired,
  onClose: PropTypes.func,
};

export default withThemes(styles)(Navigation);
