import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { add, open } from '../../store/reducers/cart'

import { parseToBrl } from '../../utils'

import closeImg from '../../assets/images/close.png'

import { Cardapio } from '../../types'

import * as S from './styles'

type Props = {
  food: Cardapio
}

type ModalState = {
  isVisible: boolean
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
    setModal({ isVisible: false })
  }

  return (
    <>
      <S.Card>
        <S.Image src={food.foto} alt={food.nome} />
        <S.Title>{food.nome}</S.Title>
        <S.Description>{getDescricao(food.descricao)}</S.Description>
        <S.Button onClick={() => setModal({ isVisible: true })}>
          Mais detalhes
        </S.Button>
      </S.Card>
      <S.Modal className={modal.isVisible ? 'visible' : ''}>
        <S.ModalContent className="container">
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
              Adicionar ao carrinho - {parseToBrl(food.preco)}
            </button>
          </div>
        </S.ModalContent>
        <div onClick={closeModal} className="overlay"></div>
      </S.Modal>
    </>
  )
}

export default Food
