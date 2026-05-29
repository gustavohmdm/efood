import { List } from './styles'

import { Cardapio } from '../../pages/Perfil'
import Food from '../Food'

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
