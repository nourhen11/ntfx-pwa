import React, { useState, useEffect } from 'react'
import MovieListComponent from '../components/movieList'
import styled from 'styled-components'
import Navbar from '../components/navbar'

const Favorite = () => {
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem('favorite')) || []
  )
  useEffect(() => {
    console.log(favorites)
  }, [])
  const clearFavorite = () => {
    localStorage.removeItem('favorite')
    setFavorites([])
  }
  return (
    <StyledFavoriteDiv>
      <Navbar />

      <button onClick={clearFavorite}>Vider wishlist</button>
      {favorites ? (
        <MovieListComponent movies={favorites} />
      ) : (
        <p>no favorite list</p>
      )}
    </StyledFavoriteDiv>
  )
}

const StyledFavoriteDiv = styled.div`
  background-color: black;
  color: white;
`
export default Favorite
