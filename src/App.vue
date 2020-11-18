<template>
  <div id="app" style="height:100vh">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <router-view />

  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
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
  margin-top: 0px;
}
</style>
