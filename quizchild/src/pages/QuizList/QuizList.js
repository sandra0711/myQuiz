import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './QuizList.module.css';

const QuizList = () => {
  const games = [
    { id: 1, title: 'Свинка Пепа', info: 'Любимый мультик Лары', },
    { id: 2, title: 'Снежная королева', info: 'Сказка о Кае и Герде', },
    { id: 3, title: 'Три поросенка', info: 'Волку не удалось расправиться с поросятами!', },
    { id: 4, title: 'Золушка', info: 'Красивая история', },
  ];

  return (
    <div className={classes.QuizList}>
      <ul>
        {games.map(game => {
          return (
            <li key={game.id}>
              <NavLink className={classes.link} to={"/quiz/" + game.id}>
                <div className={classes.container}>
                  <h4>{game.title}</h4>
                  <p>{game.info}</p>
                </div>
                {/* <img src="img_avatar.png" alt="Avatar" style={width: "100%"} /> */}
              </NavLink>
            </li>
          )
        })}
      </ul>
    </div>


  );
}

export default QuizList;
