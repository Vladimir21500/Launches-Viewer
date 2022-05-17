import React from 'react';
import { useState } from 'react';
import LaunchesCards from '../LaunchesCards/LaunchesCards';
import LaunchesFilters from '../LaunchesFilters/LaunchesFilters';

export type objParamsType = {
  isComplited: boolean;
  year: number | null;
  name: string | null;
};

const LaunchesViewer = () => {
  const [objParams, setObjParams] = useState<objParamsType>({
    isComplited: true,
    year: null,
    name: '',
  });

  const getLaunchesParams = (objParams: objParamsType) => {
    setObjParams(objParams);
  };

  return (
    <>
      <LaunchesFilters getLaunchesParams={getLaunchesParams} />
      <div className='launches'>
        <LaunchesCards launchesParams={objParams} />
      </div>
    </>
  );
};

export default LaunchesViewer;
