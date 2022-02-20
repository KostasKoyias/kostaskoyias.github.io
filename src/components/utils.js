import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const createIcon = (iconDefinition, props) => <FontAwesomeIcon icon={iconDefinition} {...props} />;

export const updateState = (setState, updatedStateOrCallback, ...rest) => {
  if (updatedStateOrCallback instanceof Function) {
    setState((prevState) => ({
      ...prevState,
      ...updatedStateOrCallback(prevState),
      ...rest,
    }));
  } else {
    setState((prevState) => ({
      ...prevState,
      ...updatedStateOrCallback,
      ...rest,
    }));
  }
};
