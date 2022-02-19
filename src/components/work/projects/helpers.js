import { blacklist } from '../config'


// returns a Map<topicId, repo[]>
export const groupReposByTopic = (repos, topics) => {
	const importantRepos = repos.filter(r => !blacklist.some(b => r.name.endsWith(b)))

	// classify repos, assigning each to the appropriate topic list
	return new Map(topics
		.map(({ id: topicId }) => [topicId, importantRepos.filter(repo => findTopic(repo, topics) === topicId)])
		.filter(([, repos ]) => !!repos.length))
}

// assign each project to the very first matching topic
const findTopic = (repo, topics) => {
	if (repo.fork)
		return 'forks-contributions'
	else if (!repo.topics)
		return 'other'

	for (let topic of topics) {
		const { id: topicId } = topic
		const topicIdLowered = topicId.toLowerCase()
		if (repo.topics.find(name => name.toLowerCase().includes(topicIdLowered)))
			return topicId
	}

	return 'other'
}
