import { Link } from 'react-router-dom'

import styled from 'styled-components'

import { colors } from '../../styles'

export const Card = styled.div`
  position: relative;
  border: 1px solid ${colors.red};
  padding-bottom: 30px;
`

export const Image = styled.img`
  width: 472px;
  height: 217px;
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

  div {
    display: flex;
    align-items: center;

    p {
      margin-right: 8px;
      color: ${colors.red};
      font-size: 18px;
      font-weight: 700;
    }
  }
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: 700;
  color: ${colors.red};
`

export const Description = styled.p`
  padding: 0px 8px 16px 8px;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: ${colors.red};
`

export const Button = styled(Link)`
  display: inline-block;
  align-items: center;
  padding: 4px;
  margin-top: 20px;
  font-size: 14px;
  background-color: ${colors.red};
  color: ${colors.white};
  border: none;
  text-decoration: none;
  position: absolute;
  left: 8px;
  bottom: 8px;
`
