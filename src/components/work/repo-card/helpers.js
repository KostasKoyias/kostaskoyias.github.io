import { faGlobe, faStar } from '@fortawesome/free-solid-svg-icons'
import { createIcon } from '../../utils'

const isThisRepo = (repo) => window.location.hostname === repo.name

// add an icon if the repository is starred
// but use globe icon for this repository regardless
export const getRepoIcon = (repo) => {
	const icon = isThisRepo(repo) ?
		faGlobe
		:
		repo.watchers > 0 && faStar

	return icon && createIcon(icon, { key: 1 })
}

// if repo has a web-page, and it is not this repo, link to the web-page else to the source code
export const getRepoUrl = (repo) => repo.homepage && !isThisRepo(repo) ?
	repo.homepage
	:
	(repo.html_url || repo.links.html.href)
