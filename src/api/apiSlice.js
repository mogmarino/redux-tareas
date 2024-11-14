import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({baseUrl: "https://jsonplaceholder.typicode.com"}),
    endpoints: (builder) => ({
        getTasks: builder.query({
            query: () => '/todos',
            providesTags: ['Tasks'],
            transformResponse: res => res.sort((a,b) => b.id - a.id)
        })
    })
})

export const { useGetTasksQuery } = apiSlice