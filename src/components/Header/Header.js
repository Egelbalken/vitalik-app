import React, { Fragment } from 'react';
import Nav from '../Nav/Nav';

// Puts the nav in the header of site.
const Header = (props) => {
  return (
    <Fragment>
      <Nav />
      {props.children}
    </Fragment>
  );
};

export default Header;
