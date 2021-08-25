import React, { useState } from 'react';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import classes from './Auth.module.css';

const Auth = () => {
  const [user, setUser] = useState({
    name: '',
    age: '',
    img: '',
    pass: '',
  });

  const changeHandler = (event) => {
    const newName = event.target.name;
    const newValue = event.target.value;
    console.log(newName, newValue);
    setUser({
      ...user,
      [newName]: newValue,
    });
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
        user
      })
    });
  };

  return (
    <div className={classes.Auth}>
      <div>
        <h1>Мы хотим знать все о тебе!</h1>
        <form className={classes.AuthForm} onSubmit={submitHandler}>
          <label>
            <Input
              label='Имя'
              name='name'
              value={user.name}
              changeHandler={changeHandler}
            />
          </label>
          <label>
            <Input
              label='Пароль'
              name='pass'
              value={user.pass}
              changeHandler={changeHandler}
              inputType='password'
            />
          </label>
          <label>
            <Input
              label='Возраст (лет)'
              name='age'
              value={user.age}
              changeHandler={changeHandler}
              inputType='number'
            />
          </label>
          <label>
            <Input
              label='Путь к фото'
              name='img'
              value={user.img}
              changeHandler={changeHandler}

            />
          </label>
          <Button type='primary' onClick={signinHandler}>
            Зарегистрироваться
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Auth;
