import {
  BackgroundLogo,
  Logo,
  Button,
  Cart,
  Presentation,
  Category,
  Title
} from './styles'
import backgroundLogo from '../../../assets/images/fundo.png'
import efoodLogo from '../../../assets/images/logo.png'
type Props = {
  capa: string
  categoria: string
  titulo: string
}

const Header = ({ capa, categoria, titulo }: Props): JSX.Element => (
  <>
    <BackgroundLogo style={{ backgroundImage: `url(${backgroundLogo})` }}>
      <Button to="/">Restaurantes</Button>
      <Logo src={efoodLogo}></Logo>
      <Cart>0 produto(s) no carrinho</Cart>
    </BackgroundLogo>
    <Presentation style={{ backgroundImage: `url(${capa})` }}>
      <Category>{categoria}</Category>
      <Title>{titulo}</Title>
    </Presentation>
  </>
)

export default Header
