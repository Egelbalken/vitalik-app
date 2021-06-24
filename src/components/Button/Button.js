import style from './button.module.css';
import { Fragment } from 'react';

const Button = (props) => {
  // Need to handle the onClick as a function rule.
  // Take away a error: "onClick is not a finction warning"
  const OnClickHandler = () => {
    props.onClick(props.onClick);
  };

  return (
    <Fragment>
      <button
        type={props.type}
        className={`${props.className} ${style.btn}`}
        onClick={OnClickHandler}
      >
        {props.children}
      </button>
    </Fragment>
  );
};

export default Button;
