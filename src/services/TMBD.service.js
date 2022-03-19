import axios from 'axios'

const apiMovieClient = () => {

    const API_URL = 'https://api.themoviedb.org'

    const axiosInstance = axios.create({
        baseURL:API_URL,
        responseType: 'json'
    })
    
    return axiosInstance
}

class MovieService{

    API_KEY = '1afdd03a100acbf8ebb28ac1ffdbc4a4'

    getPopularMovies = () => apiMovieClient().get(`/3/discover/movie?api_key=${this.API_KEY}`)
}

export default new MovieService()