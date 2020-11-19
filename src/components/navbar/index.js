import React from 'react'
import Logo from '../../components/logo'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
  return (
    <>
      <StyledDiv>
        <Link to='/home'>
          <Logo></Logo>
        </Link>
        <StyledLinkFavoris>
          <Link to='favorite'>
            <FontAwesomeIcon icon={faHeart} />
          </Link>
        </StyledLinkFavoris>
      </StyledDiv>
    </>
  )
}
const StyledLinkFavoris = styled.div`
  a {
    color: red;
  }
  float: right;
  margin-top: 3px;
`
const StyledDiv = styled.div`
  color: white;
  background-color: black;
  padding: 14px;
`
export default NavBar
