import React from 'react';
import classes from './Input.module.css';

const isInvalid = ({ valid, touched, shouldValidate }) => {
  return (!valid && shouldValidate && touched);
}
const Input = (props) => {
  const cls = [classes.Input];
  const inputType = props.inputType || 'text';

  if (isInvalid(props)) { cls.push(classes.invalid) };

  return (
    <div className={cls.join(' ')}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={inputType}
        id={props.id}
        name={props.name}
        value={props.value}
        onChange={(event) => { props.changeHandler(props.name, event.target.value) }}
      />
      {isInvalid(props) ? <span>{props.errorMessage}</span> : null}
    </div>
  );
}

export default Input;
