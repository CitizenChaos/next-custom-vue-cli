<template>
  <div>
    {{ msg }}
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue'
export default defineComponent({
  name: 'HelloWorld',
  setup() {
    const state = reactive({
      msg: 'Hello World'
    })
    // const localMethods = {}
    const methods = {}
    return {
      ...toRefs(state),
      ...methods
    }
  }
})
</script>

<style lang="scss" scoped></style>
