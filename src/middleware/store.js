import { applyMiddleware, createStore } from "redux"

import {createLogger} from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"
import socketMiddleware from './socketMiddleware'
import jwt from './jwtRefresh'

import socketIO from 'socket.io-client';
const io = socketIO.connect(`http://localhost:5000`);

import reducer from "../reducers"

const middleware = applyMiddleware(jwt, promise(), thunk, socketMiddleware(io), createLogger())

export default createStore(reducer, middleware)
