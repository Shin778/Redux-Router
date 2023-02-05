import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../slices/usersSlice";
import {
    StyledLoginPage,
    StyledLoginLabel,
    StyledLoginBox,
    StyledLoginBoxInput,
    StyledLoginButton,
  } from "./LoginPage.styled";
;


const LoginButton = ({ onClick: loginFunc }) => {

    return (
        <StyledLoginButton onClick={loginFunc}>Sign in</StyledLoginButton>
    )
}


const LoginPage = () => {

    const dispatch = useDispatch();
    const [enteredLogin, setLogin] = useState("");
    const [enteredPassword, setPass] = useState("");
    const userIsAuth = useSelector((state) => state.usersSlice.authorization);


    return (
        <StyledLoginPage>
            <StyledLoginBox>
                <StyledLoginLabel>Please sign in</StyledLoginLabel>
                <StyledLoginBoxInput type="text" placeholder="Username" onChange={(event) => setLogin(event.target.value)}/>
                <StyledLoginBoxInput type="password" placeholder="Password" onChange={(event) => setPass(event.target.value)}/>
                <LoginButton onClick={() => dispatch(login({enteredLogin, enteredPassword}))}/>
                <div>
                    {userIsAuth && (
                        <Navigate to={"/cars"} replace={true}></Navigate>
                    )}</div>
            </StyledLoginBox>
        </StyledLoginPage>
    )
}

export default LoginPage