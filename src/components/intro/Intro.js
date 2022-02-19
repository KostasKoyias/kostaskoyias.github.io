import React, { useEffect, useState } from 'react'
import { alertMsg } from './config'
import Spinner from '../Spinner'
import Status from './Status'
import Bio from './Bio'
import { githubHeaders, githubUser } from '../config'
import { faBriefcase, faBuilding, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import Alert from '../Alert'
import { updateState } from '../utils'

const Intro = () => {
	const [state, setState] = useState({
		alert: false,
		isCallDone: false,
		avatar: null,
		details: [
			{ key: 'bio', alias: 'position', icon: faBriefcase },
			{ key: 'company', icon: faBuilding },
			{ key: 'location', icon: faMapMarkerAlt }
		]
	})

	useEffect(() => {
		fetch(githubUser, { headers: githubHeaders })
			.then(httpResponse => httpResponse.json())
			.then(d => onMount(d))
			.catch(error => {
				updateState(setState, { alert: true })
				console.error(error)
			})
			.finally(() => updateState(setState, { isCallDone: true }))
	}, [])

	const onMount = (data) => {
		const details = []
		state.details.forEach(detail => {
			if (data[detail.key]) { // omit missing status properties
				details.push({ ...detail, value: data[detail.key] })
			}
		})

		updateState(setState, {
			avatar: data['avatar_url'],
			details
		})
	}

	return (
		<div id="intro" className="card">
			{state.avatar && <img src={state.avatar} alt="me"/>}
			<div className="card-body">
				<h5 className="card-title">About me</h5>
				<Bio />
				{state.isCallDone ?
					state.alert ?
						<Alert type={'warning'} message={alertMsg} onClose={() => updateState(setState, { alert: false })} />
						:
						<Status details={state.details} />
					:
					<Spinner type='dark' />}
			</div>
		</div>)
}

export default Intro