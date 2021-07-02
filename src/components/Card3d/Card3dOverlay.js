import React from 'react';
import OverlayModal from './Card3dOverlay.module.css';
import OverlayText from 'react-parallax-tilt';

const Card3dOverlay = (props) => {
  return (
    <OverlayText
      className={OverlayModal.overlay}
      style={{
        backgroundColor: `${props.backgroundColor}`,
        zIndex: '600',
      }}
      tiltAngleXInitial={0}
      tiltAngleYInitial={0}
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      tiltEnable={true}
      perspective={1000}
      scale={1.05}
      transitionSpeed={5000}
    >
      {props.children}
    </OverlayText>
  );
};

export default Card3dOverlay;
