import {combineReducers, createStore} from 'redux'
import loading from './loading'

const indexStore = combineReducers({
    loading
})

const store = createStore(indexStore)

export default store

