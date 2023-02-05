import { combineReducers, configureStore } from '@reduxjs/toolkit'
import carsSlice from '../slices/carsSlice'
import usersSlice from '../slices/usersSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
// import storageSession from 'reduxjs-toolkit-persist/lib/storage/session'

const persistConfig = {
  key: 'ebat',
  storage,
}

const rootReducer = combineReducers({
  carsSlice,
  usersSlice,
})


const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
})

export const persistor = persistStore(store)