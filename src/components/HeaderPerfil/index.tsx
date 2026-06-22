import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { open } from '../../store/reducers/cart'

import backgroundLogo from '../../assets/images/fundo.png'
import efoodLogo from '../../assets/images/logo.png'

import * as S from './styles'

type Props = {
  capa: string
  categoria: string
  titulo: string
}

const HeaderPerfil = ({ capa, categoria, titulo }: Props): JSX.Element => {
  const { items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const openCart = () => {
    if (items.length === 0) {
      alert('Não há nenhum item no carrinho!')
    } else {
      dispatch(open())
    }
  }

  return (
    <>
      <S.BackgroundLogo style={{ backgroundImage: `url(${backgroundLogo})` }}>
        <S.Button to="/">Restaurantes</S.Button>
        <S.Logo src={efoodLogo}></S.Logo>
        <S.Cart onClick={openCart}>
          {items.length} produto(s) no carrinho
        </S.Cart>
      </S.BackgroundLogo>
      <S.Presentation style={{ backgroundImage: `url(${capa})` }}>
        <S.Category>{categoria}</S.Category>
        <S.Title>{titulo}</S.Title>
      </S.Presentation>
    </>
  )
}

export default HeaderPerfil
