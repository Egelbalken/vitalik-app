import stylesFooter from '../Footer/Footer.module.css';
import { Fragment } from 'react';

// Return today's date and time
var currentTime = new Date();
/*

// returns the month (from 0 to 11)
var month = currentTime.getMonth() + 1;

// returns the day of the month (from 1 to 31)
var day = currentTime.getDate();

*/
// returns the year (four digits)
var year = currentTime.getFullYear();

const Footer = () => {
  // write output MM/dd/yyyy
  return (
    <Fragment>
      <div className={stylesFooter.footer}>
        <h4>
          <span> Copyright &#169; {year}</span>
          <br />
          <span> VTLK Token </span>
          <br />
          <br />
          <span>0x2a8941f8f6fc283fd1222a6eda1ff5ddc9d0ff97</span>
        </h4>
      </div>
    </Fragment>
  );
};

export default Footer;
