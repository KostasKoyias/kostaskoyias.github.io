import { GITHUB_API_URL, GITHUB_HEADERS } from '../config';
import { faBitbucket, faGithub, faLinux } from '@fortawesome/free-brands-svg-icons';
import { Host, ProjectTopic } from './types';

const hosts: Host[] = [
  {
    id: 'github',
    userUrl: `${GITHUB_API_URL}/users/KostasKoyias/repos`,
    headers: GITHUB_HEADERS,
    icon: faGithub,
  },
  {
    id: 'bitbucket',
    userUrl: 'https://api.bitbucket.org/2.0/repositories/%7Bace2a2f8-ac28-4d09-b008-660141a872a0%7D',
    headers: {},
    icon: faBitbucket,
  },
];
const alertMsg = '!! Failed to load projects. Please check your connection & reload this page.';
const repoBlacklist = ['api', 'ui'];

const topics: ProjectTopic[] = [
  { id: 'linux', icon: faLinux },
  { id: 'compiler-design' },
  { id: 'web' },
  { id: 'data-science' },
  { id: 'forks-contributions' },
  { id: 'other' },
];

export { hosts, topics, alertMsg, repoBlacklist };
