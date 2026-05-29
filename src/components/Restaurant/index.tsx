import {
  Card,
  Image,
  Container,
  Infos,
  Title,
  Description,
  Button
} from './styles'

import Tag from '../Tag'

import starIcon from '../../assets/images/star_favorite-[#1499].png'

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
  <Card>
    <Image src={image} alt={title} />
    <Infos>
      {isFeatured && <Tag>Destaque do dia</Tag>}
      <Tag>{category}</Tag>
    </Infos>
    <Container>
      <Title>{title}</Title>
      <div>
        <p>{assessment}</p>
        <img src={starIcon} alt="Estrela" />
      </div>
    </Container>
    <Description>{description}</Description>
    <Button to={`/perfil/${id}`}>Saiba mais</Button>
  </Card>
)

export default Restaurant
