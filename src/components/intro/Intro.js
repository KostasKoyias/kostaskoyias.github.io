import React from 'react'
import { alertMsg } from './config'
import Spinner from '../Spinner'
import Status from './Status'
import Bio from './Bio'
import { githubHeaders, githubUser } from '../config'
import { faBriefcase, faBuilding, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

class Intro extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			alert: false,
			isCallDone: false,
			avatar: null,
			details: [
				{ key: 'bio', alias: 'position', icon: faBriefcase },
				{ key: 'company', icon: faBuilding },
				{ key: 'location', icon: faMapMarkerAlt }
			]
		}
	}

	componentDidMount() {
		fetch(githubUser, { headers: githubHeaders })
			.then(httpResponse => httpResponse.json())
			.then(d => this.onMount(d))
			.catch(error => {
				this.setState({ alert: true })
				console.error(error)
			})
			.finally(() => this.setState({ isCallDone: true }))
	}

	onMount(data) {
		const details = []
		this.state.details.forEach(detail => {
			if (data[detail.key]) { // omit missing status properties
				details.push({ ...detail, value: data[detail.key] })
			}
		})

		this.setState({
			avatar: data['avatar_url'],
			details
		})
	}

	render() {
		return <div id="intro" className="card">
			{this.state.avatar && <img src={this.state.avatar} alt="me"/>}
			<div className="card-body">
				<h5 className="card-title">About me</h5>
				<Bio />
				{this.state.isCallDone ?
					this.state.alert ?
						<div className="alert alert-warning">{alertMsg}</div>
						:
						<Status details={this.state.details} />
					:
					<Spinner type='dark' />}
			</div>
		</div>
	}
}

export default Intro