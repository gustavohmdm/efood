import backgroundFooter from '../../assets/images/rodape.png'
import efoodLogo from '../../assets/images/logo.png'
import media from '../../assets/images/redes sociais.png'

import * as S from './styles'

const Footer = () => (
  <S.Background style={{ backgroundImage: `url(${backgroundFooter})` }}>
    <S.Logo src={efoodLogo}></S.Logo>
    <S.Social src={media}></S.Social>
    <S.Info>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade
    </S.Info>
    <S.Info>dos produtos é toda do estabelecimento contratado.</S.Info>
  </S.Background>
)

export default Footer
