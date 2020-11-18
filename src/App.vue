<template>
  <div id="app" style="height:100vh">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <FdcCollageNetwork/>
  </div>
</template>

<script>
import FdcCollageNetwork from '@/components/collagenetwork.vue';

export default {
  name: 'App',
  components: {
    FdcCollageNetwork
  },
  data: () => ({
  }),

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
