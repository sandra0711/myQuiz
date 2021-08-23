import React, { useState } from 'react';
import Drawer from '../components/Drawer/Drawer';
import MenuToggle from '../components/MenuToggle/MenuToggle';
import classes from './Layout.module.css';

const Layout = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuToggleHandler = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  const closeMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <div className={classes.Layout}>
      <Drawer
        isMenuOpen={isMenuOpen}
        closeMenu={closeMenu}
      />
      <MenuToggle
        isMenuOpen={isMenuOpen}
        menuToggleHandler={menuToggleHandler}
      />
      <main>
        {props.children}
      </main>
    </div>
  );
}

export default Layout;
