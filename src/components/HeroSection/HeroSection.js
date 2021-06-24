import React, { Fragment } from 'react';
import style from '../HeroSection/HeroSection.module.css';
import { HashLink as Link } from 'react-router-hash-link';
import Movie from './1722881.mp4';

const HeroSection = (props) => {
  return (
    <Fragment>
      <div className={style['hero-container']}>
        <div className={style.video}>
          <video src={Movie} autoPlay loop muted>
            <source src={Movie} type="video/mp4"></source>
          </video>
        </div>
        <div>
          <h1 className={style.title}>{props.title}</h1>
          <h2 className={style.h2}>{props.message}</h2>
        </div>
        {props.children}
        <ul>
          <li>
            <Link className={style.howtolink} to="#howtobuy">
              <h4 className={style.tobuylink}>How to buy?</h4>
            </Link>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default HeroSection;
