<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <hello-world />
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'

export default defineComponent({
  name: 'HomeView',
  components: {
    HelloWorld
  },
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
