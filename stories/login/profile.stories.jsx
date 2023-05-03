import React from 'react';
import { makeStyles } from '@mui/material/styles';
import {Profile} from '@mlambda-net/core/login';
import { AppBar, Toolbar } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Label } from '@mlambda-net/core/common';

const user = {
  name: 'Roy',
  lastName: 'Gonzalez',
  email: 'yordivad@gmail.com',
};

const useStyles = makeStyles(() => ({
  title: {
    flexGrow: 1,
  },
}));

const content = () => {
  return (
    <Box>
      <Label label="Name" style={{ paddingTop: '10px' }} value="Roy Gonzalez" />
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

export const ProfileStory = () => {
  const classes = useStyles();
  return (
    <AppBar>
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          size="large">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          News
        </Typography>
        <Profile
          user={user}
          content={content}
          actions={actions}
          open="true"
          width="250px"
          height="300px"
        />
      </Toolbar>
    </AppBar>
  );
};

export default {
  title: 'MLambda/Login/profile',
  component: ProfileStory,
};
