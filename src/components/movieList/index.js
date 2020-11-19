/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'
import MovieComponent from '../movie'

const MivieList = props => {
  return (
    <StyledSection>
      {props.movies.map(movie => (
        <MovieComponent movie={movie} key={movie.id} />
      ))}
    </StyledSection>
  )
}

const StyledSection = styled.section`
  display: flex;
  flex-flow: row wrap;
  text-align: center;
  justify-content: center;
  margin-top: 20px;
`

export default MivieList
