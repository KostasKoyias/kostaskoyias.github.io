import React, { FC } from 'react';
import { createIcon } from '../../utils';
import { Host, HostId } from '../types';

export interface Props {
  hosts: Host[];
  selectedHostId: string;
  selectHostCallback: (hostId: HostId) => void;
}

const HostsBar: FC<Props> = ({ hosts, selectedHostId, selectHostCallback }) => {
  // noinspection JSUnusedGlobalSymbols
  const icons = hosts.map(({ id: hostId, icon }) =>
    createIcon(icon, {
      className: `host-icon  ${hostId !== selectedHostId ? 'inactive' : 'active'}`,
      key: hostId,
      size: 'lg',
      onClick: () => selectHostCallback(hostId),
    })
  );

  return (
    <h1 className='display-4'>
      {'Projects on'}
      {icons}
    </h1>
  );
};

export default HostsBar;
