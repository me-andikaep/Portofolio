import React, { useState } from "react";
import { connect } from "react-redux";
import "../../Styles/auth.scss";
import { LoginAdminFirebase } from "../../Config/redux/action/firebaseAction";

const Login = (props) => {
    const [dtlogin, setDtlogin] = useState({
        email: "",
        password: "",
    });

    const handleOnChange = (e) => {
        setDtlogin({ ...dtlogin, [e.target.name]: e.target.value });
    };

    console.log("dtlogin", dtlogin);

    const onSubmitLogin = async () => {
        // const { history } = this.props
        const res = await props.onLoginUser(dtlogin).catch((err) => err);
        if (res) {
            console.log("res2", res);
        }
    };

    return (
        <div className="c-container-card-login">
            <div className="container-card">
                <div className="header">Login Admin</div>
                <div className="form-group">
                    <input
                        className="input"
                        placeholder="email"
                        name="email"
                        onChange={(e) => handleOnChange(e)}
                        value={dtlogin.email}
                    />
                    <input
                        className="input"
                        placeholder="password"
                        name="password"
                        onChange={(e) => handleOnChange(e)}
                        value={dtlogin.password}
                        type="password"
                    />
                </div>
                <button
                    className="btn-login"
                    onClick={onSubmitLogin}
                    disabled={props.isLoading === true ? true : false}
                >
                    Login
                </button>
            </div>
        </div>
    );
};

const reduxState = ({ firebase }) => ({
    isLoading: firebase.isLoading,
});

const reduxDispatch = (dispatch) => ({
    onLoginUser: (data) => dispatch(LoginAdminFirebase(data)),
});

export default connect(reduxState, reduxDispatch)(Login);
