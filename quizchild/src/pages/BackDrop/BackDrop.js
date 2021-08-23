import React from 'react';
import classes from './BackDrop.module.css';

const BackDrop = ({ closeMenu }) => {
  return (
    <div className={classes.BackDrop} onClick={closeMenu} />
  );
}

export default BackDrop;
