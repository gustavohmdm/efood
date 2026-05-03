import Header from '../../components/Perfil/Header'
import FoodList from '../../components/Perfil/FoodList'
import Food from '../../components/Perfil/models/Food'
import Pizza from '../../assets/images/imagem3.png'

const foods: Food[] = [
  {
    id: 1,
    image: Pizza,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    button: 'Adicionar ao carrinho'
  },
  {
    id: 2,
    image: Pizza,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    button: 'Adicionar ao carrinho'
  },
  {
    id: 3,
    image: Pizza,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    button: 'Adicionar ao carrinho'
  },
  {
    id: 4,
    image: Pizza,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    button: 'Adicionar ao carrinho'
  },
  {
    id: 5,
    image: Pizza,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    button: 'Adicionar ao carrinho'
  },
  {
    id: 6,
    image: Pizza,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    button: 'Adicionar ao carrinho'
  }
]

const Perfil = () => (
  <>
    <Header />
    <div className="container">
      <FoodList foods={foods} />
    </div>
  </>
)

export default Perfil
