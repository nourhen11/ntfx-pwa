/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'

import Navbar from '../components/navbar'

const details = props => {
  const [movie, setMovie] = useState({})
  const [genres, setGenres] = useState([])
  useEffect(() => {
    axios({
      method: 'GET',
      url: `https://api.themoviedb.org/3/movie/${props.match.params.id}`,
      params: {
        api_key: '19b92b380bd8f15628b25e5891e2bb18',
        language: 'en-US'
      }
    }).then(result => {
      setMovie(result.data)
      setGenres(result.data.genres)
    })
  }, [])
  const handleFavorite = favoriteMovie => {
    const currentFavorite = JSON.parse(localStorage.getItem('favorite')) || []
    console.log(currentFavorite)
    const indexOfExistingMovie = currentFavorite.findIndex(
      el => el.id === favoriteMovie.id
    )
    if (indexOfExistingMovie == -1) {
      currentFavorite.push(favoriteMovie)
    }
    localStorage.setItem('favorite', JSON.stringify(currentFavorite))
  }

  return (
    <div>
      {' '}
      <Navbar />
      <StyledDetail>
        <div>
          <StyledImg
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          />
        </div>
        <StyledDiv2>
          <h2>{movie.title}</h2>
          <p>{movie.release_date}</p>
          {genres.map(genre => (
            <span key={genre.id}>* {genre.name}</span>
          ))}
          <p>{movie.overview}</p>
          <StyledButton
            onClick={() =>
              handleFavorite({
                id: movie.id,
                title: movie.title,
                poster_path: movie.poster_path
              })
            }
          >
            Ajouter aux Favoris
          </StyledButton>
        </StyledDiv2>
      </StyledDetail>
    </div>
  )
}
const StyledDetail = styled.div`
  background-color: ${props => props.theme.secondry};
  color: white;
  display: flex;
  flex-direction: row;
  min-height: 759px;
`
const StyledImg = styled.img`
  width: 153px;
  margin-top: 27px;
`
const StyledDiv2 = styled.div`
  padding-left: 20px;
`
const StyledButton = styled.button`
  background-color: transparent;
  color: ${props => props.theme.primary};
  width: 155px;
  cursor: pointer;
  height: 36px;
`

export default details
