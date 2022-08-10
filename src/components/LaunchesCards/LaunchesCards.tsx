import * as React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import getLaunches from '../../getLaunches';
import Card from '../Card/Card';
import Loader from '../Loader/Loader';
import { ILaunchesCardsProps } from 'src/types/properties';
import { LaunchesParams } from 'src/types/launches';
import './launchesCards.scss';

const { useEffect, useState } = React;

const LaunchesCards: React.FC<ILaunchesCardsProps> = ({ launchesParams }) => {
  const [launches, setLaunches] = useState<Array<any>>([]);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [page, setPage] = useState<number>(0);

  const limit = 20;

  const { isComplited, year, name } = launchesParams;

  const fetchLaunches = async () => {
    const data = await getLaunches(isComplited, year, name, limit, (page + 1) * limit);
    return data;
  };

  const fetchData = async () => {
    const launchFromServer = await fetchLaunches();

    setLaunches([...launches, ...launchFromServer]);

    if (launchFromServer.length === 0 || launchFromServer.length < limit) {
      setHasMore(false);
    }

    setPage(page + 1);
  };

  useEffect(() => {
    setPage(0);
    setHasMore(true);
    getLaunches(isComplited, year, name, limit, 0).then((result: any) => {
      setLaunches(result);
      if (result.length < limit) {
        setHasMore(false);
      }
    });
  }, [isComplited, year, name]);

  return (
    <>
      {launches.length === 0 && !hasMore && (
        <div className='launches-cards__not-found'>
          <h2>Not found</h2>
        </div>
      )}
      <InfiniteScroll
        dataLength={launches.length}
        next={fetchData}
        hasMore={hasMore}
        loader={<Loader />}
        endMessage={null}
      >
        <div className='launches-cards'>
          {launches.map((launch) => (
            <Card
              key={launch._id}
              imgUrl={launch.links.mission_patch}
              name={launch.mission_name}
              date={launch.launch_date_utc}
              articleUrl={launch.links.article_link}
              youtubeUrl={launch.links.video_link}
              details={launch.details}
            />
          ))}
        </div>
      </InfiniteScroll>
    </>
  );
};

export default LaunchesCards;
