<template>
  <div>
    <embed :src="this.front" type="application/pdf"   height="370px" width="500">
    <embed :src="this.back" type="application/pdf"   height="370px" width="500">
  </div>
</template>

<script>

export default {
  name: 'FdcCardVue',
  props: {
    card: Object,
  },
  components: {
  },
  data: () => ({
  }),
  computed: {
    front() {
      if (!this.card) return undefined;
      console.log(this.card);
      return require('@/assets/collages/' + this.card.frontimage);
    },
    back() {
      if (!this.card) return undefined;
      return require('@/assets/collages/' + this.card.backimage);
    }
  },
}
</script>

<style>
</style>
