import axios from 'axios';

export const getLaunches = (
  isCompleted: boolean,
  year: number | null,
  limit: number,
  offset: number
): any => {
  return axios
    .get(
      `https://api.spacexdata.com/v3/launches/${isCompleted ? '' : 'upcoming'}`,
      {
        params: {
          limit,
          offset,
          launch_year: year ? year : null,
        },
      }
    )
    .then((response) => response.data);
};
