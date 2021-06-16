import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : {
          items: [],
          totalAmount: 0,
      };

const cartReducer = (state, action) => {
    if (action.type === "ADD") {
        const newTotalAmount =
            state.totalAmount + action.item.price * action.item.amount;

        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.item.id
        );
        const existingCartItem = state.items[existingCartItemIndex];
        let updatedItem;
        let updatedItems;
        if (existingCartItem) {
            updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount,
            };

            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            updatedItems = [...state.items, action.item];
        }
        localStorage.setItem(
            "cart",
            JSON.stringify({
                items: updatedItems,
                totalAmount: newTotalAmount,
            })
        );
        return { items: updatedItems, totalAmount: newTotalAmount };
    }
    if (action.type === "REMOVE") {
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.id
        );
        const existingCartItem = state.items[existingCartItemIndex];

        const newTotalAmount = state.totalAmount - existingCartItem.price;
        let updatedItems;
        if (existingCartItem.amount === 1) {
            updatedItems = state.items.filter((item) => item.id !== action.id);
        } else {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount - 1,
            };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }
        localStorage.setItem(
            "cart",
            JSON.stringify({ items: updatedItems, totalAmount: newTotalAmount })
        );
        return { items: updatedItems, totalAmount: newTotalAmount };
    }
    return defaultCartState;
};

function CartProvider({ children }) {
    const [cartState, dispatchCartAction] = useReducer(
        cartReducer,
        defaultCartState
    );

    const addItemToCartHandler = (item) => {
        dispatchCartAction({ type: "ADD", item });
    };
    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({ type: "REMOVE", id });
    };
    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    };
    return (
        <CartContext.Provider value={cartContext}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;