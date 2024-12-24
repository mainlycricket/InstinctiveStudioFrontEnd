import { apiSlice } from '../api/api.slice';

export const studentApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getStudents: builder.query({
      query: (args) => {
        const params = [];

        if (args?.classId) {
          params.push(`classId=${args.classId}`);
        }

        if (args?.yearId) {
          params.push(`yearId=${args.yearId}`);
        }

        const queryString = params.length > 0 ? `?${params.join('&')}` : '';

        return {
          url: `/students${queryString}`,
          method: 'GET',
        };
      },
    }),
  }),
});

export const { useGetStudentsQuery } = studentApi;
