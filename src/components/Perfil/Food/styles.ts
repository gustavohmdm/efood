import styled from 'styled-components'

export const Card = styled.div`
  background-color: #e66767;
`

export const Image = styled.img`
  margin: 8px;
`

export const Title = styled.h3`
  padding: 0px 8px 8px 8px;
  font-size: 16px;
  font-weight: 900;
  color: #ffebd9;
`
export const Description = styled.p`
  padding: 0px 8px 8px 8px;
  line-height: 22px;
  font-size: 14px;
  font-weight: 400;
  color: #ffebd9;
`

export const Button = styled.button`
  align-items: center;
  width: 304px;
  height: 24px;
  margin: 0px 8px 8px 8px;
  font-size: 14px;
  font-weight: 700;
  background-color: #ffebd9;
  color: #e66767;
  border: none;
  cursor: pointer;
`
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`

export const ModalContent = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  background-color: #e66767;

  > img {
    width: 280px;
    height: 280px;
    margin: 32px 24px 32px 32px;
  }

  div {
    position: relative;
    h3 {
      margin-top: 32px;
      margin-bottom: 16px;
      color: #ffffff;
    }

    p {
      color: #ffffff;
      font-size: 14px;
      font-weight: 400;
      line-height: 22px;
      margin-right: 32px;
    }

    img {
      position: absolute;
      top: 8px;
      right: 8px;
      width: 16px;
      height: 16px;
      cursor: pointer;
    }

    span {
      display: block;
      margin-top: 22px;
    }

    button {
      margin-top: 16px;
      width: 218px;
      height: 24px;
      color: #e66767;
      border: none;
      font-size: 14px;
      font-weight: 700;
      padding: 4px 8px;
    }
  }
`
