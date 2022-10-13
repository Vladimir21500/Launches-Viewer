import * as React from 'react';
import Filter from '../Filter/Filter';
import { ILaunchesFiltersProps } from '../../types/properties';
import { LaunchesParams } from '../../types/launches';
import './launchesFilters.scss';

const { useState } = React;

const LaunchesFilters: React.FC<ILaunchesFiltersProps> = ({ getLaunchesParams }) => {
  const [launchesParams, setLaunchesParams] = useState<LaunchesParams>({
    isComplited: 1,
    year: null,
    name: '',
  });

  const onSubmit = (event: React.MouseEvent<HTMLFormElement>) => {
    event.preventDefault();

    getLaunchesParams(launchesParams);
  };

  const onChangeLaunchesParams = (name: string, value: string | 1 | 0): void => {
    const keyName = name;

    setLaunchesParams({
      ...launchesParams,
      [keyName]: keyName === 'isComplited' ? +value : value,
    });
  };

  return (
    <div className='header'>
      <h1 className='title'>Launches Viewer</h1>
      <form onSubmit={onSubmit} className='launches__filters'>
        <Filter
          typeFilter='select'
          nameFilter='status'
          onChangeLaunchesParams={onChangeLaunchesParams}
        />
        <Filter
          typeFilter='input'
          typeField='number'
          nameFilter='year'
          onChangeLaunchesParams={onChangeLaunchesParams}
        />
        <Filter
          typeFilter='input'
          typeField='text'
          nameFilter='name'
          onChangeLaunchesParams={onChangeLaunchesParams}
        />
        <input type='submit' className='launches__search-btn' value='Search' />
      </form>
    </div>
  );
};

export default LaunchesFilters;
