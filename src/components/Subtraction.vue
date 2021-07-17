<template>
  <div>
    <!-- 组件访问state中数据的第二种方式：import { mapState } from 'vuex'，
    computed: {
      ...mapState(['count'])
    }-->
    <!-- <h3>当前的count为：{{count}}</h3> -->
    <h3>{{showNum}}</h3>
    <button @click="btnHandler1">-1</button>
    <button @click="btnHandler2">-N</button>
    <button @click="subAsync">-1 Async</button>
    <button @click="subNAsync(3)">-N Async</button>
  </div>
</template>

<script>
// 从vuex中按需导入 mapState
import { mapMutations, mapState, mapActions, mapGetters } from 'vuex'
export default {
  data () {
    return {}
  },
  computed: {
    // 展开运算符，将全局的数据映射为当前组件的计算属性
    ...mapState(['count']),
    ...mapGetters(['showNum'])
  },
  methods: {
    // 调用的函数内放入一个数组
    ...mapMutations(['sub', 'subN']),
    ...mapActions(['subAsync', 'subNAsync']),
    btnHandler1 () {
      this.sub()
    },
    btnHandler2 () {
      this.subN(3)
    }
  }
}
</script>
