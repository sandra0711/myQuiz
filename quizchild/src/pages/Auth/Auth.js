import React, { useState } from 'react';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import classes from './Auth.module.css';

const Auth = () => {
  let [isFormValid, setIsFormValid] = useState(false);
  let [inputsValue, setInputsValue] = useState({
    name: {
      id: 'name',
      name: 'name',
      label: 'Имя',
      inputValue: '',
      errorMessage: 'Введите корректное имя',
      valid: false,
      touched: false,
      validation: {
        required: true,
      }
    },
    age: {
      id: 'age',
      name: 'age',
      label: 'Возраст(лет)',
      inputValue: '',
      inputType: 'number',
      errorMessage: 'Введите корректный возраст',
      valid: false,
      touched: false,
      validation: {
        required: true,
      },
    },
    img: {
      id: 'img',
      name: 'img',
      label: 'Фото (имя файла)',
      inputValue: '',
      errorMessage: 'Введите корректное значение',
      valid: false,
      touched: false,
      validation: {
        required: true,
      },
    },
    pass: {
      id: 'pass',
      name: 'pass',
      label: 'Пароль',
      inputValue: '',
      inputType: 'password',
      errorMessage: 'Пароль должен содержать не меньше 6 симоволов',
      valid: false,
      touched: false,
      validation: {
        required: true,
        minLength: 6
      },
    }
  });

  const validationInput = (value, validation) => {
    if (!validation) { return true; };

    let isValid = true

    if (validation.required) { isValid = value.trim() !== '' && isValid };

    if (validation.minLength) {
      isValid = value.length >= validation.minLength && isValid;
    }

    return isValid;
  }

  const changeHandler = (name, value) => {
    const prevInputsValue = { ...inputsValue };
    const prevInputValue = { ...inputsValue[name] };
    prevInputValue.inputValue = value;
    prevInputValue.touched = true;
    prevInputValue.valid = validationInput(value, prevInputValue.validation);
    prevInputsValue[name] = prevInputValue;
    setInputsValue(inputsValue = prevInputsValue);

    let isFieldsValid = true;
    Object.keys(inputsValue).map(field => {
      if (!inputsValue[field].valid) {
        isFieldsValid = false;
      };
      return isFieldsValid;
    });
    setIsFormValid(isFormValid = isFieldsValid);

  };

  const submitHandler = (event) => {
    event.preventDefault();
  }

  const signupHandler = async () => {
    const response = await fetch('/user/signup', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        inputsValue
      })
    });
    const result = await response.json();
    console.log(result);
  };

  return (
    <div className={classes.Auth}>
      <div>
        <h1>Мы хотим познакомиться с тобой поближе!</h1>
        <form className={classes.AuthForm} onSubmit={submitHandler}>
          {Object.keys(inputsValue).map(fieldName =>
            <Input
              key={Math.random()}
              id={inputsValue[fieldName].id}
              label={inputsValue[fieldName].label}
              name={inputsValue[fieldName].name}
              value={inputsValue[fieldName].inputValue}
              changeHandler={changeHandler}
              valid={inputsValue[fieldName].valid}
              touched={inputsValue[fieldName].touched}
              shouldValidate={!!inputsValue[fieldName].validation}
              errorMessage={inputsValue[fieldName].errorMessage}
            />
          )}

          <Button
            type='primary'
            onClick={signupHandler}
            disabled={!isFormValid}
          >
            Зарегистрироваться
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
