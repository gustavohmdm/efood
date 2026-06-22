import backgroundLogo from '../../assets/images/fundo.png'
import efoodLogo from '../../assets/images/logo.png'

import * as S from './styles'

const HeaderHome = () => (
  <S.Background style={{ backgroundImage: `url(${backgroundLogo})` }}>
    <S.Logo src={efoodLogo}></S.Logo>
    <S.Title>Viva experiências gastronômicas</S.Title>
    <S.Title>no comforto da sua casa</S.Title>
  </S.Background>
)

export default HeaderHome
