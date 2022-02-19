import React from 'react'
import PropTypes from 'prop-types'
import { getRepoUrl, getRepoIcon } from './helpers'

const RepoCard = (props) => {
	const { repo } = props

	const title = repo.name
	const description = repo.description
	const url = getRepoUrl(repo)
	const icon = getRepoIcon(repo)
	const avatarUrl = repo.links && repo.links.avatar.href
	const attributes = [
		{ key: 'language', value: repo.language || 'None' }
	]

	const maxDescription = 200, croppedDescription = description.slice(0, maxDescription) + '...'

	return (
		<div className="card">
			<h5 className="card-title">
				{title}
				{icon}
				{avatarUrl && <img className="card-logo" src={avatarUrl} alt="cardImage" />}
			</h5>
			<div className="card-body">
				<div className="card-text">
					{description.length > maxDescription ? croppedDescription : description}
					<ul className='card-attributes'>
						{attributes.map((attr) =>
							<li key={attr.key}>
								<span className="bold">{attr.key}</span>: {attr.value}
							</li>)}
						<a href={url} target='_blank' className='card-link' rel="noreferrer">Check it out</a>
					</ul>
				</div>
			</div>
		</div>)
}

export const repoShape = PropTypes.shape({
	id: PropTypes.number,
	uuid: PropTypes.string,
	name: PropTypes.string,
	language: PropTypes.string,
	description: PropTypes.string,
	node_id: PropTypes.string,
	watchers: PropTypes.number,
	homepage: PropTypes.string,
	html_url: PropTypes.string,
	pushed_at: PropTypes.string,
	fork: PropTypes.bool,
	topics: PropTypes.arrayOf(PropTypes.string),
	links: PropTypes.shape({
		avatar: PropTypes.shape({
			href: PropTypes.string.isRequired
		}).isRequired
	})
})

RepoCard.propTypes = {
	repo: repoShape
}

export default RepoCard