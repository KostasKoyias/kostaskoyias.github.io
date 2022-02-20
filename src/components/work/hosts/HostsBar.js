import React from 'react';
import PropTypes from 'prop-types';
import { createIcon } from '../../utils';

const HostsBar = ({ hosts, selectedHostId, selectHostCallback }) => {
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

HostsBar.propTypes = {
  hosts: PropTypes.array.isRequired,
  selectedHostId: PropTypes.string.isRequired,
  selectHostCallback: PropTypes.func.isRequired,
};

export default HostsBar;
