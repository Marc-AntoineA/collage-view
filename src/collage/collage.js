
// const collages = require('@/assets/data/collages.json');

export default class Collage {

  constructor(collageId) {

    this.id_ = collageId;
    this.cards_ = require(`@/assets/collages/${this.id_}/cards.json`);
    this.cards_ = this.cards_.map((card) => ({
      ...card,
      // frontimage: `${this.id_}/cards/${card.id}-front.png`,
      // backimage: `${this.id_}/cards/${card.id}-back.pdf`,
      frontthumbnail: `${this.id_}/cards/thumbnails/${card.id}-front.png`,
      backthumbnail: `${this.id_}/cards/thumbnails/${card.id}-back.pdf`,
    }));
    this.relations_ = require(`@/assets/collages/${this.id_}/relations.json`)
  }

  cards() {
    return this.cards_;
  }

  relations() {
    return this.relations_;
  }
}
