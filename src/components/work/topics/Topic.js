import React from 'react'
import PropTypes from 'prop-types'
import { createIcon } from '../../utils'

const Topic = ({
	topicId,
	topicIcon,
	isMainTopic,
}) => {
	const className = 'topic ' + (isMainTopic ? 'active' : 'inactive')

	return (
		<div className={className}>
			{topicId}
			{topicIcon && createIcon(topicIcon, { size: 'lg' })}
		</div>)
}

Topic.propTypes = {
	topicId: PropTypes.string.isRequired,
	topicIcon: PropTypes.object,
	isMainTopic: PropTypes.bool.isRequired,
}

export default Topic