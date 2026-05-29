import { Provider } from 'react-redux'
import { GlobalCss } from './styles'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { store } from './store'

import Home from './pages/Home'
import Perfil from './pages/Perfil'
import Footer from './components/Footer'
import Cart from './components/Cart'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/perfil/:id',
    element: <Perfil />
  }
])

function App() {
  return (
    <Provider store={store}>
      <GlobalCss />
      <RouterProvider router={rotas} />
      <Footer />
      <Cart />
    </Provider>
  )
}
export default App
