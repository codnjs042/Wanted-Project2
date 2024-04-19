import {combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import exRate from './slices/exRate'; 

const rootReducer = combineReducers({exRate});

const store = configureStore({reducer:rootReducer});

export default store;