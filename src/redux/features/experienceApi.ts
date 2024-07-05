import { baseApi } from "../api/baseApi";

const experienceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addExperience: builder.mutation({
      query: (data) => ({
        url: "/experiences",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["experience"],
    }),
  }),
});

export const { useAddExperienceMutation } = experienceApi;
