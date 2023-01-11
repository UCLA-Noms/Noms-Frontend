/* eslint-disable no-param-reassign, no-shadow */
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  cart: {
    items: [
      {
        id: 1,
        name: "Burger",
        price: 5,
        quantity: 1,
        image: "https://picsum.photos/200/300",
      },
    ],
    total: 5,
  },
}

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    empty(state) {
      state.cart.items = []
      state.cart.total = 0
      return state
    },
    increment(state, { payload }) {
      const item = state.cart.items.find((i) => i.id === payload)
      item.quantity += 1
      state.cart.total += item.price
      return state
    },
    decrement(state, { payload }) {
      const item = state.cart.items.find((item) => item.id === payload)
      item.quantity -= 1
      state.cart.total -= item.price
      if (item.quantity === 0) {
        state.cart.items = state.cart.items.filter((i) => i.id !== item.id)
      }
      return state
    },
    remove(state, { payload }) {
      const item = state.cart.items.find((item) => item.id === payload)
      state.cart.total -= item.price * item.quantity
      state.cart.items = state.cart.items.filter((i) => i.id !== item.id)
      return state
    },
    default(state) {
      // Update total
      state.cart.total = state.cart.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0,
      )
      return state
    },
  },
})

export const { action } = ordersSlice

export const { empty, increment, decrement, remove } = ordersSlice.actions
export default ordersSlice.reducer
