import React from 'react'
import PropTypes from 'prop-types'
import Topic from './Topic'

const TopicList = ({
	topics,
	mainTopic,
	setMainTopic
}) => {
	return (
		<nav id="topics">
			<ul className="nav-list">
				{topics.map( ({ id: topicId, icon }) => (
					<li key={topicId}  onClick={() => setMainTopic(topicId)}>
						<Topic
							topicId={topicId}
							topicIcon={icon}
							isMainTopic={topicId === mainTopic}
						/>
					</li>))}
			</ul>
		</nav>)
}

TopicList.propTypes = {
	topics: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
	mainTopic: PropTypes.string.isRequired,
	setMainTopic: PropTypes.func.isRequired
}

export default TopicList