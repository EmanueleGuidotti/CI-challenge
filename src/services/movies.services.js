import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../settings/axiosInstance";

/**
 * Movies Api
 * @type {Api<BaseQueryFn, {getPopularMovies: *, getMovieById: *}, string, never, typeof coreModuleName> | Api<BaseQueryFn, {getPopularMovies: *, getMovieById: *}, string, never, any>}
 */
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
