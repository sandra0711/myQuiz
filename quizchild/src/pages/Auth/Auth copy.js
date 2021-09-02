import React, { useState } from 'react';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import classes from './Auth.module.css';

const Auth = () => {
  let [isFormValid, setIsFormValid] = useState(false);
  let [inputsValue, setInputsValue] = useState({
    name: {
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

  const signinHandler = async () => {
    const response = await fetch('/auth', {
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
        <h1>Мы хотим знать все о тебе!</h1>
        <form className={classes.AuthForm} onSubmit={submitHandler}>
          <Input
            id={'name'}
            label={'Имя'}
            name={'name'}
            value={inputsValue.name.inputValue}
            changeHandler={changeHandler}
            valid={inputsValue.name.valid}
            touched={inputsValue.name.touched}
            shouldValidate={!!inputsValue.name.validation}
            errorMessage={inputsValue.name.errorMessage}
          />
          <Input
            id={'age'}
            label={'Возраст (лет)'}
            name={'age'}
            value={inputsValue.age.inputValue}
            inputType='number'
            changeHandler={changeHandler}
            valid={inputsValue.age.valid}
            touched={inputsValue.age.touched}
            shouldValidate={!!inputsValue.age.validation}
            errorMessage={inputsValue.age.errorMessage}
          />
          <Input
            id={'img'}
            label={'Фото'}
            name={'img'}
            value={inputsValue.img.inputValue}
            changeHandler={changeHandler}
            valid={inputsValue.img.valid}
            touched={inputsValue.img.touched}
            shouldValidate={!!inputsValue.img.validation}
            errorMessage={inputsValue.img.errorMessage}
          />
          <Input
            id={'pass'}
            label={'Пароль'}
            name={'pass'}
            value={inputsValue.pass.inputValue}
            changeHandler={changeHandler}
            inputType='password'
            valid={inputsValue.pass.valid}
            touched={inputsValue.pass.touched}
            shouldValidate={!!inputsValue.pass.validation}
            errorMessage={inputsValue.pass.errorMessage}
          />
          <Button
            type='primary'
            onClick={signinHandler}
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
