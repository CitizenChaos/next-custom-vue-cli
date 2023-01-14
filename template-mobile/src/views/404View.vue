<template>
  <div>404</div>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue'
export default defineComponent({
  name: '404View',
  setup() {
    const state = reactive({})
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
