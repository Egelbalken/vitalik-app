import React from 'react';
import styleCard from './Card3d.module.css';
import styleParallax from './Card3dParallax.module.css';
import Tilt from 'react-parallax-tilt';
/*
const tiltEnable = true;
const tiltMaxAngleX = 120;
const tiltAngleXInitial = 0;

*/
const CardInfo = (props) => {
  return (
    <Tilt
      className={styleParallax['parallax-effect']}
      tiltMaxAngleX={140}
      tiltMaxAngleY={140}
      perspective={800}
      transitionSpeed={1500}
      gyroscope={true}
    >
      <div className={styleParallax['inner-element']}>
        <h3 className={styleCard.title}>{props.title}</h3>
        <p className={styleCard.message}>{props.message}</p>
      </div>
    </Tilt>
  );
};

export default CardInfo;
