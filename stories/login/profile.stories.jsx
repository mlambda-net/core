import React from 'react';
import { Profile } from '@mlambda-net/web-core/login';
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Label } from '@mlambda-net/web-core/common';

const user = {
  name: 'Roy',
  lastName: 'Gonzalez',
  email: 'yordivad@gmail.com',
};

const content = ({ user }) => {
  return (
    <Box>
      <Label
        label="Name"
        style={{ paddingTop: '10px' }}
        value={user.name + ' ' + user.lastName}
      />
      <Label label="Email" style={{ paddingTop: '10px' }} value={user.email} />
    </Box>
  );
};

const actions = () => {
  return <Button>Update</Button>;
};

export default {
  title: 'MLambda/Login/Profile',
  component: Profile,
  tags: ['autodocs'],
};

export const Primary = {
  args: {
    name: 'News',
    user: user,
  },
  render: (args) => (
    <div style={{ height: '400px' }}>
      <AppBar>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            size="large">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: '1' }}>
            {args.name}
          </Typography>
          <Profile
            user={args.user}
            content={content}
            actions={actions}
            open="true"
            width="250px"
            height="300px"
          />
        </Toolbar>
      </AppBar>
    </div>
  ),
};
