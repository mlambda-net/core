import React from 'react';
import Box from '@material-ui/core/Box';
import login from '../assets/img/login.png';
import { LeftImage } from '@mlambda-net/core/common';
import { SignIn } from '@mlambda-net/core/login';
import { withUtils } from '@mlambda-net/core/utils';
import Recovery from '@mlambda-net/core/login/recovery';
import { Action, State } from '@mlambda-net/core/common';

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
    this.state = { actual: 'login' };
    this.onLogin = this.onLoginHandle.bind(this);
    this.onForgot = this.onForgotHandle.bind(this);
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
            <Action actual={this.state.actual}>
              <State name="login">
                <SignIn
                  onForgot={() => this.setState({ actual: 'recovery' })}
                  onLogin={(user) => this.login(user)}
                />
              </State>
              <State name="recovery">
                <Recovery onClose={() => this.setState({ actual: 'login' })} />
              </State>
            </Action>
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
