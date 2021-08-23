import React from 'react';
import classes from './MenuToggle.module.css';

const MenuToggle = ({ isMenuOpen, menuToggleHandler }) => {
  const cls = [
    classes.MenuToggle,
    'fa',
  ];
  if (isMenuOpen) {
    cls.push('fa-times');
    cls.push(classes.open);
  } else {
    cls.push('fa-bars');
  };

  return (
    <div className={classes.MenuToggle}>
      <i className={cls.join(' ')} onClick={menuToggleHandler} />
    </div>
  );
}

export default MenuToggle;
