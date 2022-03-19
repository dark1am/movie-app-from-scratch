import initialState from './movies.initialState'
import actionTypes from './movies.actionTypes'

const movieReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.MOVIES_LOAD_START:
            return {
                ...state,
                isLoading:true,
                movies:null,
                errorMessage: null
            }
        case actionTypes.MOVIES_LOAD_SUCCESS:
            return {
                ...state,
                isLoading: false,
                movies: action.payload
            }
        case actionTypes.MOVIES_LOAD_ERROR:
            return {
                ...state,
                errorMessage: action.payload
            }
        default:
            return state
    }
}

export default movieReducer