import {
  Card,
  Container,
  Infos,
  Title,
  Image,
  Description,
  Button
} from './styles'
import Tag from '../Tag'

type Props = {
  image: string
  category: string
  title: string
  assessment: string
  description: string
  button: string
  isFirst?: boolean
}

const Food = ({
  image,
  category,
  title,
  assessment,
  description,
  button,
  isFirst
}: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Infos>
      {isFirst && <Tag>Destaque do dia</Tag>}
      <Tag>{category}</Tag>
    </Infos>
    <Container>
      <Title>{title}</Title>
      <Image src={assessment} alt="Nota" />
    </Container>
    <Description>{description}</Description>
    <Button to="/perfil">{button}</Button>
  </Card>
)

export default Food
