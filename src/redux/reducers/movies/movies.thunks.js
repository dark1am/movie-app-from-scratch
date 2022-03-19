import MovieService from '../../../services/TMBD.service'
import actions from './movies.actions'

export const loadMoviesAsync = () => (dispatch) => {
    dispatch(actions.movieLoadStart())

    MovieService.getPopularMovies()
        .then(res => dispatch(actions.movieLoadSuccess(res.data)))
        .catch(err => dispatch(actions.movieLoadError(err.message)))
}
