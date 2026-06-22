import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import InputMask from 'react-input-mask'

import { RootReducer } from '../../store'
import { close, clear, remove } from '../../store/reducers/cart'
import { usePurchaseMutation } from '../../services/api'

import { parseToBrl } from '../../utils'

import * as S from './styles'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const [purchase, { data, isSuccess, isLoading, reset }] =
    usePurchaseMutation()
  const [isDelivery, setIsDelivery] = useState(false)
  const [isPayment, setIsPayment] = useState(false)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const clearCart = () => {
    dispatch(clear())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return acumulador + (valorAtual.preco ? valorAtual.preco : 0)
    }, 0)
  }

  const form = useFormik({
    initialValues: {
      fullName: '',
      address: '',
      city: '',
      cep: '',
      number: '',
      complement: '',
      cardName: '',
      cardNumber: '',
      cvv: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      address: Yup.string()
        .min(5, 'O endereço precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      city: Yup.string()
        .min(5, 'O nome da cidade precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      cep: Yup.string()
        .matches(/^\d{5}-\d{3}$/, 'CEP inválido')
        .required('O campo é obrigatório'),
      number: Yup.string()
        .min(1, 'O número do endereço precisa ter pelo menos 1 caracter')
        .required('O campo é obrigatório'),
      complement: Yup.string(),
      cardName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      cardNumber: Yup.string()
        .matches(/^\d{4} \d{4} \d{4} \d{4}$/, 'Número do cartão inválido')
        .required('O campo é obrigatório'),
      cvv: Yup.string()
        .matches(/^\d{3}$/, 'O cvv precisa ter 3 caracteres')
        .required('O campo é obrigatório'),
      expiresMonth: Yup.string()
        .matches(/^(0[1-9]|1[0-2])$/, 'Mês inválido')
        .required('O campo é obrigatório'),
      expiresYear: Yup.string()
        .matches(/^\d{4}$/, 'Ano deve ter exatamente 4 dígitos')
        .required('O campo é obrigatório')
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.fullName,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.cep,
            number: Number(values.number),
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: Number(values.cvv),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        },
        products: items.map((item) => ({
          id: item.id,
          price: item.preco as number
        }))
      })
    }
  })

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  return (
    <form onSubmit={form.handleSubmit}>
      {isSuccess && data ? (
        <S.CartContainer className={isOpen ? 'is-open' : ''}>
          <S.Overlay onClick={closeCart} />
          <S.Sidebar>
            <S.Success>Pedido realizado - {data.orderId}</S.Success>
            <S.Congratulations>
              <span>
                Estamos felizes em informar que seu pedido já está em processo
                de preparação e, em breve, será entregue no endereço fornecido.
              </span>
              <br />
              <span>
                Gostaríamos de ressaltar que nossos entregadores não estão
                autorizados a realizar cobranças extras.
              </span>
              <br />
              <span>
                Lembre-se da importância de higienizar as mãos após o
                recebimento do pedido, garantindo assim sua segurança e
                bem-estar durante a refeição.
              </span>
              <br />
              <span>
                Esperamos que desfrute de uma deliciosa e agradável experiência
                gastronômica. Bom apetite!
              </span>
            </S.Congratulations>
            <S.Button
              onClick={() => {
                form.resetForm()
                setIsDelivery(false)
                setIsPayment(false)
                clearCart()
                closeCart()
                reset()
              }}
              title="Clique aqui para continuar com o pagamento"
              type="button"
            >
              Concluir
            </S.Button>
          </S.Sidebar>
        </S.CartContainer>
      ) : isDelivery && !isPayment ? (
        <S.CartContainer className={isOpen ? 'is-open' : ''}>
          <S.Overlay onClick={closeCart} />
          <S.Sidebar>
            <S.Delivery>Entrega</S.Delivery>
            <S.InputGroup>
              <label htmlFor="fullName">Quem irá receber</label>
              <input
                className={checkInputHasError('fullName') ? 'error' : ''}
                id="fullName"
                type="text"
                name="fullName"
                value={form.values.fullName}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
            </S.InputGroup>
            <S.InputGroup className="container">
              <label htmlFor="address">Endereço</label>
              <input
                className={checkInputHasError('address') ? 'error' : ''}
                id="address"
                type="text"
                name="address"
                value={form.values.address}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
            </S.InputGroup>
            <S.InputGroup className="container">
              <label htmlFor="city">Cidade</label>
              <input
                className={checkInputHasError('city') ? 'error' : ''}
                id="city"
                type="text"
                name="city"
                value={form.values.city}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
            </S.InputGroup>
            <S.ContainerInputGroup>
              <S.InputGroup>
                <label htmlFor="cep">CEP</label>
                <InputMask
                  className={`average ${
                    checkInputHasError('cep') ? 'error' : ''
                  }`}
                  id="cep"
                  type="text"
                  name="cep"
                  value={form.values.cep}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  mask="99999-999"
                />
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="number">Número</label>
                <input
                  className={`average2 ${
                    checkInputHasError('number') ? 'error' : ''
                  }`}
                  id="number"
                  type="text"
                  name="number"
                  value={form.values.number}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
              </S.InputGroup>
            </S.ContainerInputGroup>
            <S.InputGroup>
              <label htmlFor="complement">Complemento (opcional)</label>
              <input
                id="complement"
                type="text"
                name="complement"
                value={form.values.complement}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
            </S.InputGroup>
            <S.ContainerButton>
              <S.Button
                onClick={async () => {
                  const errors = await form.validateForm()

                  const hasErrors =
                    errors.fullName ||
                    errors.address ||
                    errors.city ||
                    errors.cep ||
                    errors.number

                  if (!hasErrors) {
                    setIsDelivery(false)
                    setIsPayment(true)
                  }
                }}
                type="button"
                title="Clique aqui para continuar com o pagamento"
              >
                Continuar com o pagamento
              </S.Button>
              <S.Button
                onClick={() => setIsDelivery(false)}
                title="Clique aqui para voltar ao carrinho"
                type="button"
              >
                Voltar ao carrinho
              </S.Button>
            </S.ContainerButton>
          </S.Sidebar>
        </S.CartContainer>
      ) : isPayment && !isDelivery ? (
        <S.CartContainer className={isOpen ? 'is-open' : ''}>
          <S.Overlay onClick={closeCart} />
          <S.Sidebar>
            <S.TotalPrice>
              Pagamento - Valor a pagar {parseToBrl(getTotalPrice())}
            </S.TotalPrice>
            <S.InputGroup>
              <label htmlFor="cardName">Nome no cartão</label>
              <input
                id="cardName"
                type="text"
                name="cardName"
                value={form.values.cardName}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('cardName') ? 'error' : ''}
              />
            </S.InputGroup>
            <S.ContainerInputGroup>
              <S.InputGroup className="container">
                <label htmlFor="cardNumber">Número no cartão</label>
                <InputMask
                  className={`big ${
                    checkInputHasError('cardNumber') ? 'error' : ''
                  }`}
                  id="cardNumber"
                  type="text"
                  name="cardNumber"
                  value={form.values.cardNumber}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  mask="9999 9999 9999 9999"
                />
              </S.InputGroup>
              <S.InputGroup className="container">
                <label htmlFor="cvv">CVV</label>
                <InputMask
                  className={`small ${
                    checkInputHasError('cvv') ? 'error' : ''
                  }`}
                  id="cvv"
                  type="text"
                  name="cvv"
                  value={form.values.cvv}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  mask="999"
                />
              </S.InputGroup>
            </S.ContainerInputGroup>
            <S.ContainerInputGroup>
              <S.InputGroup className="container">
                <label htmlFor="expiresMonth">Mês de vencimento</label>
                <InputMask
                  className={`average ${
                    checkInputHasError('expiresMonth') ? 'error' : ''
                  }`}
                  id="expiresMonth"
                  type="text"
                  name="expiresMonth"
                  value={form.values.expiresMonth}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  mask="99"
                />
              </S.InputGroup>
              <S.InputGroup className="container">
                <label htmlFor="expiresYear">Ano de vencimento</label>
                <InputMask
                  className={`average ${
                    checkInputHasError('expiresYear') ? 'error' : ''
                  }`}
                  id="expiresYear"
                  type="text"
                  name="expiresYear"
                  value={form.values.expiresYear}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  mask="9999"
                />
              </S.InputGroup>
            </S.ContainerInputGroup>
            <S.ContainerButton>
              <S.Button
                disabled={isLoading}
                title="Clique aqui para finalizar o pagamento"
                type="submit"
              >
                Finalizar pagamento
              </S.Button>
              <S.Button
                onClick={() => {
                  setIsPayment(false)
                  setIsDelivery(true)
                }}
                title="Clique aqui para voltar ao carrinho"
                type="button"
              >
                Voltar para a edição de endereço
              </S.Button>
            </S.ContainerButton>
          </S.Sidebar>
        </S.CartContainer>
      ) : (
        <S.CartContainer
          className={isOpen && items.length >= 1 ? 'is-open' : ''}
        >
          <S.Overlay onClick={closeCart} />
          <S.Sidebar>
            <ul>
              {items.map((item) => (
                <S.CartItem key={item.id}>
                  <div>
                    <img src={item.foto} alt={item.nome} />
                    <div>
                      <h3>{item.nome}</h3>
                      <span>{parseToBrl(item.preco)}</span>
                    </div>
                    <button onClick={() => removeItem(item.id)} type="button" />
                  </div>
                </S.CartItem>
              ))}
            </ul>
            <S.Prices>
              Valor total <span>{parseToBrl(getTotalPrice())} </span>
            </S.Prices>
            <S.Button
              onClick={() => setIsDelivery(true)}
              title="Clique aqui para continuar com a compra"
              type="button"
            >
              Continuar com a entrega
            </S.Button>
          </S.Sidebar>
        </S.CartContainer>
      )}
    </form>
  )
}

export default Cart
