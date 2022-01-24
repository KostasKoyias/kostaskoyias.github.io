import React from 'react'
import { createIcon } from '../../../utils'
import PropTypes from 'prop-types'

function AccountLink({ icon, label, anchor }) {
	const { className, ...rest } = anchor
	return (
		<li className="nav-item">
			<a className={className || 'nav-link'} {...rest}>
				{createIcon(icon, { size: 'lg' })}
				{label}
			</a>
		</li>
	)
}

AccountLink.propTypes = {
	icon: PropTypes.object,
	label: PropTypes.string,
	anchor: PropTypes.object
}

export default AccountLink