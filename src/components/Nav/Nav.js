import { useState, useEffect, Fragment } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import btnStyle from '../Button/button.module.css';
import BarsCollapsed from '../../images/bars-solid.svg';
import BarsTimes from '../../images/times-solid.svg';
import Logo from '../Logo/Logo';
import logoText from '../../components/Logo/logo1.svg';
import './Nav.css';

const Nav = (props) => {
  // setting the Navbar white height on scroll on menu
  const [navbar, setNavbar] = useState(false);

  // set the state of navbar hamurger menu icon
  const navClickHandler = () => setClick(!click);
  const [click, setClick] = useState(false);
  const closeMobileMenu = (event) => setClick(false);
  const [navBarCollapsed, setNavBarCollapsed] = useState(false);

  // adding navbar color, using window eventlistner..
  const changeNavBarHandler = () => {
    if (window.scrollY >= 80 && window.innerWidth >= 638) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  // Sets the navbar to show or not when in smaller screen mode.
  const showNavMenu = () => {
    if (window.innerWidth <= 633) {
      setNavBarCollapsed(true);
    } else {
      setNavBarCollapsed(false);
    }
  };

  // Needed to work. Cleanup the listneners.
  useEffect(() => {
    window.addEventListener('scroll', changeNavBarHandler);
    window.addEventListener('resize', showNavMenu);
    return () => {
      window.removeEventListener('scroll', changeNavBarHandler);
      window.addEventListener('resize', showNavMenu);
    };
  }, []);

  return (
    <Fragment>
      <nav id="#top" className={navbar ? 'nav active' : 'nav'}>
        <div>
          <Logo />
        </div>
        {navBarCollapsed ? (
          <div className={'menu-icon collapsed'} onClick={navClickHandler}>
            <i>
              {!click ? (
                <div className="active">
                  <img
                    className="bar-collapsed"
                    src={BarsCollapsed}
                    alt="bars-solid.svg"
                  ></img>
                </div>
              ) : (
                <div className="overlay">
                  <img
                    className="bar-times"
                    src={BarsTimes}
                    alt="bars-solid.svg"
                  ></img>
                  <Link to="#home">
                    <img className="logo-text" src={logoText} alt="logo"></img>
                  </Link>
                  <ul className="collapsed-ul">
                    <li className="collapsed-logo">
                      <Link to="#home">Home</Link>
                    </li>
                    <li className="collapsed-li">
                      <Link to="#feature">Feature</Link>
                    </li>
                    <li className="collapsed-li">
                      <Link to="#roadmap">Roadmap</Link>
                    </li>
                    <li className="collapsed-li">
                      <Link to="#tokenomics">Tokenomics</Link>
                    </li>
                    <li className="collapsed-li">
                      <Link to="#howtobuy">How To Buy</Link>
                    </li>
                  </ul>
                </div>
              )}
            </i>
          </div>
        ) : (
          <div>
            <div className={'menu-icon active'} onClick={closeMobileMenu}>
              <ul>
                <li>
                  <Link to="#feature">Feature</Link>
                </li>
                <li>
                  <Link to="#roadmap">Roadmap</Link>
                </li>
                <li>
                  <Link to="#tokenomics">Tokenomics</Link>
                </li>
                <li>
                  <Link to="#howtobuy">How To Buy</Link>
                </li>
                <li>
                  {navbar ? (
                    <form
                      action="https://t.me/vtlkvitalik"
                    >
                      <button type="submit" className={btnStyle.btnTelegram}>
                        Join Telegram
                      </button>
                    </form>
                  ) : (
                    <a href="https://t.me/vtlkvitalik">Join Telegram</a>
                  )}
                </li>
              </ul>
            </div>
          </div>
        )}
      </nav>
    </Fragment>
  );
};

export default Nav;
