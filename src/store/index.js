// store.js
import { createStore } from 'vuex';
import Vue from 'vue'
import Vuex from 'vuex'

export default createStore({
  state() {
    return {
      cart: {
        items: [],
      },
      isAuthenticated: false,
      token: '',
      isLoading: false,
      count: 100
    }
  },
  mutations: {
    initializeStore(state) {
      if (localStorage.getItem('cart')) {
        state.cart = JSON.parse(localStorage.getItem('cart'))
      } else {
        localStorage.setItem('cart', JSON.stringify(state.cart))
      }
    },
    addToCart(state, item) {
      const exists = state.cart.items.filter(i => i.product.id === item.product.id)
      if (exists.length) {
        exists[0].quantity = parseInt(exists[0].quantity) + parseInt(item.quantity)
      } else {
        state.cart.items.push(item)
      }
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    increment(state) {
      state.count++;
    },
     setIsLoading(state, status) {
      state.isLoading = status
    },
       clearCart(state) {
      state.cart = { items: [] }

      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
  },
  actions: {
    // Define your actions here if needed
  },
  getters: {
    // Define your getters here if needed
  }
});
