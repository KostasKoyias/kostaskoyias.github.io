import React, { FC } from 'react';
import { Repo } from '../types';
import { createIcon } from '../../utils';

export interface Props {
  repo: Repo;
}

const MAX_CARD_TEXT_CHARACTERS = 200;

const RepoCard: FC<Props> = ({ repo }) => {
  const { name, description, url, icon, avatarUrl } = repo;
  const attributes = [{ key: 'language', value: repo.language || 'None' }];

  const croppedDescription = description.slice(0, MAX_CARD_TEXT_CHARACTERS) + '...';

  return (
    <div className='card'>
      <h5 className='card-title'>
        {name}
        {icon && createIcon(icon)}
        {avatarUrl && <img className='card-logo' src={avatarUrl} alt='cardImage' />}
      </h5>
      <div className='card-body'>
        <div className='card-text'>
          {description.length > MAX_CARD_TEXT_CHARACTERS ? croppedDescription : description}
          <ul className='card-attributes'>
            {attributes.map((attr) => (
              <li key={attr.key}>
                <span className='bold'>{attr.key}</span>: {attr.value}
              </li>
            ))}
            <a href={url} target='_blank' className='card-link' rel='noreferrer'>
              Check it out
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RepoCard;
