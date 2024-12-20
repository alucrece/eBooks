import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// define a service user a base URL

const appApi = createApi({
    reducerPath: "appApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8080",
    }),

    endpoints: (builder) => ({
        // creating the user
        signupUser: builder.mutation({
            query: (user) => ({
                url: "/users",
                method: "POST",
                body: user,
            }),
        }),

        // login
        loginUser: builder.mutation({
            query: (user) => ({
                url: "/users/login",
                method: "POST",
                body: user,
            }),
        }),

        // logout

        logoutUser: builder.mutation({
            query: (payload) => ({
                url: "/logout",
                method: "DELETE",
                body: payload,
            }),
        }),

        createRoom: builder.mutation( {
            query: (title) => ({
                url: "/rooms",
                method: "POST",
                body: title
            })
        }),
    }),
});

export const { useSignupUserMutation, useLoginUserMutation, useLogoutUserMutation, useCreateRoomMutation, useDeleteRoomMutation, useRenameRoomMutation } = appApi;

export default appApi;
