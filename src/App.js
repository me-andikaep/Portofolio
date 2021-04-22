import React, {
  // useState
} from 'react'
import './App.css';
import './Styles/CustomStyles.scss'
import Header from './Components/Header';
import routes from "./Config/Routes";
import {
  Switch,
  Route,
  // Redirect,
  useHistory
} from "react-router-dom";


function App(props) {
  const currentLocation = window.location.pathname;
  const history = useHistory()

  console.log('currentLocation', currentLocation)

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
          {currentLocation === '/' ? 
            history.push('/profile')
          :
            <Switch>
              {getRoutes(routes)}
            </Switch>
          }
          
          
        </div>
      </div>

    </div>
  );
}

export default App;
