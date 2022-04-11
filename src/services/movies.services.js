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
      query: (page) => ({
        url: `/movie/popular?page=${page}`,
      }),
    }),
    searchMovieByQuery: builder.query({
      query: ({ searchedTherm, page }) => ({
        url: `/search/movie?query=${searchedTherm}&page=${page}`,
      }),
    }),
  }),
});

export const { useGetPopularMoviesQuery, useSearchMovieByQueryQuery } =
  moviesApi;
