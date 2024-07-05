import { baseApi } from "../api/baseApi";

const skillApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addSkill: builder.mutation({
      query: () => ({
        url: "/skills",
        method: "POST",
      }),
      invalidatesTags: ["skill"],
    }),
  }),
});

export const { useAddSkillMutation } = skillApi;
