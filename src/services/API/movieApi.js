import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { apiKey, baseUrl } from './api'

export const movieApi = createApi({
    reducerPath: "movieApi",
    baseQuery: fetchBaseQuery({
        baseUrl: baseUrl,
    }),
    endpoints: (builder) => ({
        getPopularMovies: builder.query({
            query: () => `movie/popular?api_key=${apiKey}`,
        }),
        search: builder.query({
            query: (term) => `search/movie?query=${term}&api_key=${apiKey}`,
        }),
        getMovieById: builder.query({
            query: (id) => `movie/${id}?api_key=${apiKey}`,
        }),
    }),
});

export const {
    useGetPopularMoviesQuery,
    useSearchQuery,
    useGetMovieByIdQuery,
} = movieApi;