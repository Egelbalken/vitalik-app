import React, { Fragment } from 'react';
import style from '../HowToBuy/Howtobuy.module.css';
import Card from '../Card/Card';
import cardStyle from '../Card/Card.module.css';
import Card3d from '../Card3d/Card3d';
import Card3dStyles from '../Card3d/Card3d.module.css';

const metamaskRBGAColor = 'rgba(231,175,27,0.78)';
const metamaskRBGColor = 'rgb(254, 138, 0)';
const uniswapRBGAColor = 'rgba(228,97,215,0.7777485994397759)';
const uniswapRBGColor = 'rgb(141, 169, 201)';
const vtlkTokenRGBAcolor = 'rgba(64,138,77,0.78)';
const vtlkTokenRGBcolor = 'rgb(136, 136, 136)';

const HowToBy = () => {
  // Overlay on card. Change when hover on card from a allmouste none transparant to transparant.
  // Do it to change state of hover and sett a overlay

  // Change

  return (
    <Fragment>
      <div className={style.howtobysection}>
        <Card
          className={cardStyle.cardetherscan}
          href="https://etherscan.io/token/0x2a8941f8f6fc283fd1222a6eda1ff5ddc9d0ff97"
          name="Etherscan"
          title="VTLK Contact"
        />
        <Card
          className={cardStyle.cardDextools}
          href="https://www.dextools.io/app/uniswap/pair-explorer/0x52412596edbe01c4d16b2517cb8b72974e7f18e7"
          name="Dextools"
          title="VTLK Chart"
        />
        <div>
          <ul className={Card3dStyles['wrapper-grid']}>
            <div>
              <li className={Card3dStyles['list-items']}>
                <div>
                  <Card3d
                    bgRGBAcolor={metamaskRBGAColor}
                    bgRGBcolor={metamaskRBGColor}
                    title="Download MetaMask"
                    message="Go to Metamask.io and download the wallet to your phone or chrome/firefox  browser."
                    image="https://www.bitdegree.org/crypto/storage/media/images/metamask-wallet-review-logo-big.png"
                  ></Card3d>
                </div>
              </li>
            </div>
            <div>
              <li className={Card3dStyles['list-items']}>
                <div>
                  <Card3d
                    bgRGBAcolor={uniswapRBGAColor}
                    bgRGBcolor={uniswapRBGColor}
                    title="Connect to Uniswap"
                    message="Uniswap is where you’ll be performing \n the swap of your current tokens to $VTLK tokens."
                    image="https://cryptologos.cc/logos/uniswap-uni-logo.png?v=010"
                  />
                </div>
              </li>
            </div>
            <div>
              <li className={Card3dStyles['list-items']}>
                <div>
                  <Card3d
                    bgRGBAcolor={vtlkTokenRGBAcolor}
                    bgRGBcolor={vtlkTokenRGBcolor}
                    title="Add VTLK token"
                    message="
                    0x2a8941f8f6fc283fd1222a6eda1"
                    image="https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Ethereum_logo.svg/800px-Ethereum_logo.svg.png"
                  />
                </div>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default HowToBy;
