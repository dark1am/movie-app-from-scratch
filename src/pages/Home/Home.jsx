import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../../components/Card/Card'
import { CardWrapper } from '../../components/Card/Card.elements'
import Layout from '../../components/Layout/Layout'
import { loadMoviesAsync } from '../../redux/reducers/movies/movies.thunks'

function Home() {

  const dispatch = useDispatch()
  const {isLoading, movies, errorMessage} = useSelector(state=>state.movies)

  const execute = async () => {
    await dispatch(loadMoviesAsync())
    console.log(movies)
  }

  useEffect(()=>{
    execute()
    },[])

  return (
    <Layout>

        {isLoading && <h1>Loading...</h1>}
        {errorMessage && <h2>Ups! Algo salió mal</h2>}

        <CardWrapper>
          {movies && movies.results.map( movie => 
            <Card 
            key={movie.id}
            title={movie.original_title}
            description={movie.overview}
            />
          )}
        </CardWrapper>

    </Layout>
  )
}

export default Home