import Header from '../../components/Perfil/Header'
import FoodList from '../../components/Perfil/FoodList'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export interface Cardapio {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

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

const Perfil = () => {
  const { id } = useParams()
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null)

  useEffect(() => {
    fetch(`https://api-ebac.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurant(res))
  }, [id])

  return (
    <>
      {restaurant && (
        <Header
          capa={restaurant.capa}
          categoria={restaurant.tipo}
          titulo={restaurant.titulo}
        />
      )}
      <div className="container">
        {restaurant && <FoodList foods={restaurant.cardapio} />}
      </div>
    </>
  )
}

export default Perfil
