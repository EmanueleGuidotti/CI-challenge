import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../settings/axiosInstance";

export const moviesApi = createApi({
  reducerPath: "movies",
  baseQuery: axiosBaseQuery,
  endpoints: (builder) => ({
    getPopularMovies: builder.query({
      query: () => ({
        url: `/movie/popular`,
      }),
    }),
    getMovieById: builder.query({
      query: (id) => ({
        url: `/movie/${id}`,
      }),
    }),
  }),
});

export const { useGetPopularMoviesQuery, useGetMovieByIdQuery } = moviesApi;
