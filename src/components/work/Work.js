import React, { useEffect, useState } from 'react'
import Spinner from '../Spinner'
import { alertMsg, hosts as hostList } from './config'
import HostsBar from './hosts/HostsBar'
import Projects from './projects/Projects'
import Alert from '../Alert'
import { updateState } from '../utils'


const Work = () => {
	const [state, setState] = useState({
		alert: false,
		loading: false,
		selectedHostId: 'github',
		repos: new Map(hostList.map(({ id: hostId }) => [hostId, []])), // cache repos per host
		hosts: hostList
	})

	useEffect( () => {
		if (!state.repos.get(state.selectedHostId).length) {
			fetchRepos(state.selectedHostId)
		}
	}, [state.selectedHostId])

	const fetchRepos = (hostId) => {
		const { url, headers } = findHost(hostId)
		updateState(setState, { loading: true })

		fetch(url, { headers })
			.then(httpResponse => httpResponse.json())
			.then(data => handleResponse(data, hostId))
			.catch(() => updateState(setState, { alert: true }))
			.finally(() => updateState(setState, { loading: false }))
	}

	const handleResponse = (data, hostId) => {
		const hostRepos = Array.isArray(data) ? data : data.values
		updateState(setState, ({ hosts, repos }) => ({
			repos: new Map(repos.set(hostId, hostRepos)),
			selectedHostId: hostId,
			hosts: hosts.map((host) => host.id === hostId ? { ...host, repos } : host)
		}))
	}

	const findHost = (hostId) => state.hosts.find(({ id }) => id === hostId)

	const switchHost =(hostId) => updateState(setState, { selectedHostId: hostId })

	const { alert, selectedHostId, hosts, loading, repos } = state
	const hostRepos = repos.get(selectedHostId)

	return (
		<div id="work">
			<HostsBar hosts={hosts} selectedHostId={selectedHostId} selectHostCallback={switchHost} />
			{loading ?
				<Spinner type='dark' />
				:
				alert ?
					<Alert type={'warning'} message={alertMsg} onClose={() => updateState(setState, { alert: false })}/>
					:
					<Projects repos={hostRepos} />
			}
		</div>)
}

export default Work