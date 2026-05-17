import {
  BackgroundLogo,
  Logo,
  ButtonHome,
  Cart,
  Presentation,
  Category,
  Title
} from './styles'
import backgroundLogo from '../../../assets/images/fundo2.png'
import backgroundPresentation from '../../../assets/images/imagemdefundo.png'
import efoodLogo from '../../../assets/images/logo.png'

const Header = () => (
  <>
    <BackgroundLogo style={{ backgroundImage: `url(${backgroundLogo})` }}>
      <ButtonHome to="/">Restaurantes</ButtonHome>
      <Logo src={efoodLogo}></Logo>
      <Cart>0 produto(s) no carrinho</Cart>
    </BackgroundLogo>
    <Presentation style={{ backgroundImage: `url(${backgroundPresentation})` }}>
      <Category>Italiana</Category>
      <Title>La Dolce Vita Trattoria</Title>
    </Presentation>
  </>
)

export default Header
