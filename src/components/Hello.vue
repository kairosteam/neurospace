<template>
  <div class="aaaa">
    <ns-loader></ns-loader>

  </div>
</template>

<script>
  import NsLoader from './Loader.vue'
export default {
    components: {
      NsLoader
    },
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<style>

</style>
