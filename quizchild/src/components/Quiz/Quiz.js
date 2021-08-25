import React, { useState } from 'react';
import ActiveQuiz from '../../pages/ActiveQuiz/ActiveQuiz';
import ResultsQuiz from '../../pages/ResultsQuiz/ResultsQuiz';
import classes from './Quiz.module.css';

const Quiz = () => {
  const [state, setState] = useState({
    isLast: false,
    activeQuestionId: 1,
    isCorrectAnswer: {},
    quiz: [
      {
        id: 1,
        correctAnwerId: 1,
        text: 'Лучшая подруга Пеппы это...',
        answers: [
          {
            id: 1,
            text: 'Кошка Кэнди',
          },
          {
            id: 2,
            text: 'Кролик Ребекка',
          },
          {
            id: 3,
            text: 'Зебра Зоя'
          },
          {
            id: 4,
            text: 'Овечка Сьюзи'
          },
          {
            id: 5,
            text: 'Кенгуру Кайли'
          },
        ]
      },
      {
        id: 2,
        correctAnwerId: 2,
        text: 'Как зовут младшего брата Дельфины (подруги Пеппы из Франции)?',
        answers: [
          {
            id: 1,
            text: 'Дайон',
          },
          {
            id: 2,
            text: 'Дидье'
          },
          {
            id: 3,
            text: 'Джерод'
          },
          {
            id: 4,
            text: 'Джехан'
          },
          {
            id: 5,
            text: 'Дамиен'
          },
        ]
      },
    ]

  });

  const onClickHandler = (id) => {

    if (id === state.quiz[state.activeQuestionId - 1].correctAnwerId) {
      if (state.isCorrectAnswer[state.activeQuestionId] !== 'error') {
        setState(prev => {
          return {
            ...prev,
            isCorrectAnswer: { ...prev.isCorrectAnswer, [prev.activeQuestionId]: 'correct' }
          };
        });
      };
      if (state.activeQuestionId === state.quiz.length) {
        setState(prev => {
          return {
            ...prev,
            isLast: true,
          }
        });
      } else {
        setState(prev => {
          return {
            ...prev,
            activeQuestionId: prev.activeQuestionId + 1,
          }
        });
      }
    } else {
      setState(prev => {
        return {
          ...prev,
          isCorrectAnswer: { ...prev.isCorrectAnswer, [prev.activeQuestionId]: 'error' }
        };
      });
    };
  };

  const retryQuiz = () => {
    setState(prev => {
      return {
        ...prev,
        isLast: false,
        activeQuestionId: 1,
        isCorrectAnswer: {},
      }
    })
  };

  const retryGame = () => {
    console.log('Здесь будет вывод списка игр');
  }

  return (
    <div className={classes.Quiz}>
      {/* <img width="1600" height="900" src="https://trikky.ru/wp-content/blogs.dir/1/files/2020/06/03/peppa-pig.png" class="attachment-full size-full wp-post-image" alt="" loading="lazy" is_main_img="1" srcset="https://trikky.ru/wp-content/blogs.dir/1/files/2020/06/03/peppa-pig.png 1600w, https://trikky.ru/wp-content/blogs.dir/1/files/2020/06/03/peppa-pig-768x432.png 768w, https://trikky.ru/wp-content/blogs.dir/1/files/2020/06/03/peppa-pig-1536x864.png 1536w" sizes="(max-width: 1600px) 100vw, 1600px"></img> */}
      <img src="https://www.peppapig.com/wp-content/uploads/sites/3/2019/02/george_pig_splat.png" alt={"Свинка"}></img>
      <div className={classes.QuizWrapper}>
        <img style={{ "width": "100px", "height": "120px" }} src="/img/PHOTO-2021-08-14-15-00-45.jpg" alt="Talia" />
        {state.isLast ?
          <>
            <h1>Результат игры</h1>
            <ResultsQuiz
              questions={state.quiz}
              isCorrectAnswer={state.isCorrectAnswer}
              retryQuiz={retryQuiz}
              retryGame={retryGame}
            />
          </> :
          <>
            <h1>Выбирай ответ!</h1>
            <ActiveQuiz
              question={state.quiz[state.activeQuestionId - 1]}
              totalQuestions={state.quiz.length}
              onClickHandler={onClickHandler}
            />
          </>}
      </div>
      <img src="https://www.peppapig.com/wp-content/uploads/sites/3/2019/02/peppa_pig_splat.png" alt={"Свинка"}></img>
    </div>
  );
}

export default Quiz;
