import React from 'react';
import { Fragment } from 'react';
import styles from '../Tokenomics/Tokenomics.module.css';

const Tokenomics = () => {
  return (
    <Fragment>
      <div className={styles.tokenomics}>
        <h1 className={styles.title}>Tokenomics</h1>
        <div className={styles.column}>
          <div className={styles.distancer}>
            Original Supply 201,530,070,000 VTLK Tokens
          </div>
          <div className={styles.distancer}>
            0,5% Transaction Tax 0,4% Distribution to holders of VTLK 0,1% Burns
            forever
          </div>
          <div className={styles.distancer}>
            Liquidity Lock 95,4% locked until November 2021
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Tokenomics;
