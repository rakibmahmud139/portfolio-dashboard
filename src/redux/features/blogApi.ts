import { baseApi } from "../api/baseApi";

const blogApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addBlog: builder.mutation({
      query: () => ({
        url: "/blogs",
        method: "POST",
      }),
      invalidatesTags: ["blog"],
    }),
  }),
});

export const { useAddBlogMutation } = blogApi;
