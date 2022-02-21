import React, { FC, useMemo } from 'react';
import { grid } from '../config';
import RepoCard from '../repo-card/RepoCard';
import { sortRepos } from './helpers';
import { Repo } from '../types';

export interface Props {
  repos: Repo[];
}

const CardGrid: FC<Props> = ({ repos }) => {
  // Split repos in chunks of size grid.cardsPerRow
  const reposByRow = useMemo(() => {
    const rowsNeeded = Math.ceil(repos.length / grid.cardsPerRow);
    const sortedRepos = sortRepos(repos);

    return [null, rowsNeeded].map((_, index) =>
      sortedRepos.slice(index * grid.cardsPerRow, (index + 1) * grid.cardsPerRow)
    );
  }, [repos]);

  return (
    <>
      {reposByRow.map((rowRepos, i) => (
        <div key={i} className='row'>
          {rowRepos.map((repo) => {
            return (
              <div key={repo.id} className={'col-md-' + grid.rows / grid.cardsPerRow}>
                <RepoCard repo={repo} />
              </div>
            );
          })}
        </div>
      ))}
    </>
  );
};

export default CardGrid;
