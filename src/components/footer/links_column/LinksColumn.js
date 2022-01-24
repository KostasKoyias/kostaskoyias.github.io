import React from 'react'
import AccountLink from './account_link/AccountLink'
import PropTypes from 'prop-types'

function LinksColumn({ pos, header, links }) {
	const accountLinks = links.map(AccountLink)

	return (
		<div className={pos}>
			<h3 className="h-beautify">{header}</h3>
			<ul>{accountLinks}</ul>
		</div>
	)
}

LinksColumn.propTypes = {
	pos: PropTypes.string.isRequired,
	header: PropTypes.string.isRequired,
	links: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default LinksColumn