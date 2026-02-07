import { authFetch } from "../lib/authFetch";

export const fetchUserOrders = async () => {
    const res = await authFetch(`${process.env.NEXT_PUBLIC_API_URL}/orders`, {cache: "no-store"});
    return res.json();
};

export const fetchSellerOrders = async () => {
    const res = await authFetch(`${process.env.NEXT_PUBLIC_API_URL}/orders/seller`, {cache: "no-store"});
    return res.json();
};