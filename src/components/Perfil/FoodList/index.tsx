import { Cardapio } from '../../../pages/Perfil'
import Food from '../Food'
import { List } from './styles'

export type Props = {
  foods: Cardapio[]
}

const FoodList = ({ foods }: Props) => {
  return (
    <List>
      {foods.map((food) => (
        <Food
          key={food.id}
          image={food.foto}
          title={food.nome}
          description={food.descricao}
          price={food.preco}
          portion={food.porcao}
        />
      ))}
    </List>
  )
}

export default FoodList
