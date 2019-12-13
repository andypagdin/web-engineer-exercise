import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import { isValidToken } from '../actions/sign-in';
import SignIn from '../containers/sign-in.jsx';

export default function PrivateRoute ({ component, ...props }) {
  const [validToken, setValidToken] = useState(false);

  isValidToken().then(result => {
    setValidToken(result);
  });

  return validToken ? <Route {...props} component={component} /> : <Route {...props} component={SignIn} />
};