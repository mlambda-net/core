import React from 'react';
import Drawer from '@mui/material/Drawer';
import PropTypes from 'prop-types';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import withThemes from '@mlambda-net/core/utils/withThemes';

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
            <IconButton color="secondary" onClick={this.onChange} size="large">
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
