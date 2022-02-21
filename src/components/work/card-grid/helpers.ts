import { Repo } from '../types';

export const sortRepos = (repos: Repo[]): Repo[] =>
  repos
    // starred projects go first, putting the most recently modified ones on top
    .sort((r0, r1) => repoStars(r1) - repoStars(r0) || repoLastUpdated(r1) - repoLastUpdated(r0));

const repoStars = (repo: Repo): number => repo.stars || 0;

const repoLastUpdated = (repo: Repo): number => (repo.lastUpdated ? new Date(repo.lastUpdated).getTime() : 0);
