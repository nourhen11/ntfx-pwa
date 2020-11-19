import React, { useState } from 'react'
import MovieListComponent from '../components/movieList'
import styled from 'styled-components'
import Navbar from '../components/navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBan } from '@fortawesome/free-solid-svg-icons'
const Favorite = () => {
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem('favorite')) || []
  )
  const clearFavorite = () => {
    localStorage.removeItem('favorite')
    setFavorites([])
  }
  return (
    <StyledFavoriteDiv>
      <Navbar />
      {favorites ? (
        <MovieListComponent movies={favorites} />
      ) : (
        <p>no favorite list</p>
      )}
      <StyledButtonClear onClick={clearFavorite}>
        <FontAwesomeIcon icon={faBan} />
      </StyledButtonClear>
    </StyledFavoriteDiv>
  )
}

const StyledFavoriteDiv = styled.div`
  background-color: black;
  color: white;
  min-height: 759px;
`
const StyledButtonClear = styled.button`
  color: red;
  margin-left: 37px;
  margin-top:10px;
  background-color: transparent;
}
`
export default Favorite
