/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const Movie = props => {
  return (
    <StyledArticleHome>
      <div>
        {props.movie.poster_path ? (
          <Link to={`/movie/${props.movie.id}`}>
            <StyledImg
              src={`${process.env.REACT_APP_URL_IMG}${props.movie.poster_path}`}
              key={props.movie.id}
              alt={props.movie.title}
            />
          </Link>
        ) : (
          <StyledImg src='https://thumbs.dreamstime.com/b/no-image-available-icon-photo-camera-flat-vector-illustration-132483097.jpg' />
        )}
      </div>
    </StyledArticleHome>
  )
}

const StyledArticleHome = styled.article`
  width: 160px;
  display: flex;
  flex-direction: column;
  margin-top: 15px;
`

const StyledImg = styled.img`
  width: 150px;
  height: 161px;
`
export default Movie
