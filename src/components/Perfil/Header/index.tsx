import {
  BackgroundLogo,
  Logo,
  Button,
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
      <Button to="/">Restaurantes</Button>
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
