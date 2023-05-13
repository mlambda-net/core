import React from 'react';
import { Box, Button, FormControl, Paper, TextField } from '@mui/material';
import LocalizedStrings from 'react-localization';
import { withUtils } from '@mlambda-net/web-core/utils';
import { Title } from '@mlambda-net/web-core/common';

const language = new LocalizedStrings({
  en: {
    title: 'Change Password',
    newPassword: 'New Password',
    oldPassword: 'Old Password',
    email: 'Email',
    errorNewPassword: 'new password is required',
    errorOldPassword: 'old password is required',
    changeAction: 'submit',
  },
  es: {
    title: 'Cambiar contraseña',
    newPassword: 'Contraseña Nueva',
    oldPassword: 'Contraseña Actual',
    email: 'Email',
    errorNewPassword: 'la contraseña nueva es requerida',
    errorOldPassword: 'la contraseña actual es requerida',
    changeAction: 'cambiar',
  },
});

const styles = (theme) => ({});

class ChangePassword extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newPassword: '',
      oldPassword: '',
      validOldPassword: false,
      validNewPassword: false,
      errorNewPassword: '',
      errorOldPassword: '',
    };

    this.valid = this.props.validation;
    this.newPasswordChange = this.newPasswordHandle.bind(this);
    this.oldPasswordChange = this.oldPasswordHandle.bind(this);
    this.changeClick = this.changeHandle.bind(this);
  }

  render() {
    language.setLanguage(this.props.lang);
    const { classes } = this.props;
    return (
      <Paper elevation={10} className={this.props.className}>
        <Box p={3}>
          <Box display="flex" justifyContent="center">
            <Title title={language.title} />
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
                  id="password"
                  label={language.oldPassword}
                  color="secondary"
                  type="password"
                  error={!this.state.validOldPassword}
                  onChange={this.oldPasswordChange}
                  helperText={this.state.errorOldPassword}
                />
              </FormControl>
            </Box>

            <Box p={1}>
              <FormControl fullWidth>
                <TextField
                  id="confirm_password"
                  label={language.newPassword}
                  color="secondary"
                  type="password"
                  error={!this.state.validNewPassword}
                  onChange={this.newPasswordChange}
                  helperText={this.state.errorNewPassword}
                />
              </FormControl>
            </Box>

            <Box p={1} m={1} display="flex" justifyContent="flex-end">
              <Button
                variant="outlined"
                color="primary"
                disabled={!this.isValid()}
                onClick={this.changeClick}>
                {language.changeAction}
              </Button>
            </Box>
          </Box>
        </Box>
      </Paper>
    );
  }

  newPasswordHandle(event) {
    const password = event.target.value;
    if (this.valid.isEmpty(password)) {
      this.setState({
        validOldPassword: false,
        errorNewPassword: language.errorNewPassword,
      });
    } else {
      this.setState({
        newPassword: password,
        validNewPassword: true,
        errorNewPassword: '',
      });
    }
  }

  oldPasswordHandle(event) {
    const password = event.target.value;
    if (this.valid.isEmpty(password)) {
      this.setState({
        validOldPassword: false,
        errorOldPassword: language.errorOldPassword,
      });
    } else {
      this.setState({
        oldPassword: password,
        validOldPassword: true,
        errorOldPassword: '',
      });
    }
  }

  changeHandle(event) {
    this.props.onChange({
      newPassword: this.state.newPassword,
      oldPassword: this.state.oldPassword,
    });

    event.preventDefault();
  }

  isValid() {
    return this.state.validNewPassword && this.state.validOldPassword;
  }
}

export default withUtils(styles)(ChangePassword);
