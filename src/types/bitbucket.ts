export interface BitbucketRepo {
  uuid: string;
  name: string;
  description: string;
  links: {
    avatar: {
      href: string;
    };
    html: {
      href: string;
    };
  };
}

export interface BitbucketRepos {
  pagelen: number;
  values: BitbucketRepo[];
}
