import actionTypes from './movies.actionTypes'

const movieLoadStart = () => {
    return {
        type: actionTypes.MOVIES_LOAD_START
    }
}

const movieLoadError = (error) => {
    return {
        type: actionTypes.MOVIES_LOAD_ERROR,
        payload: error
    }
}

const movieLoadSuccess = (movies) => {
    return {
        type: actionTypes.MOVIES_LOAD_SUCCESS,
        payload: movies
    }
}

export default {
    movieLoadStart,
    movieLoadError,
    movieLoadSuccess
}