import Header from '../../components/Home/Header'
import FoodList from '../../components/Home/FoodsList'
import { useEffect, useState } from 'react'

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

const Home = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurants(res))
  })

  return (
    <>
      <Header />
      <div className="container">
        <FoodList restaurants={restaurants} />
      </div>
    </>
  )
}

export default Home
