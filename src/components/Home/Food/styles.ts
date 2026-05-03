import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Card = styled.div`
  position: relative;
  border: 1px solid #e66767;
`
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 8px 16px 8px;
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: 700;
  color: #e66767;
`

export const Image = styled.img`
  width: 55px;
  height: 21px;
`

export const Description = styled.p`
  padding: 0px 8px 16px 8px;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: #e66767;
`

export const Button = styled(Link)`
  display: inline-block;
  align-items: center;
  padding: 4px;
  margin-left: 8px;
  margin-bottom: 8px;
  font-size: 14px;
  background-color: #e66767;
  color: #fff;
  border: none;
  text-decoration: none;
`
