import React from 'react'
import Spinner from '../Spinner'
import { alertMsg, hosts } from './config'
import HostsBar from './hosts/HostsBar'
import Projects from './projects/Projects'
import Alert from '../Alert'


class Work extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			alert: false,
			loading: false,
			repos: [],
			selectedHostId: 'github',
			hosts: hosts
		}
		this.switchHost = this.switchHost.bind(this)
		this.updateHost = this.updateHost.bind(this)
	}

	componentDidMount() {
		// hide alert on click
		this.callAPI(this.state.selectedHostId)
	}

	callAPI(hostId) {
		const { url, headers } = this.findHost(hostId)
		this.setState({ loading: true })

		fetch(url, { headers })
			.then(httpResponse => httpResponse.json())
			.then(data => this.updateHost(data, hostId))
			.catch(error => {
				this.setState({ alert: true })
				console.error(error)
			})
			.finally(() => this.setState({ loading: false }))
	}

	findHost(hostId) {
		return this.state.hosts.find(({ id }) => id === hostId)
	}

	updateHost(data, hostId) {
		const repos = Array.isArray(data) ? data : data.values
		this.setState(({ hosts }) => ({
			repos,
			selectedHostId: hostId,
			hosts: hosts.map((host) => host.id === hostId ? { ...host, repos } : host)
		}))
	}

	switchHost(hostId) {
		const newHostCachedRepos =  this.findHost(hostId).repos
		const newState = { ...(newHostCachedRepos && { repos: newHostCachedRepos }), selectedHostId: hostId }
		this.setState(newState, !newHostCachedRepos ? () => this.callAPI(hostId) : null)
	}


	render() {
		const { alert, repos, selectedHostId, hosts, loading } = this.state

		return (
			<div id="work">
				<HostsBar hosts={hosts} selectedHostId={selectedHostId} selectHostCallback={this.switchHost} />
				{loading ?
					<Spinner type='dark' />
					:
					alert ?
						<Alert type={'warning'} message={alertMsg} onClose={() => this.setState({ alert: false })}/>
						:
						<Projects repos={repos} />
				}
			</div>)
	}
}

export default Work