import {
  Card,
  Image,
  Title,
  Description,
  Button,
  Modal,
  ModalContent
} from './styles'

import closeImg from '../../../assets/images/close.png'
import { useState } from 'react'

type Props = {
  image: string
  title: string
  description: string
  portion: string
  price: number
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

const Food = ({ image, title, description, price, portion }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false
  })

  const closeModal = () => {
    setModal({
      isVisible: false
    })
  }

  const getDescricao = (descricao: string) => {
    if (descricao.length > 152) {
      return descricao.slice(0, 149) + '...'
    }
    return descricao
  }

  return (
    <>
      <Card>
        <Image src={image} alt={title} />
        <Title>{title}</Title>
        <Description>{getDescricao(description)}</Description>
        <Button
          onClick={() => {
            setModal({
              isVisible: true
            })
          }}
        >
          Mais detalhes
        </Button>
      </Card>
      <Modal className={modal.isVisible ? 'visible' : ''}>
        <ModalContent className="container">
          <img src={image} alt={title} />
          <div>
            <h3>{title}</h3>
            <img
              onClick={() => {
                setModal({
                  isVisible: false
                })
              }}
              src={closeImg}
              alt="Close Icon"
            />
            <p>
              {description}
              <br />
              <span>Serve: {portion} </span>
            </p>
            <button>Adicionar ao carrinho - {formataPreco(price)}</button>
          </div>
        </ModalContent>
        <div
          onClick={() => {
            closeModal()
          }}
          className="overlay"
        ></div>
      </Modal>
    </>
  )
}

export default Food
