import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_URL,
  credentials: 'include',
  prepareHeaders: (headers) => {
    headers.set('Content-Type', 'application/json')

    return headers
  }
})

const apiSlice = createApi({
  baseQuery,
  tagTypes: [],
  endpoints: (_builder) => ({})
})

export default apiSlice
