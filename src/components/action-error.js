import React from 'react';

export default function ActionError (props) {
  return (
    <div className={'error'}>
      <h2>{props.message}</h2>
    </div>
  );
};