import React from 'react'
import ReactDOM from 'react-dom'
import { Spinner } from '../utils'
import { alertMsg, hosts } from './config'
import { makeProjects } from './methods'
import { makeHosts, makeTopics } from './options'


class Work extends React.Component {
	constructor() {
		super()
		this.state = { alert: false, projects: false, topic: 0, host: 0 }
		this.switchHost = this.switchHost.bind(this)
		this.updateProjects = this.updateProjects.bind(this)
	}

	componentDidMount() {
		// hide alert on click
		// eslint-disable-next-line react/no-find-dom-node
		ReactDOM.findDOMNode(this).addEventListener('click', () => this.setState({ alert: false }))
		this.callAPI(this.state.host)
	}

	callAPI(host) {
		const { url, headers } = hosts[host]

		fetch(url, { headers })
			.then(httpResponse => httpResponse.json())
			.then(data => this.updateProjects(data, host))
			.catch(error => {
				this.setState({ alert: true, projects: true })
				console.error(error)
			})
	}

	switchHost(host) {
		const newState = { projects: hosts[host].projects, topic: 0, host: host }
		this.setState(newState, !newState.projects ? () => this.callAPI(host) : null)
	}

	updateProjects(data, host) {
		const projects = makeProjects(data)
		hosts[host].projects = projects
		this.setState({ projects, host })
	}

	render() {
		const { alert, projects, topic, host } = this.state
		const header = makeHosts(host, this.switchHost)

		return (
			<div id="work">
				{header}
				{!projects ?
					Spinner('dark') :
					alert ?
						<div className="alert alert-warning">{alertMsg}</div>
						:
						topic < projects.length &&
						<div id="projects">
							{projects.length > 1 && makeTopics(projects, topic, (topic) => this.setState({ topic }))}
							{projects[topic].body}
						</div>
				}
			</div>)
	}
}

export default Work