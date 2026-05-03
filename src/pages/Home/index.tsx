import Food from '../../components/Home/models/Food'
import Sushi from '../../assets/images/imagem.png'
import Trattoria from '../../assets/images/image1.png'
import Nota from '../../assets/images/nota.png'
import Nota2 from '../../assets/images/nota1.png'
import FoodList from '../../components/Home/FoodsList'
import Header from '../../components/Home/Header'

const foods: Food[] = [
  {
    id: 1,
    category: 'Japonesa',
    image: Sushi,
    title: 'Hioki Sushi',
    assessment: Nota,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    button: 'Saiba mais'
  },
  {
    id: 2,
    category: 'Italiana',
    image: Trattoria,
    title: 'La Dolce Vita Trattoria',
    assessment: Nota2,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    button: 'Saiba mais'
  },
  {
    id: 3,
    category: 'Italiana',
    image: Trattoria,
    title: 'La Dolce Vita Trattoria',
    assessment: Nota2,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    button: 'Saiba mais'
  },
  {
    id: 4,
    category: 'Italiana',
    image: Trattoria,
    title: 'La Dolce Vita Trattoria',
    assessment: Nota2,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    button: 'Saiba mais'
  },
  {
    id: 5,
    category: 'Italiana',
    image: Trattoria,
    title: 'La Dolce Vita Trattoria',
    assessment: Nota2,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    button: 'Saiba mais'
  },
  {
    id: 6,
    category: 'Italiana',
    image: Trattoria,
    title: 'La Dolce Vita Trattoria',
    assessment: Nota2,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    button: 'Saiba mais'
  }
]

const Home = () => (
  <>
    <Header />
    <div className="container">
      <FoodList foods={foods} />
    </div>
  </>
)

export default Home
