import React from 'react';
import PropTypes from 'prop-types';
import LocalizedStrings from 'react-localization';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Title } from '@mlambda-net/core/common';
import withUtils from '@mlambda-net/core/utils/withUtils';

const language = new LocalizedStrings({
  en: {
    recovery: 'Recovery',
    email: 'email',
    invalidEmail: 'email is not valid',
    submit: 'recovery',
    cancel: 'cancel',
  },
  es: {
    recovery: 'Recuperar contraseña',
    email: 'correo',
    invalidEmail: 'el correo es invalido',
    submit: 'recuperar',
    cancel: 'cancelar',
  },
});

const styles = (theme) => {
  return {};
};

class Recovery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      validEmail: '',
      helpEmail: '',
    };

    this.valid = this.props.validation;
    this.changeEmail = this.emailChangeHandle.bind(this);
    this.recoveryClick = this.recoveryHandle.bind(this);
  }

  render() {
    language.setLanguage(this.props.lang);
    return (
      <Box width="100%">
        <Box display="flex" justifyContent="center">
          <Title title={language.recovery} />
        </Box>
        <Box p={1}>
          <FormControl fullWidth>
            <TextField
              label={language.email}
              color="secondary"
              type="email"
              error={!this.state.validEmail}
              onChange={this.changeEmail}
              helperText={this.state.helpEmail}
            />
          </FormControl>
        </Box>
        <Box p={1} m={1} display="flex" justifyContent="flex-end">
          <Box p={1}>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => this.props.onClose()}>
              {language.cancel}
            </Button>
          </Box>
          <Box p={1}>
            <Button
              variant="outlined"
              color="primary"
              disabled={!this.isValid()}
              onClick={this.recoveryClick}>
              {language.recovery}
            </Button>
          </Box>
        </Box>
      </Box>
    );
  }

  emailChangeHandle(event) {
    let email = event.target.value;
    if (this.valid.email(email)) {
      this.setState({
        email: email,
        validEmail: true,
        helpEmail: '',
      });
    } else {
      this.setState({
        validEmail: false,
        helpEmail: language.invalidEmail,
      });
    }
  }

  isValid() {
    return this.state.validEmail;
  }

  recoveryHandle() {
    if (this.isValid()) {
      this.onRecovery({ email: this.state.email });
    }
  }
}

Recovery.protoTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  lang: PropTypes.string,
  onRecovery: PropTypes.func,
  onClose: PropTypes.func,
};

export default withUtils(styles)(Recovery);
