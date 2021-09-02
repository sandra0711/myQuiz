import React from 'react';
import { NavLink } from 'react-router-dom';
import BackDrop from '../../pages/BackDrop/BackDrop';
import classes from './Drawer.module.css';

const Drawer = ({ isMenuOpen, closeMenu }) => {
  const cls = [
    classes.Drawer,
  ];
  if (!isMenuOpen) {
    cls.push(classes.close);
  }
  const links = [
    { id: 1, to: '/', label: 'Выбирай игру!', exact: true },
    { id: 2, to: '/auth', label: 'Авторизация', exact: false },
    { id: 3, to: '/choose-game', label: 'Cоздание тестов (только для родителей!)', exact: false },
  ];

  return (
    <>
      <nav className={cls.join(' ')}>
        <ul>
          {links.map(link => {
            return (
              <li key={link.id} onClick={closeMenu}>
                <NavLink
                  to={link.to}
                  exact={link.exact}
                  activeClassName={classes.ative}
                >{link.label}</NavLink>
              </li>
            )
          })}
        </ul>
      </nav>
      {isMenuOpen ? <BackDrop closeMenu={closeMenu} /> : null}
    </>
  );
}

export default Drawer;
