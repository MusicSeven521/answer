<template>
  <div>
    <h3>这是父组件传的值：{{ msg1 }}</h3>
    <button @click="handle">按钮1</button>
  </div>
</template>

<script>
export default {
  ame: 'Son1',
  data () {
    return {
    }
  },
  props: ['msg1'],
  methods: {
    handle () {
      this.$emit('updateMsg', '这是Son1想要的值')
    }
  }
}
</script>

<style>

</style>
