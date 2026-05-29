import { Background, Logo, Social, Info } from './styles'

import backgroundFooter from '../../assets/images/rodape.png'
import efoodLogo from '../../assets/images/logo.png'
import media from '../../assets/images/redes sociais.png'

const Footer = () => (
  <Background style={{ backgroundImage: `url(${backgroundFooter})` }}>
    <Logo src={efoodLogo}></Logo>
    <Social src={media}></Social>
    <Info>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade
    </Info>
    <Info>dos produtos é toda do estabelecimento contratado.</Info>
  </Background>
)

export default Footer
