<template>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <div>
    <FdcNetwork id='network' :nodes='nodes' :edges='edges'
      @node-double-selection='onNodeDoubleSelection'
      @node-selection='onNodeSelection'/>

      <b-modal
          v-model="selectedCard"
          has-modal-card
          trap-focus
          :destroy-on-hide="false"
          aria-role="dialog"

          aria-modal>
          <template #default='props'>
              <div class='modal-card' style="width: auto">
                <header class="modal-card-head">
                  <p class="modal-card-title">Carte {{ selectedCard ? selectedCard.label : ''}}</p>
                  <button
                      type="button"
                      class="delete"
                      @click="props.close"/>
              </header>
              <section class="modal-card-body">
                <FdcCard :card="selectedCard"></FdcCard>
              </section>
            </div>
          </template>
      </b-modal>
  </div>
</template>

<script>
import FdcNetwork from '@/components/network.vue';
import FdcCard from '@/components/card.vue';
import Collage from '@/collage/collage.js';

export default {
  name: 'FdcCollageNetwork',
  components: {
    FdcNetwork,
    FdcCard
  },
  data: () => ({
    collage: new Collage('climatecollage'),
    selectedCard: undefined,
  }),
  computed: {
    nodes() {
      return this.collage.cards().map((card) => ({
        id: card.id,
        label: card.label,
        shape: 'image',
        image: require('@/assets/collages/' + card.frontthumbnail),
        size: 30,
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
  methods: {
    onNodeDoubleSelection(nodeId) {
      this.selectedCard = this.collage.cards()[nodeId - 1];
    },
    onNodeSelection() {
      this.$buefy.toast.open({ message: 'Double cliquer sur la carte pour l\'afficher en grand', position: 'is-bottom' })
    }
  }
}
</script>

<style>
</style>
