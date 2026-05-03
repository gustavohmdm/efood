import FoodModel from '../models/Food'
import Food from '../Food'
import { List } from './styles'

export type Props = {
  foods: FoodModel[]
}

const FoodsList = ({ foods }: Props) => (
  <List>
    {foods.map((food, index) => (
      <Food
        key={food.id}
        category={food.category}
        image={food.image}
        title={food.title}
        assessment={food.assessment}
        description={food.description}
        button={food.button}
        isFirst={index === 0}
      />
    ))}
  </List>
)

export default FoodsList
