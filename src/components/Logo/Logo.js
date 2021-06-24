import React from 'react';
import stylingLogo from './Logo.module.css';
import { useState, useEffect, Fragment } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import LogoWhite from './logo1.svg';
import LogoBlack from './logo2.svg';
const Logo = (props) => {
  const [changeLogo, setChangeLogo] = useState(false);

  // set the logo to black or white.
  const changeLogoColorOnNavScrollHandler = () => {
    if (window.scrollY >= 80) {
      setChangeLogo(true);
    } else {
      setChangeLogo(false);
    }
  };

  // Needed to work. Cleanup the listneners.
  useEffect(() => {
    window.addEventListener('scroll', changeLogoColorOnNavScrollHandler);
    return () => {
      window.removeEventListener('scroll', changeLogoColorOnNavScrollHandler);
    };
  }, []);

  //window.addEventListener('scroll', changeLogoColorOnNavScrollHandler);
  return (
    <Fragment>
      <Link to="#top">
        <img
          className={stylingLogo.whiteBrandLogo}
          src={changeLogo ? LogoBlack : LogoWhite}
          alt="Logo"
        />
      </Link>
    </Fragment>
  );
};

export default Logo;
