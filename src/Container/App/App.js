import React from "react"; // useState
import "./App.css";
import "../../Styles/CustomStyles.scss";
import Header from "../../Components/Header";
import routes from "../../Config/Routes";
import {
    Switch,
    Route,
    // Redirect,
    useHistory,
} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../Config/redux";

function App(props) {
    const currentLocation = window.location.pathname;
    const history = useHistory();

    console.log("currentLocation", currentLocation);

    const getRoutes = (routeList) => {
        return routeList.map((prop, key) => {
            return (
                <Route
                    path={prop.path}
                    component={prop.component}
                    key={key}
                    exact={prop.isExact}
                />
            );
        });
    };

    return (
        <Provider store={store}>
            <div className="App">
                <Header />
                <div className="c-wrapper-content">
                    <div className="wrapper-content">
                        {currentLocation === "/" ? (
                            history.push("/profile")
                        ) : (
                            <Switch>{getRoutes(routes)}</Switch>
                        )}
                    </div>
                </div>
            </div>
        </Provider>
    );
}

export default App;
