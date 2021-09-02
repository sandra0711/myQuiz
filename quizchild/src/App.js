import React from "react";
import { Route, Switch } from 'react-router-dom';
import Quiz from "./components/Quiz/Quiz";
import Layout from "./hoc/Layout";
import Auth from "./pages/Auth/Auth";
import QuizCreator from "./pages/QuizCreator/QuizCreator";
import ChooseGame from "./pages/ChooseGame/ChooseGame";
import QuizList from "./pages/QuizList/QuizList";


function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/auth'><Auth /></Route>
        <Route path='/choose-game'> <ChooseGame /></Route>
        <Route path='/quiz-creator'><QuizCreator /></Route>
        <Route path='/quiz/:id'><Quiz /></Route>
        <Route path='/' exact><QuizList /></Route>
      </Switch>
    </Layout>
  );
}

export default App;
