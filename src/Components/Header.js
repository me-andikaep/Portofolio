import React, {
    // useState
} from 'react'
import { NavLink } from "react-router-dom";

const Header = (props) => {
   
    // const onActiveCss = {
    //     color: "#2893E1",
    // };

    return (
        <div className="c-header">
            <ul className="c-navbar-nav">
                <li className="navbar-nav-item">
                    <NavLink
                        className="navbar-nav-link"
                        to="/profile"
                        activeClassName="active"
                        // activeStyle={onActiveCss}
                    >
                        Profile
                    </NavLink>
                </li>
                <li className="navbar-nav-item">
                    <NavLink
                        className="navbar-nav-link"
                        to="/portofolio"
                        activeClassName="active"
                        // activeStyle={onActiveCss}
                    >
                        Portofolio
                    </NavLink>
                </li>
                <li className="navbar-nav-item">
                    <NavLink
                        className="navbar-nav-link"
                        to="/cv"
                        activeClassName="active"
                        // activeStyle={onActiveCss}
                    >
                        CV
                    </NavLink>
                </li>
            </ul>

            <div className="txt">
                Andikaep.dev
            </div>
        </div>
    )
}

export default Header
    