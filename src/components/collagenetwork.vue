<template>
  <div id="app" style="height:100vh">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <FdcNetwork id='network' :nodes='nodes' :edges='edges'/>
  </div>
</template>

<script>
import FdcNetwork from '@/components/network.vue';
import Collage from '@/collage/collage.js';

export default {
  name: 'FdcCollageNetwork',
  components: {
    FdcNetwork
  },
  data: () => ({
    collage: new Collage('climatecollage'),
  }),
  computed: {
    nodes() {
      return this.collage.cards().map((card) => ({
        id: card.id,
        label: card.label
      }));
    },
    edges() {
      return this.collage.relations().map((relation) => ({
        from: relation.from,
        to: relation.to,
        arrows: { to: { enabled: true } },
      }))
    }
  },
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
