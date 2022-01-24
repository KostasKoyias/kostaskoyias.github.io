import React from 'react'
import PropTypes from 'prop-types'

// create a Card Component with title, description, an unordered list of properties and a list of links
function Card(props) {
	const { key, title, description, avatarUrl, urls, ...rest } = props
	const maxDescription = 200, croppedDescription = description.slice(0, maxDescription) + '...'
	const linkProps = { target: '_blank', className: 'card-link' }
	const logo = avatarUrl && <img key={Math.max(...title.map(t => t.key)) + 1} className="card-logo" src={avatarUrl} alt="cardImage" />
	return (<div key={key} className="card">
		<h5 className="card-title">{[...title, logo]}</h5>
		<div className="card-body">
			<div className="card-text">
				{description.length > maxDescription ? croppedDescription : description}
				<ul>{Object.keys(rest)
					.map((k, i) => <li key={i}><span className="bold">{k}</span>{': ' + rest[k]}</li>)}
				{urls.map((u, i) => <a href={u.href} key={i} {...linkProps}>{u.name}</a>)}
				</ul>
			</div>
		</div>
	</div>)
}

Card.propTypes = {
	key: PropTypes.string,
	title: PropTypes.string,
	description: PropTypes.string,
	avatarUrl: PropTypes.string,
	urls: PropTypes.arrayOf(PropTypes.string)
}

export default Card