//import styleCard from './Card3d.module.css';
import Card from 'react-animated-3d-card';
import CardInfo from './CardInfo';
const coursor = false;
const reflex = 0.6;

// To do: Make a useState and try to switching between overlay and no overlay.

const Card3d = (props) => {
  const title = props.title;
  const message = props.message;
  return (
    <Card
      style={{
        background: `${props.bgcolor}`,
        width: '310px',
        height: '410px',
        backgroundColor: `${props.bgcolor}`,
        backgroundImage: `url(${props.image})`,
        backgroundPosition: 'center center',
        backgroundSize: '140%',
        backgroundRepeat: 'none',
        zIndex: '1',
        overflowX: 'hidden',
        transition: '0.5s',
      }}
      borderRadius="0px"
      cursorPointer={coursor}
      shineStrength={reflex}
    >
      <CardInfo title={title} message={message} />
    </Card>
  );
};

export default Card3d;
