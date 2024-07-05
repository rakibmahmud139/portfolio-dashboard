import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { authKey } from "../../types";
import { getFromLocalStorage } from "../../utils/localStorage";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/",
    prepareHeaders: (headers) => {
      const token = getFromLocalStorage(authKey);

      if (token) {
        headers.set("authorization", `${token}`);
      } else {
        window.location.href = "/login";
      }

      return headers;
    },
  }),
  tagTypes: ["project", "skill", "blog", "experience"],
  endpoints: () => ({}),
});
