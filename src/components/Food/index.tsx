import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'

import {
  Card,
  Image,
  Title,
  Description,
  Button,
  Modal,
  ModalContent
} from './styles'

import { Cardapio } from '../../pages/Perfil'

import closeImg from '../../assets/images/close.png'

type Props = {
  food: Cardapio
}

type ModalState = {
  isVisible: boolean
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const Food = ({ food }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false
  })

  const closeModal = () => {
    setModal({
      isVisible: false
    })
  }

  const getDescricao = (descricao: string) => {
    if (descricao.length > 150) {
      return descricao.slice(0, 147) + '...'
    }
    return descricao
  }

  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(food))
    dispatch(open())
  }

  return (
    <>
      <Card>
        <Image src={food.foto} alt={food.nome} />
        <Title>{food.nome}</Title>
        <Description>{getDescricao(food.descricao)}</Description>
        <Button onClick={() => setModal({ isVisible: true })}>
          Mais detalhes
        </Button>
      </Card>
      <Modal className={modal.isVisible ? 'visible' : ''}>
        <ModalContent className="container">
          <img src={food.foto} alt={food.nome} />
          <div>
            <h3>{food.nome}</h3>
            <img
              onClick={() => setModal({ isVisible: false })}
              src={closeImg}
              alt="Close Icon"
            />
            <p>
              {food.descricao}
              <br />
              <span>Serve: {food.porcao} </span>
            </p>
            <button onClick={addToCart}>
              Adicionar ao carrinho - {formataPreco(food.preco)}
            </button>
          </div>
        </ModalContent>
        <div onClick={closeModal} className="overlay"></div>
      </Modal>
    </>
  )
}

export default Food
