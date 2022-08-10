import { LaunchesParams } from './launches';

export interface ILaunchesFiltersProps {
  getLaunchesParams: (objParams: LaunchesParams) => void;
}

export interface IFilterProps {
  typeFilter: 'input' | 'select';
  nameFilter: 'status' | 'year' | 'name';
  typeField?: string;
  onChangeLaunchesParams: (name: string, value: string | 1 | 0) => void;
}

export interface ILaunchesCardsProps {
  launchesParams: LaunchesParams;
}

export interface ICardProps {
  imgUrl: string;
  name: string;
  date: string;
  articleUrl: string;
  youtubeUrl: string;
  details: string;
}
