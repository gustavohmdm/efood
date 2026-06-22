import { Cardapio } from '../../types'
import Food from '../Food'
import { List } from './styles'

export type Props = {
  foods: Cardapio[]
}

const FoodList = ({ foods }: Props) => {
  return (
    <List>
      {foods.map((food) => (
        <Food key={food.id} food={food} />
      ))}
    </List>
  )
}

export default FoodList
