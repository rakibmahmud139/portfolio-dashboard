import { baseApi } from "../api/baseApi";

const blogApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addBlog: builder.mutation({
      query: (data) => ({
        url: "/blogs",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["blog"],
    }),
  }),
});

export const { useAddBlogMutation } = blogApi;
