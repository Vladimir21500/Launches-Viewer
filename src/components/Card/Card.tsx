import React, { FunctionComponent, useState } from 'react';
import moment from 'moment';
import { ICardProps } from '../../types/properties';
import './card.scss';

const Card: FunctionComponent<ICardProps> = ({
  imgUrl,
  name,
  date,
  articleUrl,
  youtubeUrl,
  details,
}) => {
  const [isShowInfo, setIsShowInfo] = useState<Boolean>(false);
  const shortDate = `${moment(new Date(date)).format('LL')}`;

  const cardImg = imgUrl ? (
    <img src={imgUrl} alt='launch' />
  ) : (
    <img src='https://logos-world.net/wp-content/uploads/2020/09/SpaceX-Emblem.png' alt='launch' />
  );

  return (
    <div className='card' onMouseLeave={() => setIsShowInfo(false)}>
      {isShowInfo === false ? (
        <div className='card__img'>{cardImg}</div>
      ) : (
        <div className='card__hidden-info'>
          <p className='card__details'>{details ? details : 'without details'}</p>
          <div>
            <a className='card__youtube' href={youtubeUrl} target='_blank' rel='noreferrer'>
              Youtube video
            </a>
            <a className='card__article' href={articleUrl} target='_blank' rel='noreferrer'>
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
      <button onClick={() => setIsShowInfo(!isShowInfo)} className='card__button'>
        {isShowInfo === false ? 'More info' : 'Hide info'}
      </button>
    </div>
  );
};

export default Card;
