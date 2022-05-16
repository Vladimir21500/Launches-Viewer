import React, { FunctionComponent } from 'react';
import Card from '../Card/Card';
import './launchesCards.scss';

type LaunchesCardsPropsType = {
  launches: Array<any>;
};

const LaunchesCards: FunctionComponent<LaunchesCardsPropsType> = ({
  launches,
}) => {
  return (
    <div className='launches-cards'>
      {launches.map((launch) => (
        <Card
          key={launch.id}
          imgUrl={launch.links.mission_patch}
          name={launch.mission_name}
          date={launch.launch_date_utc}
          articleUrl={launch.links.article_link}
          youtubeUrl={launch.links.video_link}
          details={launch.details}
        />
      ))}
    </div>
  );
};

export default LaunchesCards;
