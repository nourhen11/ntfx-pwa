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
        <Link to='favorite'>
          <StyledLinkFavoris>
            {' '}
            <FontAwesomeIcon icon={faHeart} />
          </StyledLinkFavoris>
        </Link>
      </StyledDiv>
    </>
  )
}
const StyledLinkFavoris = styled.a`
  float: right;
  margin-top: 3px;
`
const StyledDiv = styled.div`
  color: white;
  background-color: black;
`
export default NavBar
