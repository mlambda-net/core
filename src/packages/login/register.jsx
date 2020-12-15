import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import LocalizedStrings from 'react-localization';
import withUtils from '@mlambda-net/core/utils/withUtils';

const language = new LocalizedStrings({
  en: {
    register: 'Sign up',
    password: 'Password',
    confirm: 'Confirm password',
    email: 'Email',
    invalidEmail: 'invalid email',
    invalidPassword: 'password is required',
    noMatch: 'passwords are different',
  },
  es: {
    register: 'Registrarse',
    password: 'Contraseña',
    confirm: 'Confirmar contraseña',
    email: 'Correo',
    invalidEmail: 'correo invalido',
    invalidPassword: 'una contraseña es requerida',
    noMatch: 'las contraseñas son diferentes',
  },
});

const styles = (theme) => ({
  root: {},
  logo: {
    height: '100%',
  },
  icon: {
    width: '200px',
  },
  login: {
    backgroundColor: theme.palette.background.default,
    padding: '20px',
    height: 'calc(100% - 40px)',
    borderRadius: '10px',
  },
});

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.valid = this.props.validation;
    this.state = {
      email: '',
      password: '',
      confirm: '',
      validEmail: false,
      validPassword: false,
      validConfirm: false,
      helpEmail: '',
      helpPassword: '',
    };
    this.emailChange = this.emailChangeHandle.bind(this);
    this.passwordChange = this.passwordChangeHandle.bind(this);
    this.loginClick = this.loginHandle.bind(this);
    this.confirmChange = this.confirmHandle.bind(this);
  }

  render() {
    language.setLanguage(this.props.lang);
    const { classes } = this.props;
    return (
      <Paper elevation={10} className={this.props.className}>
        <Box p={3}>
          <Box display="flex" justifyContent="center">
            <Typography
              color="primary"
              variant="h4"
              component="h5"
              gutterBottom>
              {language.register}
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
                  id="email"
                  color="secondary"
                  label={language.email}
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

            <Box p={1}>
              <FormControl fullWidth>
                <TextField
                  id="confirm_password"
                  label={language.confirm}
                  color="secondary"
                  type="password"
                  error={!this.state.validConfirm}
                  onChange={this.confirmChange}
                  helperText={this.state.helpConfirm}
                />
              </FormControl>
            </Box>

            <Box p={1} m={1} display="flex" justifyContent="flex-end">
              <Button
                variant="outlined"
                color="primary"
                onClick={this.loginClick}>
                {language.register}
              </Button>
            </Box>
          </Box>
        </Box>
      </Paper>
    );
  }

  checkEmail() {
    if (this.valid.email(this.state.email)) {
      this.setState({ validEmail: true, helpEmail: '' });
      return true;
    }

    this.setState({ validEmail: false, helpEmail: language.invalidEmail });
    return false;
  }

  checkPassword() {
    if (!this.valid.isEmpty(this.state.password)) {
      this.setState({
        validPassword: true,
        helpPassword: '',
      });
      return true;
    }
    this.setState({
      validPassword: false,
      helpPassword: language.invalidPassword,
    });
    return false;
  }

  checkConfirm() {
    if (this.valid.equals(this.state.password, this.state.confirm)) {
      this.setState({
        validConfirm: true,
        helpConfirm: '',
      });
      return true;
    }

    this.setState({
      validConfirm: false,
      helpConfirm: language.noMatch,
    });
    return false;
  }

  emailChangeHandle(event) {
    this.setState({ email: event.target.value });
  }

  passwordChangeHandle(event) {
    this.setState({ password: event.target.value });
  }

  confirmHandle(event) {
    this.setState({ confirm: event.target.value });
  }

  loginHandle(event) {
    if (this.isValid()) {
      this.props.onRegister({
        email: this.state.email,
        password: this.state.password,
      });
    }
    event.preventDefault();
  }

  isValid() {
    let email = this.checkEmail();
    let pass = this.checkPassword();
    let conf = this.checkConfirm();
    return email && pass && conf;
  }
}

Register.protoTypes = {
  className: '',
  classes: PropTypes.object.isRequired,
  onRegister: PropTypes.func,
  lang: PropTypes.string,
};

export default withUtils(styles)(Register);
