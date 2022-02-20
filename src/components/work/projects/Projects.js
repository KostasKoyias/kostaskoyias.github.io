import React, { useEffect, useMemo, useState } from 'react';
import TopicList from '../topics/TopicList';
import { topics } from '../config';
import PropTypes from 'prop-types';
import { groupReposByTopic } from './helpers';
import CardGrid from '../card-grid/CardGrid';

const Projects = (props) => {
  const { repos } = props;
  const reposByTopic = useMemo(() => groupReposByTopic(repos, topics), [repos]);

  const findTopicId = () => (reposByTopic.size ? reposByTopic.keys().next().value : '');
  const [selectedTopicId, setSelectedTopicId] = useState(findTopicId());

  useEffect(() => {
    setSelectedTopicId(findTopicId());
  }, [reposByTopic]);

  const selectedTopicRepos = reposByTopic.get(selectedTopicId);

  return (
    <div id='projects'>
      {/* Display topic list if only there are projects of more than one topic */}
      {reposByTopic.size > 1 && (
        <TopicList topics={topics} mainTopic={selectedTopicId} setMainTopic={setSelectedTopicId} />
      )}
      {selectedTopicRepos && <CardGrid repos={selectedTopicRepos} />}
    </div>
  );
};

Projects.propTypes = {
  repos: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default Projects;
