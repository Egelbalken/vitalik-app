import React from 'react';
import OverlayModal from './Card3dOverlay.module.css';

const Card3dOverlay = (props) => {
  return (
    <div
      className={OverlayModal.overlay}
      style={{
        backgroundColor: `${props.backgroundColor}`,
      }}
    >
      {props.children}
    </div>
  );
};

export default Card3dOverlay;
