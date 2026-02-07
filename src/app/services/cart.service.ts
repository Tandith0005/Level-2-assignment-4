import React from 'react';
import { authFetch } from '../lib/authFetch';

export const fetchCart = async () => {
    try {
        const res = await authFetch(`${process.env.NEXT_PUBLIC_API_URL}/cart`, {cache: "no-store"});
        const cart = await res.json();
        return cart;
    } catch (error) {
        console.log(error);
    }
};


export const upsertCart = async (id: string) => {
    try {
        const res = await authFetch(`${process.env.NEXT_PUBLIC_API_URL}/cart/${id}`, {method: "PATCH"});
        const cart = await res.json();
        return cart;
    } catch (error) {
        console.log(error);
    }
};
export const minusCart = async (id: string) => {
    try {
        const res = await authFetch(`${process.env.NEXT_PUBLIC_API_URL}/cart/minus/${id}`, {method: "PATCH"});
        const cart = await res.json();
        return cart;
    } catch (error) {
        console.log(error);
    }
};

export const deleteItemsInCart = async (id: string) => {
    try {
        const res = await authFetch(`${process.env.NEXT_PUBLIC_API_URL}/cart/${id}`, {method: "DELETE"});
        const cart = await res.json();
        return cart;
    } catch (error) {
        console.log(error);
    }
};