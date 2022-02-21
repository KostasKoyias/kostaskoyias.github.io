import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export interface Link {
  icon: IconDefinition;
  label: string | JSX.Element;
  anchor: {
    href: string;
    target?: string;
    className?: string;
  };
}

export interface LinkSection {
  pos: string;
  header: string;
  links: Link[];
}
