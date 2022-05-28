import React from 'react';
import { useState } from 'react';
import LaunchesCards from '../LaunchesCards/LaunchesCards';
import LaunchesFilters from '../LaunchesFilters/LaunchesFilters';

export type LaunchesParams = {
  isComplited: 1 | 0;
  year: number | null;
  name: string | null;
};

const LaunchesViewer: React.FC<{}> = () => {
  const [launchesParams, setLaunchesParams] = useState<LaunchesParams>({
    isComplited: 1,
    year: null,
    name: '',
  });

  const getLaunchesParams = (launchesParams: LaunchesParams): void => {
    setLaunchesParams(launchesParams);
  };

  return (
    <>
      <LaunchesFilters getLaunchesParams={getLaunchesParams} />
      <div className='launches'>
        <LaunchesCards launchesParams={launchesParams} />
      </div>
    </>
  );
};

export default LaunchesViewer;
