import styleCard from './Card3d.module.css';
import Card from 'react-parallax-tilt';
import CardInfo from './CardInfo';

// To do: Make a useState and try to switching between overlay and no overlay.
// Plase it in HowToBy section,way? We have access too

const Card3d = (props) => {
  const title = props.title;
  const message = props.message;
  return (
    <CardInfo className={styleCard.overlay} title={title} message={message}>
      <Card
        className={styleCard.card}
        style={{
          color: 'white',
          backgroundColor: `${props.bgRGBAcolor}`,
          backgroundImage: `url(${props.image})`,
          padding: '10px',
        }}
        tiltAngleXInitial={0}
        tiltAngleYInitial={0}
        tiltMaxAngleX={18}
        tiltMaxAngleY={18}
        tiltEnable={true}
        perspective={800}
        transitionSpeed={5000}
        transitionEasing={'cubic-bezier(.03,.98,.52,.99)'}
      ></Card>
      <dir>
        <h3 className={styleCard.title}>{props.title}</h3>
        <p className={styleCard.message}>{props.message}</p>
      </dir>
    </CardInfo>
  );
};

export default Card3d;
