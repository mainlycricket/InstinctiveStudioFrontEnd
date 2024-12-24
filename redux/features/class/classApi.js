import { apiSlice } from '../api/api.slice';

export const classApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getClasses: builder.query({
      query: () => ({
        url: '/classes',
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetClassesQuery } = classApi;
