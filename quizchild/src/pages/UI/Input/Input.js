import React from 'react';
import classes from './Input.module.css';

const isInvalid = ({ valid, shouldValidation, isTouch }) => {
  return (!valid && shouldValidation && isTouch);
}
const Input = (props) => {
  const cls = [classes.Input];
  const inputType = props.inputType || 'text';
  const htmlFor = `${inputType}-${Math.random()}`;

  if (isInvalid(props)) {
    cls.push(classes.invalid)
  }

  return (
    <div className={cls.join(' ')}>
      <label htmlFor={htmlFor}>{props.label}</label>
      <input
        type={inputType}
        id={htmlFor}
        name={props.name}
        value={props.value}
        onChange={props.changeHandler}
      />
      {isInvalid(props) ? <span>{props.errorMessage} || 'Введите имя и пароль'</span> : null}
    </div>
  );
}

export default Input;
