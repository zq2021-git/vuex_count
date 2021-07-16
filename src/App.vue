<template>
  <div>
    <my-addition></my-addition>

    <p>------------------------------</p>

    <my-subtraction></my-subtraction>
  </div>
</template>

<script>
// 导入自定义的子组件 Addition 和 Subtraction
import Addition from './components/Addition.vue'
import Subtraction from './components/Subtraction.vue'

export default {
  data () {
    return {}
  },
  components: {
    // 注册为APP的子组件
    'my-addition': Addition,
    'my-subtraction': Subtraction
  }
}
</script>
