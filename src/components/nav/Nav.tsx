import React, { FC } from 'react';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { createIcon } from '../utils';

const Nav: FC = () => {
  // create a navbar item for each section
  const items = [
    { title: 'About me', href: '#intro' },
    { title: 'My Projects', href: '#work' },
    { title: 'Contact', href: '#footer' },
  ];

  return (
    <nav className='navbar navbar-dark bg-dark'>
      <a id='hub-link' href='/#'>
        {createIcon(faGithub)}
      </a>
      <ul id='nav-list'>
        {items.map((item, i) => (
          <li key={i} className='nav-item'>
            <a className='nav-link' href={item.href}>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
