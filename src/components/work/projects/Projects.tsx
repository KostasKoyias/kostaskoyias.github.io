import React, { FC, useEffect, useMemo, useState } from 'react';
import TopicList from '../topics/TopicList';
import { topics } from '../config';
import { groupReposByTopic } from './helpers';
import CardGrid from '../card-grid/CardGrid';
import { Repo } from '../types';

export interface Props {
  repos: Repo[];
}

const Projects: FC<Props> = ({ repos }) => {
  const reposByTopic: Map<string, Repo[]> = useMemo(() => groupReposByTopic(repos, topics), [repos]);

  const firstTopicId = () => (reposByTopic.size ? reposByTopic.keys().next().value : '');
  const [selectedTopicId, setSelectedTopicId] = useState(firstTopicId());

  useEffect(() => {
    setSelectedTopicId(firstTopicId());
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

export default Projects;
