import { createAuthClient } from "better-auth/react"
// export const authClient = createAuthClient({
//     baseURL: `${process.env.NEXT_PUBLIC_API_URL}`
// })

export const authClient = createAuthClient({
  baseURL: typeof window !== "undefined" ? window.location.origin : "",
  fetchOptions: {
    credentials: "include",
  },
});
