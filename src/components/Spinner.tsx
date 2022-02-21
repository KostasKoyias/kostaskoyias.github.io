import React, { FC } from 'react';

export interface Props {
  type: string;
}

const Spinner: FC<Props> = ({ type }) => <div className={'spinner-border text-' + type} role='status' />;

export default Spinner;
