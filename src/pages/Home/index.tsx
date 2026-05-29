import { useGetRestaurantQuery } from '../../services/api'

import HeaderHome from '../../components/HeaderHome'
import RestaurantsList from '../../components/RestaurantsList'

export type Restaurant = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Cardapio[]
}

export type Cardapio = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

const Home = () => {
  const { data } = useGetRestaurantQuery()

  if (data) {
    return (
      <>
        <HeaderHome />
        <div className="container">
          <RestaurantsList restaurants={data} />
        </div>
      </>
    )
  }

  return <h3>Carregando...</h3>
}

export default Home
