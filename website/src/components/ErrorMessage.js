import React from 'react';
import '../styles/ErrorMessage.css';

function ErrorMessage({ message }) {
  return (
    <div className="ErrorMessage">
      <p>{message}</p>
    </div>
  );
}

export default ErrorMessage;

