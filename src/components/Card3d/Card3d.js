import { useState} from 'react';
import styleCard from './Card3d.module.css';
import Card from 'react-parallax-tilt';
import CardOverlay from './Card3dOverlay';

// To do: Make a useState and try to switching between overlay and no overlay.
// Plase it in HowToBy section,way? We have access too

const Card3d = (props) => {
  // Sets a boolean to take away the overlay
  const [overlay, setOverlay] = useState(false);

  const ovelayEnterHandler = () => {
    setOverlay(true);
    console.log(overlay);
  };

  const overlayLeaveHandler = () => {
    setOverlay(false);
    console.log(overlay);
  };

  return (
 
      <Card
        className={styleCard.card}
        style={{
          color: 'white',
          backgroundColor: `${overlay ? props.bgRGBAcolor : props.bgRGBcolor}`,
          zIndex: '600',
          position: 'relative',
          backgroundPosition: 'center center',
          margin: 'auto',
          width: '100%',
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
        tiltAngleXInitial={0}
        tiltAngleYInitial={0}
        tiltMaxAngleX={20}
        tiltMaxAngleY={20}
        tiltEnable={true}
        perspective={1000}
        transitionSpeed={5000}
        scale={1.1}
        onEnter={ovelayEnterHandler}
        onLeave={overlayLeaveHandler}
      >
        <div
          className={styleCard['card-inner']}
          style={{
            backgroundImage: `url(${props.image})`,
            backgroundColor: `${
              overlay ? props.bgRGBSilvercolor : props.bgRGBcolor
            }`,

            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            margin: '0 auto',
            maxWidth: '99%',
            zIndex: '1000',
          }}
        >
          <CardOverlay
            className={styleCard.card}
            backgroundColor={!overlay ? props.bgRGBAcolor : 'rgba(0, 0, 0, 0)'}
          >
            <h3 className={styleCard.title}>{props.title}</h3>
            <p className={styleCard.message}>{props.message}</p>
          </CardOverlay>
        </div>
      </Card>
  );
};

export default Card3d;
