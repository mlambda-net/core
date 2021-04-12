import * as React from 'react';
import { UserManager } from 'oidc-client';
import { useState } from 'react';
const AuthContext = React.createContext(null);

function AuthProvider({ settings, onLogin, children }) {
  const manager = new UserManager(settings);
  const [user, setUser] = useState(null);
  const params = new URLSearchParams(window.location.search);
  if (params.get('code') == null) {
    manager.signinRedirect().then((c) => console.log('redirecting'));
  } else {
    if (user === null) {
      manager.signinCallback().then((c) => {
        if (onLogin != null) {
          setUser(c);
          onLogin({ manager, c });
        }
      });
    } else {
      onLogin(user);
    }
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
