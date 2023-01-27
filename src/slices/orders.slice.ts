/* eslint-disable no-param-reassign, no-shadow */
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  cart: {
    items: [
      {
        id: 900,
        name: "Burger",
        price: 4.99,
        quantity: 1,
        image: "https://picsum.photos/200/300",
      },
    ],
    total: 4.99,
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
      const item = state.cart.items.find(i => i.id === payload)
      item.quantity += 1
      state.cart.total += item.price
      return state
    },
    decrement(state, { payload }) {
      const item = state.cart.items.find(item => item.id === payload)
      item.quantity -= 1
      state.cart.total -= item.price
      if (item.quantity === 0) {
        state.cart.items = state.cart.items.filter(i => i.id !== item.id)
      }
      return state
    },
    remove(state, { payload }) {
      const item = state.cart.items.find(item => item.id === payload)
      state.cart.total -= item.price * item.quantity
      state.cart.items = state.cart.items.filter(i => i.id !== item.id)
      return state
    },
    append(state, { payload }) {
      payload.id = payload.itemId
      delete payload.itemId
      const item = state.cart.items.find(item => item.id === payload.id)
      if (item) {
        item.quantity += 1
        state.cart.total += item.price
      } else {
        state.cart.items.push(payload)
        state.cart.total += payload.price
      }
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

export const {
  empty, increment, decrement, remove, append,
} = ordersSlice.actions
export default ordersSlice.reducer
