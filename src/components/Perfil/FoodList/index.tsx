import FoodModel from '../models/Food'
import Food from '../Food'
import { List } from './styles'

export type Props = {
  foods: FoodModel[]
}

const FoodsList = ({ foods }: Props) => (
  <List>
    {foods.map((food) => (
      <Food
        key={food.id}
        image={food.image}
        title={food.title}
        description={food.description}
        button={food.button}
      />
    ))}
  </List>
)

export default FoodsList
