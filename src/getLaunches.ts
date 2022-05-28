import axios from 'axios';

export default async function getLaunches(
  isCompleted: 1 | 0,
  year: number | null,
  name: string | null,
  limit: number,
  offset: number,
) {
  try {
    const response = await axios.get(
      `https://api.spacexdata.com/v3/launches/${
        isCompleted ? '' : 'upcoming'
      }?sort=flight_number&order=desc`,
      {
        params: {
          limit,
          offset,
          id: true,
          mission_name: name ? name : null,
          launch_year: year ? year : null,
        },
      },
    );

    if (!response.status) {
      throw new Error('Error get launches');
      return null;
    }

    return response.data;
  } catch (error) {
    console.error(error);
  }
}
