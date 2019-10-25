import React from 'react';

interface Props {
  status: 'success' | 'danger' | 'warning';
  message: string;
}
const Alert = ({ status, message }: Props) => {
  return (
    <div className={`col-lg-12 alert alert-${status}`} role="alert">
      {message}
    </div>
  );
};

export default Alert;
