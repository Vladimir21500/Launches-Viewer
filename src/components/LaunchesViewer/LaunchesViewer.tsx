import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { getLaunches } from '../../getLaunches';
import LaunchesCards from '../LaunchesCards/LaunchesCards';
import LaunchesFilters from '../LaunchesFilters/LaunchesFilters';
import './launchesViewer.scss';

const LaunchesViewer = () => {
  const [launches, setLaunches] = useState([]);

  const onSearchLaunches = (isComplited: boolean, year: number | null) => {
    getLaunches(isComplited, year).then((res: any) => setLaunches(res));
  };

  useEffect(() => {
    getLaunches(true, null).then((res: any) => {
      setLaunches(res);
    });
  }, []);

  return (
    <>
      <LaunchesFilters onSearchLaunches={onSearchLaunches} />
      <div className='launches'>
        <LaunchesCards launches={launches} />
      </div>
    </>
  );
};

export default LaunchesViewer;
