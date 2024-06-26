import React from 'react';
import { createIcon } from '../utils';
import {
  faLinkedin,
  faInstagram,
  faYoutubeSquare,
  faGithubSquare,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFileAlt, faAt } from '@fortawesome/free-solid-svg-icons';
import { LinkSection } from './types';

const links = {
  mail: <span>konstantinos.kogias97{createIcon(faAt)}gmail.com</span>,
  github: 'https://github.com/KostasKoyias',
  linkedIn: 'https://www.linkedin.com/in/kostas-koyias-687269175/',
  fb: 'https://www.facebook.com/kostaskoyias',
  uTube: 'https://www.youtube.com/channel/UC-Bg1WdBrEKL4B9TIjh7QZw?app=desktop',
  instagram: 'https://www.instagram.com/kostas_koyias/?hl=en',
  cv: 'docs/CV.pdf',
};

const workLinks: LinkSection = {
  pos: 'col-md-3 offset-md-1',
  header: 'Work',
  links: [
    {
      icon: faGithubSquare,
      label: 'github',
      anchor: { href: links.github, target: '_blank' },
    },
    {
      icon: faLinkedin,
      label: 'linkedIn',
      anchor: { href: links.linkedIn, target: '_blank' },
    },
    {
      icon: faEnvelope,
      label: links.mail,
      anchor: { href: '#footer', className: 'dead-anchor' },
    },
    {
      icon: faFileAlt,
      label: ' Resume',
      anchor: { href: links.cv, target: '_blank' },
    },
  ],
};

const personalLinks = {
  pos: 'col-md-2',
  header: 'Personal',
  links: [
    {
      icon: faYoutubeSquare,
      label: 'youtube',
      anchor: { href: links.uTube, target: '_blank' },
    },
    {
      icon: faInstagram,
      label: 'instagram',
      anchor: { href: links.instagram, target: '_blank' },
    },
  ],
};

export { workLinks, personalLinks };
