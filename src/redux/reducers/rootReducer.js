import { combineReducers } from 'redux'
import movieReducer from './movies/movies.reducers'

const rootReducer = () => 
    combineReducers({
        movies: movieReducer
    })


export default rootReducer