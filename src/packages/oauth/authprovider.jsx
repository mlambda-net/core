import * as React from 'react';
import { UserManager } from 'oidc-client';

const AuthContext = React.createContext(null);

function AuthProvider({ settings, onLogin, children }) {
  const manager = new UserManager(settings);
  const params = new URLSearchParams(window.location.search);
  if (params.get('code') == null) {
    manager.signinRedirect().then((c) => console.log('redirecting'));
  } else {
    manager.signinCallback().then((c) => {
      if (onLogin != null) {
        onLogin(c);
      }
    });
  }

  return (
    <AuthContext.Provider value={manager}>{children}</AuthContext.Provider>
  );
}

function getAuth() {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error('AuthContext must be used within a AuthProvider');
  }
  return context;
}

export { AuthProvider, getAuth };
