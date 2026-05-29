import { Background, Logo, Title } from './styles'

import backgroundLogo from '../../assets/images/fundo.png'
import efoodLogo from '../../assets/images/logo.png'

const HeaderHome = () => (
  <Background style={{ backgroundImage: `url(${backgroundLogo})` }}>
    <Logo src={efoodLogo}></Logo>
    <Title>Viva experiências gastronômicas</Title>
    <Title>no comforto da sua casa</Title>
  </Background>
)

export default HeaderHome
