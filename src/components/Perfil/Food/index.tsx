import { useState } from 'react'
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

type Props = {
  image: string
  title: string
  description: string
  button: string
}

type ModalState = {
  isVisible: boolean
}

const Food = ({ image, title, description, button }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false
  })

  const closeModal = () => {
    setModal({
      isVisible: false
    })
  }

  return (
    <>
      <Card>
        <Image src={image} alt={title} />
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Button
          onClick={() => {
            setModal({
              isVisible: true
            })
          }}
        >
          {button}
        </Button>
      </Card>
      <Modal className={modal.isVisible ? 'visivel' : ''}>
        <ModalContent className="container">
          <img src={image} alt={title} />
          <div>
            <h3>Pizza Marguerita</h3>
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
              A pizza Margherita é uma pizza clássica da culinária italiana,
              reconhecida por sua simplicidade e sabor inigualável. Ela é feita
              com uma base de massa fina e crocante, coberta com molho de tomate
              fresco, queijo mussarela de alta qualidade, manjericão fresco e
              azeite de oliva extra-virgem. A combinação de sabores é perfeita,
              com o molho de tomate suculento e ligeiramente ácido, o queijo
              derretido e cremoso e as folhas de manjericão frescas, que
              adicionam um toque de sabor herbáceo. É uma pizza simples, mas
              deliciosa, que agrada a todos os paladares e é uma ótima opção
              para qualquer ocasião. <br />
              <span>Serve: de 2 a 3 pessoas</span>
            </p>
            <button>Adicionar ao carrinho - R$60,90</button>
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
