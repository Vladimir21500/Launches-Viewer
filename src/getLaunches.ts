import axios from 'axios';

export const getLaunches = (
  isCompleted: boolean,
  year: number | null,
  name: string | null,
  limit: number,
  offset: number
): any => {
  return axios
    .get(
      `https://api.spacexdata.com/v3/launches/?sort=flight_number&order=desc${
        isCompleted ? '' : 'upcoming'
      }`,
      {
        params: {
          limit,
          offset,
          id: true,
          mission_name: name ? name : null,
          launch_year: year ? year : null,
        },
      }
    )
    .then((response) => response.data);
};
