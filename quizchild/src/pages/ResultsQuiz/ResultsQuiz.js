import React from 'react';
import classes from './ResultsQuiz.module.css';
import Button from '../UI/Button/Button';

const ResultsQuiz = ({ questions, isCorrectAnswer, retryQuiz, retryGame }) => {
  const successTotal = Object.values(isCorrectAnswer).reduce((sum, el) => el === 'error' ? sum : sum + 1, 0
  );
  return (
    <div className={classes.ResultsQuiz}>
      <ul>
        {questions.map(question => {
          return (
            <li key={question.id}>
              <strong> {question.id}. </strong>&nbsp;
              {question.text}
              {isCorrectAnswer[question.id] === 'correct' ?
                <i className={'fa fa-check ' + classes.correct} /> :
                <i className={'fa fa-times ' + classes.error} />
              }
            </li>
          )
        })}
        <p className={classes.total}>Правильных ответов {successTotal} из {questions.length}</p>
      </ul>
      <div className={classes.retry}>
        <Button onClick={retryQuiz} type='primary'>Повторить!</Button>
        <Button onClick={retryGame} type='success'>Перейти в список тестов</Button>
      </div>
    </div>
  );
}

export default ResultsQuiz;
