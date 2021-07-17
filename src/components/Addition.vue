<template>
  <div>
    <!-- 组件访问state中数据的第一种方式：this.$store.state.count，this可以省略 -->
    <!--  -->
    <!-- <h3>当前的count为：{{this.$store.state.count}}</h3> -->
    <h3>{{this.$store.getters.showNum}}</h3>
    <button @click="btnHandler1">+1</button>
    <button @click="btnHandler2">+N</button>
    <button @click="btnHandler3">+1 Async</button>
    <button @click="btnHandler4">+N Async</button>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    btnHandler1 () {
      this.$store.commit('add')
    },
    btnHandler2 () {
      // commit 的作用：调用某个 mutation 函数
      this.$store.commit('addN', 3)
    },
    btnHandler3 () {
      // 这里的dispatch专门用来触发某个 actions 函数
      this.$store.dispatch('addAsync')
    },
    btnHandler4 () {
      // commit 的作用：调用某个 mutation 函数
      this.$store.dispatch('addNAsync', 3)
    }
  }
}
</script>
