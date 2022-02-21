import React, { FC } from 'react';
import { createIcon } from '../../utils';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export interface Props {
  topicId: string;
  topicIcon?: IconDefinition;
  isMainTopic: boolean;
}

const Topic: FC<Props> = ({ topicId, topicIcon, isMainTopic }) => {
  const className = 'topic ' + (isMainTopic ? 'active' : 'inactive');

  return (
    <div className={className}>
      {topicId}
      {topicIcon && createIcon(topicIcon, { size: 'lg' })}
    </div>
  );
};

export default Topic;
