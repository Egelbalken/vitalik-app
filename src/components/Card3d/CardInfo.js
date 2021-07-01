import React from 'react';
import Tilt from 'react-parallax-tilt';
import styleParallax from './Card3dParallax.module.css';

const CardInfo = (props) => {
  return (
    <Tilt
      className={styleParallax['parallax-effect']}
      tiltAngleXInitial={0}
      tiltAngleYInitial={0}
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      tiltEnable={true}
      perspective={1000}
      scale={1.05}
      transitionSpeed={2000}
    >
      {props.children}
    </Tilt>
  );
};

export default CardInfo;
