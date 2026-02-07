import { inferAdditionalFields } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react"
// export const authClient = createAuthClient({
//     baseURL: `${process.env.NEXT_PUBLIC_API_URL}`
// })

// export const authClient = createAuthClient({
//   baseURL: typeof window !== "undefined" ? window.location.origin : "",
//   fetchOptions: {
//     credentials: "include",
//   },
// });

// export const authClient = createAuthClient({
//   baseURL: process.env.NEXT_PUBLIC_AUTH_URL!,
//   fetchOptions: {
//     credentials: "include",
//   },
// });

// export const authClient = createAuthClient({
//   // Point this to your FRONTEND URL (the one with the rewrite)
//   // In production, this should be your Vercel URL
//   baseURL: "https://medi-store-server-tau.vercel.app/api/auth",
//   plugins: [
//     inferAdditionalFields({
//       user: { role: { type: "string" } },
//     }),
//   ],
// });

export const authClient = createAuthClient({
  baseURL: "/api/auth", 
  fetchOptions: {
    credentials: "include",
  },
  plugins: [
    inferAdditionalFields({
      user: { role: { type: "string" } },
    }),
  ],
});
