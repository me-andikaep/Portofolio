import React, { Fragment } from "react"; // useState
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
import Login from "../Pages/Login";
import Admin from "../Pages/AdminAddContent";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
				<div className='App'>
					<ToastContainer
						position='top-right'
						autoClose={5000}
						hideProgressBar={false}
						newestOnTop={false}
						closeOnClick={false}
						rtl={false}
						pauseOnFocusLoss
						draggable={false}
						pauseOnHover
					/>
					<Switch>
						<Fragment>
							<Route path='/login' component={Login} />
							<Route path='/admin' component={Admin} />
							<div className='c-wrapper'>
								<Header />
								<div className='c-wrapper-content'>
									{currentLocation === '/' ? (
										history.push('/profile')
									) : (
										<Switch>{getRoutes(routes)}</Switch>
									)}
								</div>
							</div>
						</Fragment>
					</Switch>
				</div>
			</Provider>
		);
}

export default App;
