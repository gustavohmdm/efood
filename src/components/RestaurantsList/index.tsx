import { List } from './styles'

import { Restaurant } from '../../pages/Home'
import Food from '../Restaurant'

export type Props = {
  restaurants: Restaurant[]
}

const FoodsList = ({ restaurants }: Props) => (
  <List>
    {restaurants.map((restaurant) => (
      <Food
        key={restaurant.id}
        id={restaurant.id}
        category={restaurant.tipo}
        image={restaurant.capa}
        title={restaurant.titulo}
        assessment={restaurant.avaliacao}
        description={restaurant.descricao}
        isFeatured={restaurant.destacado}
      />
    ))}
  </List>
)

export default FoodsList
