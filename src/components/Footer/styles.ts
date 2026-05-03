import styled from 'styled-components'

export const Background = styled.div`
  width: 100%;
  height: 300px;
  margin-top: 120px;
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
  margin-top: 40px;
  margin-bottom: 32px;
`

export const Social = styled.img`
  margin-bottom: 80px;
`

export const Info = styled.p`
  font-size: 10px;
  font-weight: 400;
  text-align: center;
  color: #e66767;

  &:last-child {
    margin-bottom: 40px;
  }
`
