import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import MovieListComponent from '../components/movieList'
import PaginationComponent from '../components/pagination'
import Navbar from '../components/navbar'
const home = () => {
  const [movies, setMovies] = useState([])
  const [searchQuery, setQuery] = useState('')
  const [totalPages, setTotalPages] = useState(0)

  useEffect(() => {
    axios({
      method: 'GET',
      url: `${process.env.REACT_APP_URL}movie/now_playing`,
      params: {
        api_key: process.env.REACT_APP_API_KEY,
        language: 'en-US'
      }
    }).then(result => {
      console.log(result)
      setMovies(result.data.results)
      setTotalPages(result.data.total_pages)
    })
  }, [])

  const onChange = e => {
    e.preventDefault()
    setQuery(e.target.value)
    axios({
      method: 'GET',
      url: `${process.env.REACT_APP_URL}search/movie`,
      params: {
        api_key: process.env.REACT_APP_API_KEY,
        query: searchQuery,
        language: 'en-US',
        include_adult: false
      }
    })
      .then(result => {
        console.log(result.data.results)
        setMovies(result.data.results)
      })
      .catch(err => {
        console.log(err)
      })
  }
  const handlePageClick = ({ selected: selectedPage }) => {
    console.log(selectedPage)
    axios({
      method: 'GET',
      url: `${process.env.REACT_APP_URL}movie/now_playing`,
      params: {
        api_key: process.env.REACT_APP_API_KEY,
        language: 'en-US',
        page: selectedPage + 1
      }
    }).then(result => {
      console.log(result)
      setMovies(result.data.results)
    })
  }
  return (
    <StyledHomePage>
      <Navbar />
      <StyledDiv1>
        <StyledInputSearch
          type='text'
          placeholder='Rechercher un film, une série, un artiste......'
          value={searchQuery}
          onChange={onChange}
        />
      </StyledDiv1>
      <MovieListComponent movies={movies} />
      <PaginationComponent totalPages={totalPages} method={handlePageClick} />
    </StyledHomePage>
  )
}
const StyledHomePage = styled.div`
  background-color: ${props => props.theme.secondry};
  padding: 10px;
  color: white;
`
const StyledDiv1 = styled.div`
  display: flex;
  flex-direction: column;
`
const StyledInputSearch = styled.input`
  width: -webkit-fill-available;
  border-radius: 4px;
  border: 0;
  height: 40px;
  background-color: #61616196;
  color: gray;
  margin-top: 10px;
  text-align: center;
`

export default home
