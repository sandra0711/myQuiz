import React from 'react';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import classes from './login.module.css';

const Login = () => {
  const submitHandler = (event) =>
    event.preventDefault();

  const loginHandler = () => {

  };

  const signinHandler = () => {

  };

  return (
    <div className={classes.Login}>
      <div>
        <h1>Мы хотим знать твое имя!</h1>
        <form className={classes.LoginForm} onSubmit={submitHandler}>
          <label>
            <Input
              label={'Имя'}
            />
          </label>
          <label>
            <Input
              label={'Пароль'}
              errorMessage={'test'}
            />
          </label>
          <Button type="success" onClick={loginHandler}>
            Войти
          </Button>
          <Button type='primary' onClick={signinHandler}>
            Зарегистрироваться
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Login;
