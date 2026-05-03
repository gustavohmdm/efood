import { Card, Image, Title, Description, Button } from './styles'

type Props = {
  image: string
  title: string
  description: string
  button: string
}

const Food = ({ image, title, description, button }: Props) => (
  <Card>
    <Image src={image} alt={title} />
    <Title>{title}</Title>
    <Description>{description}</Description>
    <Button>{button}</Button>
  </Card>
)

export default Food
