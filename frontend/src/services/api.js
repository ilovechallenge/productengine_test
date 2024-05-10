import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const LOGIN_API_REDUCER = "login";
const USER_INFO_API_REDUCER = "user_info";

const BASE_URL = "127.0.0.1:9000"

export const loginApi = createApi({
    reducerPath: LOGIN_API_REDUCER,
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL
    }),
    tagTypes: [LOGIN_API_REDUCER],
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                method: "POST",
                formData: true,
                url: "login url",
                body: data
            })
        })
    })
})

export const userInfoApi = createApi({
    reducerPath: USER_INFO_API_REDUCER,
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL
    }),
    tagTypes: [USER_INFO_API_REDUCER],
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => "/user_profile",
        })
    })
})

export const { useLoginMutation } = loginApi;
export const { useGetUsersQuery } = userInfoApi;