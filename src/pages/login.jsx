import React from 'react';
import Box from '@material-ui/core/Box';
import login from '../assets/img/login.png';
import { Label, LeftImage } from '@mlambda-net/core/common';
import { SignIn } from '@mlambda-net/core/login';
import { withUtils } from '@mlambda-net/core/utils';
import Recovery from '@mlambda-net/core/login/recovery';
import Button from '@material-ui/core/Button';

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
    this.route = this.props.route;
    this.state = { forgot: false };
    this.onLogin = this.onLoginHandle.bind(this);
    this.onForgor = this.onForgotHandle.bind(this);
  }

  show(isForgot) {
    if (isForgot) {
      return <Recovery onClose={() => this.setState({ forgot: false })} />;
    }
    return (
      <SignIn
        onForgot={() => this.setState({ forgot: true })}
        onLogin={(user) => this.login(user)}
      />
    );
  }

  login(data) {
    this.route.to('store');
  }

  render() {
    const { classes } = this.props;

    return (
      <Box className={classes.root}>
        <Box width={'500px'}>
          <LeftImage img={<img src={login} width="100%" alt="img" />}>
            {this.show(this.state.forgot)}
          </LeftImage>
        </Box>
      </Box>
    );
  }

  onLoginHandle(data) {
    console.log(data);
  }

  onForgotHandle() {}
}

export default withUtils(styles)(Login);
