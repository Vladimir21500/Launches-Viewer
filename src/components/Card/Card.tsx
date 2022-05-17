import React, { FunctionComponent, useState } from 'react';
import moment from 'moment';
import './card.scss';

type CardPropsType = {
  imgUrl: string;
  name: string;
  date: string;
  articleUrl: string;
  youtubeUrl: string;
  details: string;
};

const Card: FunctionComponent<CardPropsType> = ({
  imgUrl,
  name,
  date,
  articleUrl,
  youtubeUrl,
  details,
}) => {
  const [isShowInfo, setIsShowInfo] = useState(false);
  const shortDate: string = `${moment(new Date(date)).format('LL')}`;
  return (
    <div className='card' onMouseLeave={() => setIsShowInfo(false)}>
      {isShowInfo === false ? (
        <div className='card__img'>
          <img src={imgUrl} alt='launch' />
        </div>
      ) : (
        <div className='card__hidden-info'>
          <p className='card__details'>
            {details ? details : 'without details'}
          </p>
          <div>
            <a className='card__youtube' href={youtubeUrl} target='_blank'>
              Youtube video
            </a>
            <a className='card__article' href={articleUrl} target='_blank'>
              Read more
            </a>
          </div>
        </div>
      )}
      {!isShowInfo && (
        <>
          <h3 className='card__name'>{name}</h3>
          <span className='card__date'>{shortDate}</span>
        </>
      )}
      <button
        onClick={() => setIsShowInfo(!isShowInfo)}
        className='card__button'
      >
        {isShowInfo === false ? 'More Info' : 'Hide Info'}
      </button>
    </div>
  );
};

export default Card;
