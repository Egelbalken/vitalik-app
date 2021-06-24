import React, { useState, Fragment } from 'react';
import style from '../Roadmap/Roadmap.module.css';
import Button from '../Button/Button';
import btnStyle from '../Button/button.module.css';
import checkSquareSolid from '../../images/check-square-solid.svg';
import SquareSolid from '../../images/square-regular.svg';
import LockSolidBlack from '../../images/lock-solid.svg';
import LockSolidWhite from '../../images/lock-solid-white.svg';
import TaskSolidWhit from '../../images/tasks-solid-white.svg';
import TaskSolidBlack from '../../images/tasks-solid.svg';
/*
Initial is info for each quarter hidded. When click we show and make button active
How do this.. To show quarter info by clicking on buttons
we show info for that quarter.

fixed Active buttons.. but all i active way?
OK on off function
OK show content of quarter roadmap.

*/

const Rodmap = () => {
  // Initial state is to show Q2
  const [showQuarter, setShowQuarter] = useState(
    <div>
      <ul>
        <li className={style['list-style']}>
          - {'Creation of ERC20 contract &\ntoken (VTLK - Vitalik)'}
          <img
            className={style.checked}
            src={checkSquareSolid}
            alt="logo checkSquareSolid"
          ></img>
        </li>
        <li className={style['list-style']}>
          - Uniswap listing{' '}
          <img
            className={style.checked}
            src={checkSquareSolid}
            alt="check-square-solid.svg"
          ></img>
        </li>
        <li className={style['list-style']}>
          - Dextools listing{' '}
          <img
            className={style.checked}
            src={checkSquareSolid}
            alt="check-square-solid.svg"
          ></img>
        </li>
        <li className={style['list-style']}>
          - Twitter & Telegram community building{' '}
          <img
            className={style.checked}
            src={checkSquareSolid}
            alt="check-square-solid.svg"
          ></img>
        </li>
        <li className={style['list-style']}>
          - Website & Roadmap launch{' '}
          <img
            className={style.checked}
            src={checkSquareSolid}
            alt="check-square-solid.svg"
          ></img>
        </li>
        <li className={style['list-style']}>
          - Reddit & Discord community building{' '}
          <img
            className={style.checked}
            src={SquareSolid}
            alt="square-regular.svg"
          ></img>
        </li>
        <li className={style['list-style']}>
          - Community contests{' '}
          <img
            className={style.checked}
            src={SquareSolid}
            alt="square-regular.svg"
          ></img>
        </li>
        <li className={style['list-style']}>
          - Coingecko & Coinmarketcap listing{' '}
          <img
            className={style.checked}
            src={SquareSolid}
            alt="square-regular.svg"
          ></img>
        </li>
      </ul>
    </div>
  );
  const [activeButtonQTwo, setactiveButtonQTwo] = useState(true);
  const [activeButtonQThree, setactiveButtonQThree] = useState(false);
  const [activeButtonQFour, setactiveButtonQFour] = useState(false);
  const [activeButtonQOne, setactiveButtonQOne] = useState(false);

  const onClickQuarterHandlerQTwo = (event) => {
    setactiveButtonQTwo(true);
    setactiveButtonQThree(false);
    setactiveButtonQFour(false);
    setactiveButtonQOne(false);
    setShowQuarter(
      <div>
        <ul>
          <li className={style['list-style']}>
            - {'Creation of ERC20 contract &\ntoken (VTLK - Vitalik)'}
            <img
              className={style.checked}
              src={checkSquareSolid}
              alt="check-square-solid.svg"
            ></img>
          </li>
          <li className={style['list-style']}>
            - Uniswap listing{' '}
            <img
              className={style.checked}
              src={checkSquareSolid}
              alt="check-square-solid.svg"
            ></img>
          </li>
          <li className={style['list-style']}>
            - Dextools listing{' '}
            <img
              className={style.checked}
              src={checkSquareSolid}
              alt="check-square-solid.svg"
            ></img>
          </li>
          <li className={style['list-style']}>
            - Twitter & Telegram community building{' '}
            <img
              className={style.checked}
              src={checkSquareSolid}
              alt="check-square-solid.svg"
            ></img>
          </li>
          <li className={style['list-style']}>
            - Website & Roadmap launch{' '}
            <img
              className={style.checked}
              src={checkSquareSolid}
              alt="check-square-solid.svg"
            ></img>
          </li>
          <li className={style['list-style']}>
            - Reddit & Discord community building{' '}
            <img
              className={style.checked}
              src={SquareSolid}
              alt="check-square-solid.svg"
            ></img>
          </li>
          <li className={style['list-style']}>
            - Community contests{' '}
            <img
              className={style.checked}
              src={SquareSolid}
              alt="square-solid.svg"
            ></img>
          </li>
          <li className={style['list-style']}>
            - Coingecko & Coinmarketcap listing{' '}
            <img
              className={style.checked}
              src={SquareSolid}
              alt="square-solid.svg"
            ></img>
          </li>
        </ul>
      </div>
    );
  };

  const onClickQuarterHandlerQThree = () => {
    setactiveButtonQTwo(false);
    setactiveButtonQThree(true);
    setactiveButtonQFour(false);
    setactiveButtonQOne(false);
    setShowQuarter(
      <div>
        <ul>
          <li className={style['list-style']}>
            - Marketing & Budget decisions{' '}
            <img
              className={style.checked}
              src={SquareSolid}
              alt="square-solid.svg"
            ></img>
          </li>
          <li className={style['list-style']}>
            - Merch{' '}
            <img
              className={style.checked}
              src={SquareSolid}
              alt="square-solid.svg"
            ></img>
          </li>
          <li className={style['list-style']}>
            - Own wallet creation{' '}
            <img
              className={style.checked}
              src={SquareSolid}
              alt="square-solid.svg"
            ></img>
          </li>
          <li className={style['list-style']}>
            - VTLK Governance{' '}
            <img
              className={style.checked}
              src={SquareSolid}
              alt="src={SquareSolid}"
            ></img>
          </li>
        </ul>
      </div>
    );
  };

  const onClickQuarterHandlerfour = () => {
    setactiveButtonQTwo(false);
    setactiveButtonQThree(false);
    setactiveButtonQFour(true);
    setactiveButtonQOne(false);
    setShowQuarter(
      <div>
        <ul>
          <li className={style['list-style']}>
            - Child token creation{' '}
            <img
              className={style.checked}
              src={SquareSolid}
              alt="src={SquareSolid}"
            ></img>
          </li>
          <li className={style['list-style']}>
            - VTLK Swap & Stake{' '}
            <img
              className={style.checked}
              src={SquareSolid}
              alt="src={SquareSolid}"
            ></img>
          </li>
          <li className={style['list-style']}>
            - More marketing{' '}
            <img
              className={style.checked}
              src={SquareSolid}
              alt="src={SquareSolid}"
            ></img>
          </li>
          <li className={style['list-style']}>
            - Voting for new features{' '}
            <img
              className={style.checked}
              src={SquareSolid}
              alt="src={SquareSolid}"
            ></img>
          </li>
        </ul>
      </div>
    );
  };

  const onClickQuarterHandlerOne = () => {
    setactiveButtonQTwo(false);
    setactiveButtonQThree(false);
    setactiveButtonQFour(false);
    setactiveButtonQOne(true);
    setShowQuarter(
      <div>
        <ul>
          <li className={style['list-style']}>More information coming soon.</li>
        </ul>
      </div>
    );
  };
  return (
    <Fragment>
      <div className={style.roadmap}>
        <div className={style['scroll-left']}>
          <p>&#xa4; Roadmap &#xa4;</p>
          <p>&#xa4; Roadmap &#xa4;</p>
          <p>&#xa4; Roadmap &#xa4;</p>
        </div>
        <div>
          <Button
            id="q22021"
            className={
              !activeButtonQTwo ? btnStyle.btnRoadmap : btnStyle.active
            }
            onClick={onClickQuarterHandlerQTwo}
          >
            <span>
              <img
                className={style.icon}
                src={!activeButtonQTwo ? TaskSolidBlack : TaskSolidWhit}
                alt="check"
              />
              Q2 2021
            </span>
          </Button>
        </div>
        <div>
          <Button
            className={
              !activeButtonQThree ? btnStyle.btnRoadmap : btnStyle.active
            }
            onClick={onClickQuarterHandlerQThree}
          >
            <span>
              <img
                className={style.icon}
                src={!activeButtonQThree ? LockSolidBlack : LockSolidWhite}
                alt="check"
              />
              Q3 2021
            </span>
          </Button>
        </div>
        <div>
          <Button
            id="q22021"
            className={
              !activeButtonQFour ? btnStyle.btnRoadmap : btnStyle.active
            }
            onClick={onClickQuarterHandlerfour}
          >
            <span>
              <img
                className={style.icon}
                src={!activeButtonQFour ? LockSolidBlack : LockSolidWhite}
                alt="check"
              />
              Q4 2021
            </span>
          </Button>
        </div>
        <div>
          <Button
            id="q22021"
            className={
              !activeButtonQOne ? btnStyle.btnRoadmap : btnStyle.active
            }
            onClick={onClickQuarterHandlerOne}
          >
            <span>
              <img
                className={style.icon}
                src={!activeButtonQOne ? LockSolidBlack : LockSolidWhite}
                alt="check"
              />
              Q1 2022
            </span>
          </Button>
          <div className={style['roadmap-progress']}>{showQuarter}</div>
        </div>
      </div>
    </Fragment>
  );
};

export default Rodmap;
