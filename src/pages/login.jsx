import React from 'react';

import { withStyles, withTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import login from '../assets/img/login.png';
import SignIn from '@mlambda-net/core/login/signin';

const styles = (themes) => ({
  root: {
    height: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  login: {
    width: '600px',
  },
});

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.onLogin = this.onLoginHandle.bind(this);
  }

  render() {
    const { classes } = this.props;

    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        className={classes.root}>
        <SignIn
          className={classes.login}
          icon={<img src={login} width="100%" />}
          onLogin={this.onLogin}
        />
      </Box>
    );
  }

  onLoginHandle(data) {
    console.log(data);
  }
}

export default withStyles(styles)(withTheme(Login));
