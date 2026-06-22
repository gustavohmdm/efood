import { useGetRestaurantQuery } from '../../services/api'

import HeaderHome from '../../components/HeaderHome'
import RestaurantsList from '../../components/RestaurantsList'

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
