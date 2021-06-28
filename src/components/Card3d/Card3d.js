import React from 'react';
import styleCard from './Card3d.module.css';
import Card from 'react-animated-3d-card';

const Card3d = (props) => {
  return (
    <Card
      className={styleCard['card-inner']}
      style={{
        background: `${props.bgcolor}`,
        width: '250px',
        height: '350px',
        backgroundColor: `${props.bgcolor}`,
        backgroundImage: `url(${props.image})`,
        backgroundPosition: 'center center',
        backgroundSize: '140%',
        backgroundRepeat: 'none',
        cursor: 'none',
        zIndex: '1',
        overflowX: 'hidden',
        transition: '0.5s',
      }}
      borderRadius="0px"
    >
      <div>
        <h3 className={styleCard.h3}>{props.title}</h3>
        <p className={styleCard.p}>{props.message}</p>
      </div>
    </Card>
  );
};

export default Card3d;
