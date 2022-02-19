import React, { useMemo } from 'react'
import { grid } from '../config'
import PropTypes from 'prop-types'
import RepoCard, { repoShape } from '../repo-card/RepoCard'


const CardGrid = (props) => {
	const { repos } = props

	// Split repos in chunks of size grid.cardsPerRow
	const reposByRow = useMemo(() => {
		const rowsNeeded = Math.ceil(repos.length / grid.cardsPerRow)
		const sortedRepos = repos
			// starred projects go first, putting the most recently modified ones on top
			.sort((r0, r1) => r1.watchers - r0.watchers || new Date(r1.pushed_at) - new Date(r0.pushed_at))

		return  Array(null, rowsNeeded).map((_, index) =>
			sortedRepos.slice(index * grid.cardsPerRow, (index + 1) * grid.cardsPerRow))
	}, [repos])


	return (
		<>
			{reposByRow.map((rowRepos, i) => (
				<div key={i} className="row">
					{rowRepos.map(repo =>
						<div key={repo.id || repo.uuid} className={'col-md-' + grid.rows / grid.cardsPerRow}>
							<RepoCard key={repo.id || repo.uuid} repo={repo} />
						</div>)}
				</div>))}
		</>
	)
}

CardGrid.propTypes = {
	repos: PropTypes.arrayOf(repoShape).isRequired,
}

export default CardGrid