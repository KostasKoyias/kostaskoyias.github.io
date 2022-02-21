import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { GithubRepo } from '../../types/github';
import { BitbucketRepo } from '../../types/bitbucket';

export type HostId = 'github' | 'bitbucket';

export interface Host {
  id: HostId;
  userUrl: string;
  headers: HeadersInit;
  icon: IconDefinition;
}

export type TopicId = 'linux' | 'compiler-design' | 'web' | 'data-science' | 'forks-contributions' | 'other';

export interface ProjectTopic {
  id: TopicId;
  icon?: IconDefinition;
}

export type AnyRepo = GithubRepo | BitbucketRepo;

export interface Repo {
  // Common properties, actual name might differ e.g id = Github.id | Bitbucket.uuid
  id: string;
  name: string;
  description: string;
  url: string;

  // Github only
  stars?: number;
  lastUpdated?: string;
  topics?: string[];
  isFork?: boolean;
  language?: string;
  icon?: IconDefinition;

  // Bitbucket only
  avatarUrl?: string;
}
