import { useParams } from 'react-router-dom'

import { useGetRestaurantPerfilQuery } from '../../services/api'

import HeaderPerfil from '../../components/HeaderPerfil'
import FoodsList from '../../components/FoodsList'

const Perfil = () => {
  const { id } = useParams()

  const { data } = useGetRestaurantPerfilQuery(id ?? '')

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
