import React from 'react';
import Box from '@material-ui/core/Box';
import login from '../assets/img/login.png';
import { LeftImage } from '@mlambda-net/core/common';
import { SignIn } from '@mlambda-net/core/login';
import { withUtils } from '@mlambda-net/core/utils';

const styles = (themes) => ({
  root: {
    display: 'flex',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  login: {},
});

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.onLogin = this.onLoginHandle.bind(this);
  }

  render() {
    const { classes } = this.props;
    return (
      <Box className={classes.root}>
        <Box width={'500px'}>
          <LeftImage img={<img src={login} width="100%" alt="img" />}>
            <SignIn onLogin={this.onLogin} />
          </LeftImage>
        </Box>
      </Box>
    );
  }

  onLoginHandle(data) {
    console.log(data);
  }
}

export default withUtils(styles)(Login);
