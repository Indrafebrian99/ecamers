import { PayLoadAction, createSlice } from "@reduxjs/toolkit";

interface IProduct {
    id: string;
    title: string;
    img: string;
    price: number;
}

conts initialState: Array<IProduct> = [];

export const cartslice = createsSlice({
    name: :cartaSlice = createSlice
})