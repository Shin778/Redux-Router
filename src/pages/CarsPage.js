
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import Cars from "../components/Cars";
import { useSelector, useDispatch } from 'react-redux'
import { selectedCar } from "../slices/carsSlice";
import { logout } from "../slices/usersSlice";
import {
  StyledLogoutButton,
  StyledApp,
  StyledHeader,
  StyledInput,
} from "./CarsPage.styled";
;


function HomePage() {
  const { cars, selectedCar: selCar } = useSelector((state) => state.carsSlice);
  console.log(cars);
  const dispatch = useDispatch();
  let [input, setInput] = useState('');
  const { userDetails } = useSelector((state) => state.usersSlice)

  function searchCar(event) {
    const { value } = event.target;
    setInput(value.toLowerCase())
  }

  const userIsAuth = useSelector((state) => state.usersSlice.authorization);

  return (
    <StyledApp>
      <StyledHeader>
        <div style={{color: 'white',fontSize: 22, paddingRight: 44,}}>Username: {userDetails.username}</div>
        <div style={{color: 'white',fontSize: 22,}}>Balance: {userDetails.balance}</div>
        <StyledLogoutButton onClick={()=> {dispatch(logout())}}>
          Log out
        </StyledLogoutButton>
        <div>
          {!userIsAuth && (
            <Navigate to={"/login"} replace={true}></Navigate>
          )}
        </div>
      </StyledHeader>
      <div style={{color: 'white', fontSize: 60,}}>Selected car: { selCar.name?  selCar.name : "car is not selected" }</div>
      <div><input style={{ paddingLeft: 10, marginBottom: 14, marginTop: 14, outline: 'none', border: 0, borderRadius: 10, width: 300, fontSize: 20, height: 30 }} onChange={searchCar} placeholder="Car name:" /></div>
      {cars
        .filter(item => item.name.toLowerCase().includes(input))
        .map((item) => {
          return (
            <Cars onClick={() => dispatch(selectedCar(item)) } key={item.id} name={item.name}></Cars>
          )
        })}
    </StyledApp>
  );
};


export default HomePage;