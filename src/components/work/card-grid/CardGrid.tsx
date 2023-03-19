import React, { FC } from 'react';
import RepoCard from '../repo-card/RepoCard';
import { Repo } from '../types';

export interface Props {
  repos: Repo[];
}

const CardGrid: FC<Props> = ({ repos }) => (
  <div className={'row'}>
    {repos.map((repo) => (
      <div className={'col-lg-3 col-md-6 col-sm-12'} key={`repo-card-${repo.id}`}>
        <RepoCard repo={repo} />
      </div>
    ))}
  </div>
);

export default CardGrid;
