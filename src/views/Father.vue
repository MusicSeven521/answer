<template>
  <div>
    <h3>父组件</h3>
    <Son1 :msg1="msg1" @updateMsg="updateMsg" />
    <Son2 :msg2.sync="msg2" />
  </div>
</template>

<script>
import Son1 from '@/components/Son1.vue'
import Son2 from '@/components/Son2.vue'
export default {
  components: { Son1, Son2 },
  data () {
    return {
      msg1: '123',
      msg2: '456'
    }
  },
  methods: {
    updateMsg (data) {
      this.msg1 = data
    }
  }
}
</script>

<style>

</style>
