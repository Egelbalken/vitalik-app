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
      perspective={800}
      scale={1.1}
    >
      <div>{props.children}</div>
    </Tilt>
  );
};

export default CardInfo;
