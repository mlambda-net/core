import * as React from 'react';
import { UserManager } from 'oidc-client';

const AuthContext = React.createContext(null);

class AuthService {
  constructor(settings) {
    this.user = null;
    this.manager = new UserManager(settings);
  }

  login() {
    this.manager.signinRedirect().then((c) => {});
  }

  isAuth() {
    return this.user !== null;
  }

  authenticate() {
    return new Promise((resolve) => {
      this.manager.getUser().then((c) => {
        if (c == null) {
          this.manager.signinCallback().then((c) => {
            this.user = c;
            resolve(c);
          });
        } else {
          this.user = c;
          resolve(this.user);
        }
      });
    });
  }
}

class AuthProvider extends React.Component {
  constructor(props) {
    super(props);
    this.auth = new AuthService(props.settings);
    const params = new URLSearchParams(window.location.search);
    if (!this.auth.isAuth()) {
      if (params.get('code') == null) {
        this.auth.login();
      } else {
        this.auth.authenticate().then((c) => {
          this.props.onLogin(c);
        });
      }
    }
  }
  render() {
    return (
      <AuthContext.Provider value={this.auth}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

function GetAuth() {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error('AuthContext must be used within a AuthProvider');
  }
  return context;
}

export { AuthProvider, GetAuth };
