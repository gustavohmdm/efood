import styled from 'styled-components'

import { colors } from '../../styles'

import deleteIcon from '../../assets/images/excluir.png'

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const Sidebar = styled.aside`
  background-color: ${colors.red};
  z-index: 1;
  padding: 32px 8px 0px 8px;
  max-width: 360px;
  width: 100%;
`

export const CartItem = styled.li`
  display: flex;
  width: 344px;
  height: 100px;
  position: relative;
  background-color: ${colors.white};
  margin-bottom: 16px;

  div {
    display: flex;

    img {
      height: 80px;
      width: 80px;
      object-fit: cover;
      margin: 8px 8px 12px 8px;
    }

    div {
      display: block;
    }

    h3 {
      color: ${colors.red};
      font-weight: bold;
      font-size: 16px;
      margin-top: 8px;
      margin-bottom: 16px;
    }

    span {
      display: block;
      color: ${colors.red};
      font-weight: bold;
      font-size: 14px;
    }

    button {
      background-image: url(${deleteIcon});
      color: ${colors.red};
      width: 16px;
      height: 16px;
      border: none;
      background-color: transparent;
      position: absolute;
      bottom: 8px;
      right: 8px;
      cursor: pointer;
    }
  }
`
export const Prices = styled.p`
  font-weight: bold;
  font-size: 14px;
  color: ${colors.white};
  margin-top: 40px;
  margin-left: 8px;
  margin-right: 8px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Button = styled.button`
  width: 344px;
  height: 24px;
  background-color: ${colors.white};
  color: ${colors.red};
  border: none;
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 8px;
  cursor: pointer;
`

export const Delivery = styled.h3`
  color: ${colors.white};
  margin-left: 8px;
  margin-bottom: 16px;
`

export const TotalPrice = styled.h3`
  color: ${colors.white};
  margin-left: 8px;
  margin-bottom: 16px;
`

export const Success = styled.h3`
  color: ${colors.white};
  padding-bottom: 16px;
  font-weight: 700px;
  font-size: 16px;
`

export const Congratulations = styled.p`
  color: ${colors.white};
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;

  span {
    display: block;
    padding-bottom: 16px;
  }
`

export const InputGroup = styled.div`
  margin-bottom: 8px;

  label {
    color: ${colors.white};
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 8px;
    display: block;
  }
  input {
    background-color: ${colors.white};
    border: none;
    width: 100%;
    width: 344px;
    height: 32px;

    &.big {
      width: 228px;
      margin-right: 32px;
    }

    &.average {
      width: 155px;
      margin-right: 34px;
    }
    &.average2 {
      width: 155px;
    }

    &.small {
      width: 84px;
    }

    &.error {
      border: 4px solid red;
    }
  }
`

export const ContainerInputGroup = styled.div`
  display: flex;
`

export const ContainerButton = styled.div`
  margin-top: 24px;
`
