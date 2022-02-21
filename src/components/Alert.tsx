import React, { FC } from 'react';

export interface Props {
  type: string;
  message: string;
  onClose: () => void;
}

const Alert: FC<Props> = ({ type, message, onClose }) => (
  <div className={`alert alert-${type} alert-dismissible fade show`} role='alert'>
    {message}
    <button type='button' className='close' data-dismiss='alert' aria-label='Close' onClick={onClose}>
      <span aria-hidden='true'>&times;</span>
    </button>
  </div>
);

export default Alert;
