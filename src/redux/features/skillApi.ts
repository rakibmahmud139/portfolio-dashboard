import { baseApi } from "../api/baseApi";

const skillApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addSkill: builder.mutation({
      query: (data) => ({
        url: "/skills",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["skill"],
    }),
  }),
});

export const { useAddSkillMutation } = skillApi;
