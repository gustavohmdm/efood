import HeaderPerfil from '../../components/HeaderPerfil'
import FoodsList from '../../components/FoodsList'
import { useGetRestaurantPerfilQuery } from '../../services/api'
import { useParams } from 'react-router-dom'

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

const Perfil = () => {
  const { id } = useParams()

  const { data } = useGetRestaurantPerfilQuery(id!)

  if (data) {
    return (
      <>
        <HeaderPerfil
          capa={data.capa}
          categoria={data.tipo}
          titulo={data.titulo}
        />
        <div className="container">
          <FoodsList foods={data.cardapio} />
        </div>
      </>
    )
  }

  return <h3>Carregando...</h3>
}

export default Perfil
