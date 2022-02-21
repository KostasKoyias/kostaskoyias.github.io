import React, { Dispatch, SetStateAction } from 'react';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export const createIcon = (
  iconDefinition: IconDefinition,
  props?: Omit<FontAwesomeIconProps, 'icon'> & { key?: string }
) => <FontAwesomeIcon icon={iconDefinition} {...props} />;

export function updateState<S>(
  setState: Dispatch<SetStateAction<S>>,
  updatedStateOrCallback: Partial<S> | ((prevState: S) => Partial<S>)
) {
  if (updatedStateOrCallback instanceof Function) {
    setState((prevState) => ({
      ...prevState,
      ...updatedStateOrCallback(prevState),
    }));
  } else {
    setState((prevState) => ({
      ...prevState,
      ...updatedStateOrCallback,
    }));
  }
}
