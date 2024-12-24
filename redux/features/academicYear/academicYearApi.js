import { apiSlice } from '../api/api.slice';

export const academicYearApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAcademicYears: builder.query({
      query: () => ({
        url: '/academicYears',
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetAcademicYearsQuery } = academicYearApi;
