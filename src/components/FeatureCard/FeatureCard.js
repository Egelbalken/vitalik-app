import React from 'react';
import style from '../FeatureCard/FeatureCard.module.css';
import { Fragment } from 'react';

const FeatureCard = () => {
  return (
    <Fragment>
      <div className={style['wrapper-grid']}>
        <div className={style.featureCardEarn}>
          <h1>Earn.</h1>
          <p>
            Get rewarded holding your investment in Vitalik 0.4% of transaction
            fees are even distributed to all holders of $VTLK
          </p>
        </div>
        <div className={style.featureCardBurn}>
          <h1>Burn.</h1>
          <p>
            Total supply started at 201.530.070.000 tokens. Burns forever 0.1%
            of total transactions. Meaning your holding is worth more for every
            transaction made.
          </p>
        </div>
        <div className={style.featureCardEquality}>
          <h1>Equality.</h1>
          <p>
            No presales were made, meaning no one were prioritized in any eary
            presales. You join on same equal terms as everyone else.
          </p>
        </div>
        <div className={style.featureCardCharity}>
          <h1>Charity.</h1>
          <p>
            10% of the total tokens are held by development team. Every month a
            poll is made where we as community choose project to donate funds
            for.
          </p>
        </div>
      </div>
    </Fragment>
  );
};
export default FeatureCard;
