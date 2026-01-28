import { cookies } from "next/headers";
import { toast } from "react-toastify";

export const userService = {
  getSession: async function () {
    try {
      const cookieStore = await cookies();
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_AUTH_URL}/get-session`,
        {
          headers: {
            cookie: cookieStore.toString(),
          },
          cache: "no-store",
        },
      );
      const session = await res.json();

    if (!session) {
        toast.error("Session not found, Please Login Again");
      return {data: null, error: {message: "Session not found"}};
    }

    return {data: session, error: null};

    } catch (error) {
        console.log(error)
      return {data: null, error: error}
    }
  },

  logout: async function () {
    try {
      const cookieStore = await cookies();
      await fetch(`${process.env.NEXT_PUBLIC_AUTH_URL}/logout`, {
        method: "POST",
        headers: {
          cookie: cookieStore.toString(),
        },
        cache: "no-store",
        credentials: "include"
      });
    } catch (error) {
      console.log(error);
    }
  },
};
