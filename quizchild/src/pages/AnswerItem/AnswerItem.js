import React from 'react';
import classes from './AnswerItem.module.css';

const AnswerItem = ({ id, text, onClickHandler }) => {
  return (
    <li
      className={classes.AnswerItem}
      onClick={() => onClickHandler(id)}
    >
      {id}. {text}
    </li>
  );
}

export default AnswerItem;
