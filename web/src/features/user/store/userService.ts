import apiSlice from '@/app/api/apiSlice'

export const userService = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createUserContact: builder.mutation<ApiResponse<UserContact>, UserContact>({
      query: (data) => ({
        url: '/user-contacts',
        method: 'POST',
        body: data
      })
    })
  })
})

export const { useCreateUserContactMutation } = userService
