import { applyMiddleware, createStore } from "redux"

import {createLogger} from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"
import socketMiddleware from './socketMiddleware'
import socketClient from './socketClient'


import reducer from "../reducers"

const middleware = applyMiddleware(promise(), thunk, socketMiddleware(socketClient), createLogger())

export default createStore(reducer, middleware)
