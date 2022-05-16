import axios from 'axios';

export const getLaunches = (isCompleted: boolean, year: number | null): any => {
  return axios
    .get(
      `https://api.spacexdata.com/v3/launches/${isCompleted ? '' : 'upcoming'}`,
      {
        params: {
          limit: 10,
          offset: null,
          launch_year: year ? year : null,
        },
      }
    )
    .then((response) => response.data);
};
