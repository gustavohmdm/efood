import starIcon from '../../assets/images/star_favorite-[#1499].png'

import Tag from '../Tag'

import * as S from './styles'

type Props = {
  image: string
  category: string
  title: string
  assessment: number
  description: string
  isFeatured?: boolean
  id: number
}

const Restaurant = ({
  image,
  category,
  title,
  assessment,
  description,
  isFeatured,
  id
}: Props) => (
  <S.Card>
    <S.Image src={image} alt={title} />
    <S.Infos>
      {isFeatured && <Tag>Destaque do dia</Tag>}
      <Tag>{category}</Tag>
    </S.Infos>
    <S.Container>
      <S.Title>{title}</S.Title>
      <div>
        <p>{assessment}</p>
        <img src={starIcon} alt="Estrela" />
      </div>
    </S.Container>
    <S.Description>{description}</S.Description>
    <S.Button to={`/perfil/${id}`}>Saiba mais</S.Button>
  </S.Card>
)

export default Restaurant
