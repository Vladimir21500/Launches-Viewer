import React, { FunctionComponent, useState } from 'react';
import { objParamsType } from '../LaunchesViewer/LaunchesViewer';
import './launchesFilters.scss';

type LaunchesFiltersPropsType = {
  setLaunchesParams: (objParams: objParamsType) => void;
};

const LaunchesFilters: FunctionComponent<LaunchesFiltersPropsType> = ({
  setLaunchesParams,
}) => {
  const [status, setStatus] = useState<string>('complited');
  const [year, setYear] = useState<number | null>(null);
  const [searchName, setSearchName] = useState('');

  const onSubmit = (event: any) => {
    event.preventDefault();
    const isComplited = status === 'complited' ? true : false;
    setLaunchesParams({
      isComplited,
      year,
      name: searchName,
    });
  };

  return (
    <div className='header'>
      <h1 className='title'>Launches Viewer</h1>
      <form onSubmit={onSubmit} className='launches__filters'>
        <div className='launches__filter'>
          <label htmlFor='launch-status'>Status</label>
          <select
            onChange={(event) => setStatus(event.target.value)}
            name='status'
            id='launch-status'
            value={status}
          >
            <option value='complited'>complited</option>
            <option value='upcoming'>upcoming</option>
          </select>
        </div>
        <div className='launches__filter'>
          <label htmlFor='launch-year'>year</label>
          <input
            onChange={(event) => setYear(+event.target.value)}
            type='number'
            id='launch-year'
            defaultValue={String(year)}
          />
        </div>
        <div className='launches__filter'>
          <label htmlFor='launch-name'>Name</label>
          <input
            onChange={(event) => setSearchName(event.target.value)}
            type='text'
            id='launch-name'
            defaultValue={searchName}
          />
        </div>
        <input type='submit' className='launches__search-btn' value='search' />
      </form>
    </div>
  );
};

export default LaunchesFilters;
