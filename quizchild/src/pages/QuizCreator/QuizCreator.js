import React, { useState } from 'react';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import Select from '../UI/Select/Select';
import classes from './QuizCreator.module.css';

const QuizCreator = () => {
  let [game, setGame] = useState({
    title: '',
    about: '',
  });
  let [quiz, setQuiz] = useState([]);
  let [isFormValid, setIsFormValid] = useState(false);
  let [rightAnswerId, setRightAnswerId] = useState(1);
  let [inputsValue, setInputsValue] = useState({
    question: {
      id: 'question',
      name: 'question',
      label: 'Вопрос',
      inputValue: '',
      errorMessage: 'Введите вопрос',
      valid: false,
      touched: false,
      validation: {
        required: true,
      },
    },
    option1: {
      id: '1',
      name: 'option1',
      label: 'Вариант 1',
      inputValue: '',
      errorMessage: 'Введите 5 вариантов ответов',
      valid: false,
      touched: false,
      validation: {
        required: true,
      }
    },
    option2: {
      id: '2',
      name: 'option2',
      label: 'Вариант 2',
      inputValue: '',
      errorMessage: 'Введите 5 вариантов ответов',
      valid: false,
      touched: false,
      validation: {
        required: true,
      }
    },
    option3: {
      id: '3',
      name: 'option3',
      label: 'Вариант 3',
      inputValue: '',
      errorMessage: 'Введите 5 вариантов ответов',
      valid: false,
      touched: false,
      validation: {
        required: true,
      }
    },
    option4: {
      id: '4',
      name: 'option4',
      label: 'Вариант 4',
      inputValue: '',
      errorMessage: 'Введите 5 вариантов ответов',
      valid: false,
      touched: false,
      validation: {
        required: true,
      }
    },
    option5: {
      id: '5',
      name: 'option5',
      label: 'Вариант 5',
      inputValue: '',
      errorMessage: 'Введите 5 вариантов ответов',
      valid: false,
      touched: false,
      validation: {
        required: true,
      }
    },
  });
  const addHandler = (event) => {
    event.preventDefault();
    const newQuiz = [...quiz];
    newQuiz.push({
      correctAnswerId: rightAnswerId,
      text: inputsValue.question.inputValue,
      answers: [
        { id: 1, text: inputsValue.option1.inputValue },
        { id: 2, text: inputsValue.option2.inputValue },
        { id: 3, text: inputsValue.option3.inputValue },
        { id: 4, text: inputsValue.option4.inputValue },
        { id: 5, text: inputsValue.option5.inputValue },
      ]
    });
    setQuiz(quiz = newQuiz)
  };

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

  const selectChangeHandler = (event) => {
    setRightAnswerId(rightAnswerId = event.target.value)
  }

  const submitHandler = (event) => {
    event.preventDefault();
  }

  const gameChangeHandler = (name, value) => {
    setGame({
      ...game,
      [name]: value
    });
    console.log(game);
  };

  const createQuizHandler = async () => {
    const response = await fetch('/quiz/create', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        game, quiz,
      })
    });
    const result = await response.json();
    console.log(result);

  }

  return (
    <div className={classes.QuizCreator} >
      <div>
        <form onSubmit={submitHandler}>
          <h1>Создание нового теста</h1>
          <Input
            id={'gameTitle'}
            label={'Название игры'}
            name={'title'}
            value={game.title}
            changeHandler={gameChangeHandler}
          />
          <Input
            id={'gameAbout'}
            label={'Описание игры'}
            name={'about'}
            value={game.about}
            changeHandler={gameChangeHandler}
          />

          {Object.keys(inputsValue).map(fieldName =>

            <Input
              key={inputsValue[fieldName].id}
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
          <Select
            label={'Выберите правильный ответ'}
            id={'select'}
            value={rightAnswerId}
            selectChangeHandler={selectChangeHandler}
            options={[
              { value: 1, text: inputsValue.option1.inputValue },
              { value: 2, text: inputsValue.option2.inputValue },
              { value: 3, text: inputsValue.option3.inputValue },
              { value: 4, text: inputsValue.option4.inputValue },
              { value: 5, text: inputsValue.option5.inputValue },
            ]}
          />
          <Button
            type={'primary'}
            disabled={!isFormValid}
            onClick={addHandler}
          >Записать вопрос</Button>
          <Button
            type={'success'}
            disabled={quiz.length === 0}
            onClick={createQuizHandler}
          >Создать тест</Button>
        </form>

      </div>
    </div>
  );
}

export default QuizCreator;
