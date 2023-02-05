import { createSlice } from '@reduxjs/toolkit'
import users from '../db/users_db'


const initialState = {
  users: users,
  authorization: false,
  userDetails: null
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    login: (state, action) =>{
        const { enteredLogin, enteredPassword} = action.payload;
        const authorizedUser = state.users.find(
            (user) => user.username === enteredLogin && user.password === enteredPassword)
        if (authorizedUser) {
            state.authorization = true;
            state.userDetails = authorizedUser;
        }
    },

    logout: (state) => {
        state.authorization = false;
    }
  },
})


export const { login, logout } = usersSlice.actions

export default usersSlice.reducer