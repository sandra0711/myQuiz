import React from 'react';
import classes from './Select.module.css';

const Select = (props) => {
  return (
    <div className={classes.Select}>
      <label htmlfore={props.label}>{props.label}</label>
      <select
        id={props.id}
        value={props.value}
        onChange={(event) => props.selectChangeHandler(event)}
      >
        {props.options.map(option => {
          return (
            <option
              key={option.value}
              value={option.value}
            >
              {option.text}
            </option>
          )
        })}
      </select>
    </div >
  );
}

export default Select;
