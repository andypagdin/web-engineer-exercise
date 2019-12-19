import React, { useState, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { isValidToken } from '../actions/sign-in';

export default function PrivateRoute ({component, ...props}) {
  const [validToken, setValidToken] = useState(null);

  useEffect(() => {
    isValidToken().then(result => {
      setValidToken(result);
    });
  }, []);

  if (validToken === null) {
    return <div>CHECKING TOKEN...</div>;
  }

  return validToken ? <Route {...props} component={component} /> : <Redirect to={{pathname: '/'}} />;
}