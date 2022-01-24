import React from 'react'
import AccountLink from './account_link/AccountLink'
import { addKey } from '../../utils'
import PropTypes from 'prop-types'

function LinksColumn({ pos, header, links }) {
	const accountLinks = links.map(AccountLink).map(addKey)

	return (
		<div className={pos}>
			<h3 className="h-beautify">{header}</h3>
			<ul>{accountLinks}</ul>
		</div>
	)
}

LinksColumn.propTypes = {
	pos: PropTypes.string,
	header: PropTypes.string,
	links: PropTypes.arrayOf(PropTypes.object)
}

export default LinksColumn