import React from 'react';
import { Fragment } from 'react';
import style from './Card.module.css';
import Button from '../Button/Button';
import btnCardStyle from '../Button/button.module.css';

const Card = (props) => {
  return (
    <Fragment>
      <div className={`${props.className} ${style.card}`}>
        <h2>{props.title}</h2>
        <div>
          <a href={props.href}>
            <Button className={btnCardStyle.btncardetherscan}>
              {props.name}
            </Button>
          </a>
        </div>
      </div>
    </Fragment>
  );
};

export default Card;
