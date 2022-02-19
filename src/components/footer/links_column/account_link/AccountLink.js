import React from 'react'
import { createIcon } from '../../../utils'
import PropTypes from 'prop-types'

const AccountLink = ({ icon, label, anchor: { className, ...anchorProps } }) => (
	<li key={label} className="nav-item">
		<a className={className || 'nav-link'} {...anchorProps}>
			{createIcon(icon, { size: 'lg' })}
			{label}
		</a>
	</li>
)

AccountLink.propTypes = {
	icon: PropTypes.object.isRequired,
	label: PropTypes.string.isRequired,
	anchor: PropTypes.object.isRequired
}

export default AccountLink