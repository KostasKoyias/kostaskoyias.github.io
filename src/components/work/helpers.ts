import { AnyRepo, HostId, Repo } from './types';
import { GithubRepo } from '../../types/github';
import { BitbucketRepo, BitbucketRepos } from '../../types/bitbucket';
import { faGlobe, faStar, IconDefinition } from '@fortawesome/free-solid-svg-icons';

export const resolveRepos = (hostId: HostId, anyRepos: GithubRepo[] | BitbucketRepos): Repo[] => {
  const repos = hostId === 'github' ? (anyRepos as GithubRepo[]) : (anyRepos as BitbucketRepos).values;
  const resolver = resolvers[hostId];

  return repos.map(resolver);
};

const resolvers: Record<HostId, (anyRepo: AnyRepo) => Repo> = {
  github: (anyRepo: AnyRepo) => resolveGithubRepo(anyRepo as GithubRepo),
  bitbucket: (anyRepo: AnyRepo) => resolveBitbucketRepo(anyRepo as BitbucketRepo),
};

/*
 * Github repo resolution
 */
const resolveGithubRepo = (repo: GithubRepo): Repo => ({
  id: repo.id.toString(),
  name: repo.name,
  description: repo.description,
  url: getGithubRepoUrl(repo),

  // Github only
  stars: repo.watchers,
  topics: repo.topics,
  isFork: repo.fork,
  lastUpdated: repo.updated_at,
  language: repo.language,
  icon: getGithubRepoIcon(repo),
});

const isThisGithubRepo = (repo: GithubRepo) => window.location.hostname === repo.name;

// if repo has a web-page, and it is not this repo, link to the web-page else to the source code
const getGithubRepoUrl = (repo: GithubRepo): string =>
  repo.homepage && !isThisGithubRepo(repo) ? repo.homepage : repo.html_url;

// add an icon if the repository is starred
// but use globe icon for this repository regardless
export const getGithubRepoIcon = (repo: GithubRepo): IconDefinition | undefined => {
  const icon = isThisGithubRepo(repo) ? faGlobe : (repo.watchers | 0) > 0 && faStar;

  return icon || undefined;
};

/*
 * Bitbucket repo resolution
 */
const resolveBitbucketRepo = (repo: BitbucketRepo): Repo => ({
  id: repo.uuid,
  name: repo.name,
  description: repo.description,
  url: repo.links.html.href,

  // Bitbucket only
  avatarUrl: repo.links.avatar.href,
});
