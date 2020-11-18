
const collages = require('@/assets/data/collages.json');

export default class Collage {

  constructor(collageId) {

    alert(collageId);
    console.log(collages);
    this.id_ = collageId;
    this.cards_ = require(`@/assets/collages/${this.id_}/cards.json`);
    this.relations_ = require(`@/assets/collages/${this.id_}/relations.json`)
  }

  cards() {
    return this.cards_;
  }

  relations() {
    return this.relations_;
  }
}
