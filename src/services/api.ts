import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Restaurant } from '../pages/Home'
import { Cardapio } from '../pages/Perfil'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api-ebac.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurant: builder.query<Restaurant[], void>({
      query: () => 'restaurantes'
    }),
    getRestaurantPerfil: builder.query<Restaurant, string>({
      query: (id) => `restaurantes/${id}`
    }),
    getCardapio: builder.query<Cardapio, string>({
      query: () => 'restaurantes'
    })
  })
})

export const {
  useGetRestaurantQuery,
  useGetRestaurantPerfilQuery,
  useGetCardapioQuery
} = api

export default api
