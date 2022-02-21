import React, { useEffect, useState } from 'react';
import Spinner from '../Spinner';
import { alertMsg, hosts as hostList } from './config';
import HostsBar from './hosts/HostsBar';
import Projects from './projects/Projects';
import Alert from '../Alert';
import { updateState } from '../utils';
import { Host, HostId, Repo } from './types';
import { BitbucketRepos } from '../../types/bitbucket';
import { GithubRepo } from '../../types/github';
import { resolveRepos } from './helpers';

export interface State {
  alert: boolean;
  loading: boolean;
  selectedHostId: HostId;
  selectedHostRepos: Repo[];
  hosts: Host[];
}

const Work = () => {
  const [state, setState] = useState<State>({
    alert: false,
    loading: false,
    selectedHostId: 'github',
    selectedHostRepos: [],
    hosts: hostList,
  });

  useEffect(() => {
    fetchRepos(state.selectedHostId);
  }, [state.selectedHostId]);

  const fetchRepos = (hostId: HostId) => {
    const { userUrl, headers } = findHostById(hostId) || state.hosts[0];
    updateState(setState, { loading: true });

    fetch(userUrl, { headers })
      .then((httpResponse) => httpResponse.json())
      .then((data) => handleResponse(hostId, data))
      .catch(() => updateState(setState, { alert: true }))
      .finally(() => updateState(setState, { loading: false }));
  };

  const handleResponse = (hostId: HostId, data: GithubRepo[] | BitbucketRepos) => {
    const repos = resolveRepos(hostId, data);
    updateState(setState, {
      selectedHostRepos: repos,
      selectedHostId: hostId,
    });
  };

  const findHostById = (hostId: HostId): Host | undefined => state.hosts.find(({ id }) => id === hostId);

  const switchHost = (hostId: HostId) => updateState(setState, { selectedHostId: hostId });

  const { alert, loading, selectedHostId, selectedHostRepos, hosts } = state;

  return (
    <div id='work'>
      <HostsBar hosts={hosts} selectedHostId={selectedHostId} selectHostCallback={switchHost} />
      {loading ? (
        <Spinner type='dark' />
      ) : alert ? (
        <Alert type={'warning'} message={alertMsg} onClose={() => updateState(setState, { alert: false })} />
      ) : (
        <Projects repos={selectedHostRepos} />
      )}
    </div>
  );
};

export default Work;
