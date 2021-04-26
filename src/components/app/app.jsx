import React from 'react';
import {Switch, Route} from 'react-router-dom';
import MainPage from '../main-page/main-page';
import ErrorScreen from '../error-screen/error-screen';

const App = () => {

  return <>
  
    <Switch>
      <Route exact path={`/`}>
        <MainPage />
      </Route>
    </Switch>

  </>;

};

export default App;
