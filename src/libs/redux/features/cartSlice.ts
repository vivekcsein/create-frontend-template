import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type cartItem = {
    id: string;
    name: string;
    price: number;
    maxQuantity: number;
    quantity: number;
};

type CartState = {
    currentCartItem: cartItem | null;
    localCartItems: cartItem[];
};

const initialState: CartState = {
    currentCartItem: null,
    localCartItems: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setCartItem: (state, action: PayloadAction<cartItem | null>) => {
            state.currentCartItem = action.payload;
        },
        addToLocalCartItem: (state, action: PayloadAction<cartItem>) => {
            const existing = state.localCartItems.find(i => i.id === action.payload.id);
            if (existing) {
                if (existing.quantity < existing.maxQuantity) {
                    existing.quantity += 1;
                }
            } else {
                state.localCartItems.push({ ...action.payload, quantity: 1 });
            }
        },
        removeLocalCartItem: (state, action: PayloadAction<string>) => {
            state.localCartItems = state.localCartItems.filter(i => i.id !== action.payload);
        },
        increaseLocalCartItemQuantity: (state, action: PayloadAction<string>) => {
            const item = state.localCartItems.find(i => i.id === action.payload);
            if (item && item.quantity < item.maxQuantity) {
                item.quantity += 1;
            }
        },
        decreaseLocalCartItemQuantity: (state, action: PayloadAction<string>) => {
            const item = state.localCartItems.find(i => i.id === action.payload);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            }
        },
        clearLocalCartItems: (state) => {
            state.localCartItems = [];
        },
    },
});

export const {
    setCartItem,
    addToLocalCartItem,
    removeLocalCartItem,
    increaseLocalCartItemQuantity,
    decreaseLocalCartItemQuantity,
    clearLocalCartItems,
} = cartSlice.actions;

export default cartSlice.reducer;