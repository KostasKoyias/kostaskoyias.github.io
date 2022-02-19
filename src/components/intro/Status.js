import React from 'react'
import PropTypes from 'prop-types'
import { createIcon } from '../utils'

/**
 * @param {{
	details: [{
	  key: string,
	  alias: string,
	  icon: object,
	  value: string,
	}]}} props
 */
const Status = (props) => {
	const { details } = props
	return (
		<div id="status">
			<br/>
			<h5 className="card-title">Current Status</h5>
			<ul>
				{details.map(detail => {
					const actualKey = detail.alias || detail.key
					return (
						<li key={actualKey} className="nav-item">
							{createIcon(detail.icon)}
							<span className="status-key">
								{actualKey}
							</span>
							{':'}
							<span>{detail.value}</span>
						</li>
					)})}
			</ul>
		</div>
	)
}

Status.propTypes = {
	details: PropTypes.arrayOf(PropTypes.shape({
		key: PropTypes.string.isRequired,
		alias: PropTypes.string,
		icon: PropTypes.object.isRequired,
		value: PropTypes.string.isRequired
	}))
}

export default Status