import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import {getCartGoods, getChat} from '@/api/load-data.js'
import {localUser} from '@/util/local.js'
const store = new Vuex.Store({
  state: {
    activeMenu: 0,
    buyer: {
      id: '',
      userName: '',
      auth: '',
    },
    business: {
      id: '',
      userName: '',
      auth: ''
    },
    cartNumber: 0,
    messageNumber: 0,
    goosShow: [],
    goodsId: []
  },
  mutations: {
    setActiveMenu (state, val) {
      state.activeMenu = val
    },
    setBuyer (state, val) {
      state.buyer = val
    },
    setBussiness (state, val) {
      state.business = val
    },
    setCartNumber (state, val) {
      state.cartNumber = val
    },
    setMessageNumber (state, val) {
      state.messageNumber = val
    },
    setGoodsShow (state, val) {
      state.goosShow = val
    },
    setgoodsId (state, val) {
      state.goodsId = val
    }
  },
  actions: {
    async getCartNumber ({commit}) {
      let da = {
        goodsid: '',
        username: localUser().username
      }
      let res = await getCartGoods(da)
      if (res.success) {
        commit('setCartNumber', res.data.length)
      }
    },
    async getMessageNumber ({commit}) {
      let da = {
        username: localUser().username
      }
      let res = await getChat(da)
      if (res.success) {
        commit('setMessageNumber', res.data.length)
      }
    }
  }
})

export default store
