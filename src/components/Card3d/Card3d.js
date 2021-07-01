import styleCard from './Card3d.module.css';
import Card from 'react-parallax-tilt';
import CardInfo from './CardInfo';
import Card3dOverlay from './Card3dOverlay';

// To do: Make a useState and try to switching between overlay and no overlay.
// Plase it in HowToBy section,way? We have access too

const Card3d = (props) => {
  const title = props.title;
  const message = props.message;
  return (
    <Card3dOverlay backgroundColor={props.bgRGBAcolor}>
      <CardInfo className={styleCard.overlay} title={title} message={message}>
        <Card
          className={styleCard.card}
          style={{
            color: 'white',
            backgroundColor: `${props.bgRGBAcolor}`,
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
          scale={1}
        >
          <div
            className={styleCard['card-inner']}
            style={{
              backgroundImage: `url(${props.image})`,
              backgroundColor: `${props.bgRGBcolor}`,
              display: 'block',
              marginLeft: 'auto',
              marginRight: 'auto',
              margin: '0 auto',
              maxWidth: '99%',
            }}
          ></div>
        </Card>
        <h3 className={styleCard.title}>{props.title}</h3>
        <p className={styleCard.message}>{props.message}</p>
      </CardInfo>
    </Card3dOverlay>
  );
};

export default Card3d;
