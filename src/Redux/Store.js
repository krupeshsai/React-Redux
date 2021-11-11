import {createStore} from 'redux'
import { cakeReducer } from './Cakes/CakeReducers'

export const store = createStore(cakeReducer)