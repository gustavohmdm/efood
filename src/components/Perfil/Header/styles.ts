import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const BackgroundLogo = styled.div`
  width: 100%;
  height: 180px;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const Logo = styled.img`
  width: 124px;
  height: 60px;
  margin-left: 84px;
`

export const ButtonHome = styled(Link)`
  font-size: 18px;
  font-weight: 900;
  text-decoration: none;
  color: #e66767;
  cursor: pointer;
`

export const Cart = styled.h2`
  font-size: 18px;
  font-weight: 900;
  color: #e66767;
  cursor: pointer;
`

export const Presentation = styled.div`
  width: 100%;
  height: 380px;
  margin-bottom: 56px;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;
`
export const Category = styled.h1`
  padding: 32px 0px 160px 240px;
  font-weight: 100;
  color: #ffffff;
`

export const Title = styled.h1`
  padding: 60px 0px 32px 240px;
  font-weight: 900;
  color: #ffffff;
`
