import React, { FC } from 'react';
import { createIcon } from '../utils';
import { faBriefcase, faBuilding, faMapMarkerAlt, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { GithubUser } from '../../types/github';

interface Detail {
  name: string;
  icon: IconDefinition;
  value: string;
}

export interface Props {
  user: GithubUser;
}

const Status: FC<Props> = (props) => {
  const { user } = props;
  const details: Detail[] = [
    { name: 'position', icon: faBriefcase, value: user.bio },
    { name: 'company', icon: faBuilding, value: user.company },
    { name: 'location', icon: faMapMarkerAlt, value: user.location },
  ];

  return (
    <div id='status'>
      <br />
      <h5 className='card-title'>Current Status</h5>
      <ul className='status-list'>
        {details.map(({ name, icon, value }) => (
          <li key={name} className='nav-item'>
            {createIcon(icon)}
            <span className='status-key'>{name}</span>
            {':'}
            <span>{value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Status;
