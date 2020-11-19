/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Logo from '../components/logo'
import styled from 'styled-components'
import StyledInputSearch from '../elements/input'
import { useHistory } from 'react-router-dom'
const login = () => {
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [request_token, setReaquestToken] = useState('')
  const history = useHistory()
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      history.push('/home')
    } else {
      axios({
        method: 'GET',
        url: 'https://api.themoviedb.org/3/authentication/token/new',
        params: {
          api_key: '19b92b380bd8f15628b25e5891e2bb18'
        }
      }).then(result => {
        console.log(result)
        setReaquestToken(result.data.request_token)
      })
    }
  }, [])
  const login = evt => {
    evt.preventDefault()
    axios({
      method: 'POST',
      url:
        'https://api.themoviedb.org/3/authentication/token/validate_with_login',
      params: {
        api_key: '19b92b380bd8f15628b25e5891e2bb18'
      },
      data: {
        username,
        password,
        request_token
      }
    })
      .then(res => {
        localStorage.setItem('token', res.data.request_token)
        history.push('/home')
      })
      .catch(err => {
        console.log(err)
      })
  }
  return (
    <StyledLogin>
      <Logo></Logo>
      <StyledH1Login>S'identifier</StyledH1Login>
      <StyledFormLogin onSubmit={login}>
        <StyledInputSearch
          type='text'
          placeholder='E-mail ou numéro de téléphone'
          value={username}
          onChange={e => setUserName(e.target.value)}
        />
        <br />
        <StyledInputSearch
          type='password'
          placeholder='Mot de passe'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <br />
        <StyledInputSubmit type='submit' value='S identifier' />
      </StyledFormLogin>
    </StyledLogin>
  )
}

const StyledLogin = styled.div`
  background-color: ${props => props.theme.secondry};
  min-height: 657px;
  color: white;
`
const StyledFormLogin = styled.form`
  margin: 18px;
`

const StyledH1Login = styled.h1`
  padding-left: 17px;
`
const StyledInputSubmit = styled.input`
  margin-top: 30px;
  width: -webkit-fill-available;
  background-color: transparent;
  border-color: #bdbdbd;
  border-width: 1px;
  color: white;
  height: 56px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 700;
  margin: 24px 0 12px;
`
export default login
