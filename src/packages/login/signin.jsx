import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles, withTheme } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import LocalizedStrings from 'react-localization';
import withLanguage from '@mlambda-net/core/common/language';
import { Valid } from '@mlambda-net/core/common/validations';

const valid = Valid;

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

export class SignIn extends React.Component {
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
    this.emailChange = this.emailChangeHandle.bind(this);
    this.passwordChange = this.passwordChangeHandle.bind(this);
    this.loginClick = this.loginHandle.bind(this);
  }

  emailChangeHandle(event) {
    if (valid.email(event.target.value)) {
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
    if (valid.isEmpty(event.target.value === '')) {
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

  render() {
    language.setLanguage(this.props.lang);
    const { classes } = this.props;
    return (
      <Paper elevation={10} className={this.props.className}>
        <Box p={3}>
          <Grid container spacing={0}>
            <Grid item xs={'auto'} sm={6}>
              <Box
                className={classes.logo}
                display="flex"
                justifyContent="center"
                alignItems="center">
                {this.props.icon}
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box className={classes.login}>
                <Box display="flex" justifyContent="center">
                  <Typography
                    color="primary"
                    variant="h4"
                    component="h5"
                    gutterBottom>
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
                      <Typography variant="caption">
                        {language.forgot}
                      </Typography>
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
            </Grid>
          </Grid>
        </Box>
      </Paper>
    );
  }
}

SignIn.protoTypes = {
  title: PropTypes.bool,
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  onLogin: PropTypes.func,
  onForgot: PropTypes.func,
  icon: PropTypes.element,
  lang: PropTypes.string,
};

export default withStyles(styles)(withTheme(withLanguage(SignIn)));
