import React, { FC } from 'react';
import Topic from './Topic';
import { ProjectTopic } from '../types';

export interface Props {
  topics: ProjectTopic[];
  mainTopic: string;
  setMainTopic: (topicId: string) => void;
}

const TopicList: FC<Props> = ({ topics, mainTopic, setMainTopic }) => {
  return (
    <nav id='topics'>
      <ul className='nav-list'>
        {topics.map(({ id: topicId, icon }) => (
          <li key={topicId} onClick={() => setMainTopic(topicId)}>
            <Topic topicId={topicId} topicIcon={icon} isMainTopic={topicId === mainTopic} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TopicList;
