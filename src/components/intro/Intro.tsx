import React, { FC, useEffect, useState } from 'react';
import { alertMsg } from './config';
import Spinner from '../Spinner';
import Status from './Status';
import Bio from './Bio';
import { GITHUB_HEADERS, GITHUB_API_URL } from '../config';
import Alert from '../Alert';
import { updateState } from '../utils';
import { GithubUser } from '../../types/github';

interface State {
  alert: boolean;
  loading: boolean;
  user?: GithubUser;
}

const Intro: FC = () => {
  const [state, setState] = useState<State>({
    alert: false,
    loading: true,
    user: undefined,
  });

  useEffect(() => {
    fetch(`${GITHUB_API_URL}/users/KostasKoyias`, { headers: GITHUB_HEADERS })
      .then((httpResponse) => httpResponse.json())
      .then((user) => updateState(setState, { user }))
      .catch((error) => {
        updateState(setState, { alert: true });
        console.error(error);
      })
      .finally(() => updateState(setState, { loading: false }));
  }, []);

  const { user } = state;

  return (
    <div id='intro' className='card'>
      {user?.avatar_url && <img src={user.avatar_url} alt='me' />}
      <div className='card-body'>
        <h5 className='card-title'>About me</h5>
        <Bio />
        {state.loading ? (
          <Spinner type='dark' />
        ) : state.alert ? (
          <Alert type={'warning'} message={alertMsg} onClose={() => updateState(setState, { alert: false })} />
        ) : (
          user && <Status user={user} />
        )}
      </div>
    </div>
  );
};

export default Intro;
