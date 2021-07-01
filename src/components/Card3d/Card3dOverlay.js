import React from 'react';
import OverlayModal from './Card3dOverlay.module.css';
import CardOverlay from 'react-parallax-tilt';

const Card3dOverlay = (props) => {
  return (
    <CardOverlay
      className={OverlayModal.overlay}
      style={{
        backgroundColor: `${props.backgroundColor}`,
        background: `${props.backgroundColor}`,
        zIndex: '1000',
      }}
    >
      {props.children}
    </CardOverlay>
  );
};

export default Card3dOverlay;
