export const userApi = {
  getMe: async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/users/me`,
      {
        credentials: "include",
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch user profile");
    }

    return res.json();
  },

  updateMe: async (payload: {
    name?: string;
    phone?: string;
    address?: string;
  }) => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/users/me`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(payload),
      }
    );

    if (!res.ok) {
      throw new Error("Failed to update profile");
    }

    return res.json();
  },
};
