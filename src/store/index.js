import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [
      {
        id: 1,
        name: 'Билеты до Боготы',
        description: 'Бизнес-класс до столицы Колумбии',
        price: 70000,
        quantity: 2,
        image: 'product-1',
        chosen: true,
      },
      {
        id: 2,
        name: 'Билеты на острова',
        description: 'Прямым рейсом в +28',
        price: 15000,
        quantity: 2,
        image: 'product-2',
        chosen: true,
      },
      {
        id: 3,
        name: 'Бронь отеля',
        description: '10 ночей на побережье',
        price: 60000,
        quantity: 1,
        image: 'product-3',
        chosen: true,
      },
    ],
    customer: {
      name: null,
      phone: null,
      email: null,
      address: null,
    },
  },
  mutations: {
    TOOGLE_CHOOSING(state, products) {
      state.products = products;
    },
    SET_QUANTITY(state, product) {

    },
    SET_PRODUCTS(state, products) {
      state.products = products;
    },
    SET_CUSTOMER_INFO(state, customer) {
      state.customer = customer;
    },
  },
  actions: {
    toogleChoosing({ commit, state }, products) {
      commit('SET_PRODUCTS', products);
    },
    setQuantity({ commit, state }, product) {
      commit('SET_QUANTITY', product);
    },
    setCustomerInfo({ commit, state }, customer) {
      commit('SET_CUSTOMER_INFO', customer);
    },
    clearProducts({ commit, state }) {
      commit('SET_PRODUCTS', []);
    },
    clearUserInfo({ commit, state }) {
      const defaultCustomer = {
        name: null,
        phone: null,
        email: null,
        address: null,
      }
      commit('SET_CUSTOMER_INFO', defaultCustomer);
    },
  }
});
