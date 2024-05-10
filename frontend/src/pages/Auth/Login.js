import React from "react";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../services/api";
import { useDispatch } from "react-redux";
import { setLogin, setToken } from "../..//services/store";

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [login] = useLoginMutation();


    const handleLogin = () => {
        dispatch(setToken({token: "token"}))
        navigate("/home");
    }
    return (
        <div className="container">
            <h1>Login Page</h1>
            <button onClick={handleLogin}>Login with OAuth2</button>
        </div>
    )
}

export default Login;