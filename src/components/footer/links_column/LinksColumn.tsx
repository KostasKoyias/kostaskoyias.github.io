import React, { FC, ReactElement } from 'react';
import { Link } from '../types';
import { createIcon } from '../../utils';

export interface Props {
  pos: string;
  header: string;
  links: Link[];
}

const LinksColumn: FC<Props> = ({ pos, header, links }) => {
  return (
    <div className={pos}>
      <h3 className='h-beautify'>{header}</h3>
      <ul>
        {links.map(
          ({ icon, label, anchor }): ReactElement => (
            <li key={label.toString()} className='nav-item'>
              <a className='nav-link' {...anchor}>
                {createIcon(icon, { size: 'lg' })}
                {label}
              </a>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default LinksColumn;
