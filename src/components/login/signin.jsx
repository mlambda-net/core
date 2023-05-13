import React from 'react';
import LocalizedStrings from 'react-localization';
import { withUtils } from '@mlambda-net/web-core/utils';
import {
  Box,
  Button,
  FormControl,
  Link,
  TextField,
  Typography,
} from '@mui/material';

const language = new LocalizedStrings({
  en: {
    password: 'Password',
    email: 'Email',
    invalidEmail: 'invalid email',
    invalidPassword: 'password is required',
    forgot: 'forgot password?',
    login: 'login',
  },
  es: {
    password: 'Contraseña',
    email: 'Correo',
    invalidEmail: 'correo invalido',
    invalidPassword: 'una contraseña es requerida',
    forgot: 'olvido la contraseña?',
    login: 'ingresar',
  },
});

const styles = (theme) => ({});

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      validEmail: false,
      validPassword: false,
      helpEmail: '',
      helpPassword: '',
    };
    this.valid = this.props.validation;
    this.emailChange = this.emailChangeHandle.bind(this);
    this.passwordChange = this.passwordChangeHandle.bind(this);
    this.loginClick = this.loginHandle.bind(this);
  }

  render() {
    language.setLanguage(this.props.lang);

    return (
      <Box width="100%">
        <Box display="flex" justifyContent="center">
          <Typography color="primary" variant="h4" component="h5" gutterBottom>
            {this.props.title}
          </Typography>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          m={1}
          p={1}>
          <Box p={1}>
            <FormControl fullWidth>
              <TextField
                label={language.email}
                color="secondary"
                id="email"
                type="email"
                error={!this.state.validEmail}
                onChange={this.emailChange}
                helperText={this.state.helpEmail}
              />
            </FormControl>
          </Box>
          <Box p={1}>
            <FormControl fullWidth>
              <TextField
                id="password"
                label={language.password}
                color="secondary"
                type="password"
                error={!this.state.validPassword}
                onChange={this.passwordChange}
                helperText={this.state.helpPassword}
              />
            </FormControl>
          </Box>

          <Box p={1} m={2} display="flex" justifyContent="flex-end">
            <Link color="secondary" onClick={this.props.onForgot}>
              <Typography variant="caption">{language.forgot}</Typography>
            </Link>
          </Box>

          <Box p={1} m={1} display="flex" justifyContent="flex-end">
            <Button
              variant="outlined"
              color="primary"
              disabled={!this.isValid()}
              onClick={this.loginClick}>
              {language.login}
            </Button>
          </Box>
        </Box>
      </Box>
    );
  }

  emailChangeHandle(event) {
    if (this.valid.email(event.target.value)) {
      this.setState({
        validEmail: true,
        helpEmail: '',
        email: event.target.value,
      });
    } else {
      this.setState({ validEmail: false, helpEmail: language.invalidEmail });
    }
  }

  passwordChangeHandle(event) {
    if (!this.valid.isEmpty(event.target.value)) {
      this.setState({
        validPassword: true,
        helpPassword: '',
        password: event.target.value,
      });
    } else {
      this.setState({
        validPassword: false,
        helpPassword: language.invalidPassword,
      });
    }
  }

  loginHandle(event) {
    this.props.onLogin({
      email: this.state.email,
      password: this.state.password,
    });
    event.preventDefault();
  }

  isValid() {
    return this.state.validEmail && this.state.validPassword;
  }
}

export default withUtils(styles)(SignIn);
