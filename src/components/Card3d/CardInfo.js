import React from 'react';
import Tilt from 'react-parallax-tilt';
import styleParallax from './Card3dParallax.module.css';

const CardInfo = (props) => {
  return (
    <Tilt
      className={styleParallax['parallax-effect']}
      tiltAngleXInitial={0}
      tiltAngleYInitial={0}
      tiltMaxAngleX={30}
      tiltMaxAngleY={30}
      tiltEnable={true}
      perspective={1000}
      scale={1.1}
      transitionSpeed={5000}
      transitionEasing={'cubic-bezier(.03,.98,.52,.99)'}
    >
      {props.children}
    </Tilt>
  );
};

export default CardInfo;
