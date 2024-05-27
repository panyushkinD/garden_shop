import React from 'react';
import {Link} from "react-router-dom";
import AuthPage from "../account_manager/AuthPage";

const Main = () => {
    return (
        <div>
            <h1>Привет</h1>
                <Link to='/auth'>Авторизация</Link>
                <Link to='/register'> Регистрация</Link>

        </div>
);
};

export default Main;