import React, { useState } from 'react';
import classes from './ChooseGame';


const ChooseGame = () => {

  let [games, setGames] = useState([]);

  const getAllGames = async () => {
    const response = await fetch('/quiz/choose-game');
    console.log(response);
    const result = await response.json();
    console.log(result);
    return result;
  };

  setGames(games = getAllGames());
  console.log(games);
  return (
    <div className={classes.ChooseGame}>
      <div>
        <h1>Выбери тему игры или добавь новую</h1>
        {games.map(el => <span>{el.title}</span>)}
      </div>
    </div>
  )
}

export default ChooseGame;
