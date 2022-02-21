import { blacklist } from '../config';
import { ProjectTopic, Repo } from '../types';

export const groupReposByTopic = (repos: Repo[], topics: ProjectTopic[]): Map<string, Repo[]> => {
  const importantRepos = repos.filter((r) => !blacklist.some((b) => r.name.endsWith(b)));

  // classify repos, assigning each to the appropriate topic list
  return new Map(
    topics
      .map(({ id: topicId }): [string, Repo[]] => [
        topicId,
        importantRepos.filter((repo): boolean => findTopic(repo, topics) === topicId),
      ])
      .filter(([, repos]): boolean => !!repos.length)
  );
};

// assign each project to the very first matching topic
const findTopic = (repo: Repo, topics: ProjectTopic[]) => {
  if (repo.isFork) return 'forks-contributions';
  else if (!repo.topics) return 'other';

  for (const topic of topics) {
    const { id: topicId } = topic;
    const topicIdLowered = topicId.toLowerCase();
    if (repo.topics.find((name) => name.toLowerCase().includes(topicIdLowered))) return topicId;
  }

  return 'other';
};
