<template>
  <div>
    <h3>这是父组件传的值：{{ msg2 }}</h3>
    <button @click="handle">按钮2</button>
  </div>
</template>

<script>
export default {
  name: 'Son2',
  data () {
    return {
    }
  },
  props: ['msg2'],
  methods: {
    handle () {
      this.$emit('update:msg2', '这是Son2想要的值')
    }
  }
}
</script>

<style>

</style>
