import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { open } from '../../store/reducers/cart'

import {
  BackgroundLogo,
  Logo,
  Button,
  Cart,
  Presentation,
  Category,
  Title
} from './styles'

import backgroundLogo from '../../assets/images/fundo.png'
import efoodLogo from '../../assets/images/logo.png'

type Props = {
  capa: string
  categoria: string
  titulo: string
}

const HeaderPerfil = ({ capa, categoria, titulo }: Props): JSX.Element => {
  const { items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
  }

  return (
    <>
      <BackgroundLogo style={{ backgroundImage: `url(${backgroundLogo})` }}>
        <Button to="/">Restaurantes</Button>
        <Logo src={efoodLogo}></Logo>
        <Cart onClick={openCart}>{items.length} produto(s) no carrinho</Cart>
      </BackgroundLogo>
      <Presentation style={{ backgroundImage: `url(${capa})` }}>
        <Category>{categoria}</Category>
        <Title>{titulo}</Title>
      </Presentation>
    </>
  )
}

export default HeaderPerfil
