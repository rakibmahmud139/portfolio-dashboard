import { baseApi } from "../api/baseApi";

const experienceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addExperience: builder.mutation({
      query: () => ({
        url: "/experiences",
        method: "POST",
      }),
      invalidatesTags: ["experience"],
    }),
  }),
});

export const { useAddExperienceMutation } = experienceApi;
