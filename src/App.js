import React, {useState} from 'react'
import './App.css';
import './Styles/CustomStyles.scss'
import Header from './Components/Header';
import routes from "./Config/Routes";
import {
  Switch,
  Route,
  // Redirect
} from "react-router-dom";


function App() {


  const getRoutes = routeList => {
    return routeList.map((prop, key) => {
      return (
        <Route
          path={prop.path}
          component={prop.component}
          key={key}
        />
      );
    });
  };

  return (
    <div className="App">
      <Header />
      <div className="c-wrapper-content">
        <div className="wrapper-content">
          <Switch>
            {getRoutes(routes)}
          </Switch>
        </div>
      </div>

    </div>
  );
} 

export default App;
