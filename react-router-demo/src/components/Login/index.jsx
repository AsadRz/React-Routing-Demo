import React, { useState } from 'react';
import { Redirect, useLocation } from 'react-router-dom';

const Login = () => {
  const { state } = useLocation;
  const { from } = state || { from: { pathname: '/' } };
  const [redirectToRefferer, setRedirectToRefferer] = useState(false);

  const login = () => {
    fakeAuth.authenticate(() => {
      setRedirectToRefferer(true);
    });
  };

  if (redirectToRefferer) {
    <Redirect to={from} />;
  }
  return (
    <div>
      <p>You must log in to view the page at {from.pathname}</p>
      <button onClick={login}>Log in</button>
    </div>
  );
};

/* A fake authentication function */
export const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100);
  },
};

export default Login;
