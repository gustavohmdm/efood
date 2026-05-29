import styled from 'styled-components'

import excluir from '../../assets/images/excluir.png'

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
  background-color: #e66767;
  z-index: 1;
  padding-top: 32px;
  max-width: 360px;
  width: 100%;
`

export const CartItem = styled.li`
  display: flex;
  width: 344px;
  height: 100px;
  position: relative;
  background-color: #ffebd9;
  margin: 0px 8px 16px 8px;

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
      color: #e66767;
      font-weight: bold;
      font-size: 16px;
      margin-top: 8px;
      margin-bottom: 16px;
    }

    span {
      display: block;
      color: #e66767;
      font-weight: bold;
      font-size: 14px;
    }

    button {
      background-image: url(${excluir});
      color: #e66767;
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
  color: #ffebd9;
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
  background-color: #ffebd9;
  color: #e66767;
  border: none;
  font-size: 14px;
  font-weight: 700;
  padding-top: 4px;
  padding-bottom: 4px;
  margin-left: 8px;
  margin-right: 8px;
  cursor: pointer;
`
