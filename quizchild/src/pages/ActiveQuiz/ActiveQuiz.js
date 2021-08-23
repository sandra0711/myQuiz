import React from 'react';
import AnswerItem from '../AnswerItem/AnswerItem';
import classes from './ActiveQuiz.module.css';

const ActiveQuiz = ({ question, totalQuestions, onClickHandler }) => {
  return (
    <div className={classes.ActiveQuiz}>
      <p className={classes.Question}>
        <span>
          <strong>{question.id}.</strong>&nbsp;
          <span>{question.text}</span>
        </span>
        <small>
          {question.id} из {totalQuestions}
        </small>
      </p>
      <ul>
        {question.answers.map((answer => {
          return (
            <AnswerItem
              key={answer.id}
              id={answer.id}
              text={answer.text}
              onClickHandler={onClickHandler}
            />
          )
        }))}
      </ul>
    </div>
  );
}

export default ActiveQuiz;
