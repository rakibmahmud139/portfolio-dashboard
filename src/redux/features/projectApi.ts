import { baseApi } from "../api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addProject: builder.mutation({
      query: () => ({
        url: "/projects",
        method: "POST",
      }),
      invalidatesTags: ["project"],
    }),
  }),
});

export const { useAddProjectMutation } = productApi;
