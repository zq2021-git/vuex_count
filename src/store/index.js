import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  // 只有mutations中定义的函数，才有权利修改 state 中的数据
  mutations: {
    add (state) {
      state.count++
    },
    addN (state, num) {
      state.count += num
    },
    sub (state) {
      state.count--
    },
    subN (state, num) {
      state.count -= num
    }
  },
  actions: {
    addAsync (context) {
      setTimeout(() => {
        // context.state.count++ 错了！！！
        // 在actions中，不能直接修改state中的数据；
        // 必须通过context.commit()触发某个 mutation 才行
        context.commit('add')
      }, 1000)
    },
    addNAsync (context, num) {
      setTimeout(() => {
        // context.state.count += num
        context.commit('addN', num)
      }, 1000)
    },
    subAsync (context) {
      setTimeout(() => {
        // context.state.count++ 错了！！！
        // 在actions中，不能直接修改state中的数据；
        // 必须通过context.commit()触发某个 mutation 才行
        context.commit('sub')
      }, 1000)
    },
    subNAsync (context, num) {
      setTimeout(() => {
        // context.state.count += num
        context.commit('subN', num)
      }, 1000)
    }
  },
  getters: {
    showNum (state) {
      return '当前的数量是【' + state.count + '】'
    }
  },
  modules: {
  }
})
