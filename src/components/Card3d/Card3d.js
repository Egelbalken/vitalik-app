import React from 'react';
import { animated } from 'react-spring';
import 'resize-observer-polyfill';
import { use3dEffect } from 'use-3d-effect';
import styleCard from './Card3d.module.css';

const Card3d = (props) => {
  const ref = React.useRef(null);
  const { style, ...mouseHandlers } = use3dEffect(ref);

  return (
    <animated.div
      ref={ref}
      className={styleCard['card-inner']}
      style={{
        background: `${props.bgcolor}`,
        backgroundColor: `${props.bgcolor}`,
        backgroundImage: `url(${props.image})`,
        backgroundPosition: 'center center',
        filter: 'grayscale(100%)',
        backgroundSize: '',
        backgroundRepeat: 'none',
        zIndex: '1',
        ...style,
      }}
      {...mouseHandlers}
    >
      <div>
        <h3 className={styleCard.h3}>{props.title}</h3>
        <p className={styleCard.p}>{props.message}</p>
      </div>
    </animated.div>
  );
};

export default Card3d;
