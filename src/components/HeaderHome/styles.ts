import styled from 'styled-components'

import { colors } from '../../styles'

export const Background = styled.div`
  width: 100%;
  height: 380px;
  margin-bottom: 80px;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Logo = styled.img`
  width: 124px;
  height: 60px;
  margin-top: 64px;
  margin-bottom: 140px;
`

export const Title = styled.h1`
  font-weight: 900;
  color: ${colors.red};

  &:last-child {
    margin-bottom: 40px;
  }
`
