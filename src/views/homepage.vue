<template>
  <div>
    <section class="hero is-medium is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Visualisation de la Fresque du Climat
          </h1>
          <h2 class="subtitle">
            Un outil de sensibilisation supplémentaire ?
          </h2>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <h1 class="title">Qu'est-ce c'est ?</h1>
          <div class="content has-text-justified">
            <p>
              Ce site internet présente un prototype de ce que à quoi pourrait ressembler un outil de visualisation de la <a href='https://fresqueduclimat.org'>Fresque du climat</a> ainsi que des nombreuses variantes (fresque de la biodiversité, des déchets, de la forêt, océane, etc.). Il s'agit d'une initiative personnelle pour contribuer à la Fresque du Climat.<br/>
              Je suis parti du constat qu'il est difficile de visualiser toutes ces fresques alors que beaucoup reposent sur le même principe assez simple : relier des images entre elles avec des flèches. Il serait alors facile de coder un outil utilisable pour toutes les fresques reposant sur ce principe. Cet outil pourrait avoir plusieurs intérêts :
            </p>
            <p>
              <ol>
                <li>Permettre à l'animateur de découvrir différentes fresques, d'apprendre et de réviser. L'outil pourrait constituer une <i>correction</i> où les liens/non-liens des cartes comporteraient des explications (renvois vers les pages des wiki par exemple) </li>
                <li>Utiliser l'outil comme un support de présentation (pour des fresques quizz) voire même d'atelier en distance (mais ce n'est pas un vrai besoin, Mural fonctionne bien) ;</li>
                <li>Participer à l'internationalisation de la Fresque. Les traductions faites par des volontaires seraient alors accessibles immédiatement, quelque soit </li>
                <li>Sensibiliser l'internaute curieux différemment, en lui faisant faire la fresque en autonomie derrière son écran.</li>
              </ol>
            </p>

            <div class='content has-text-centered'>
              <a class="button is-primary is-link" href='/#/climatecollage'>Voir le prototype (ultra basique)</a><br/>
              <i>Il s'agit vraiment d'un prototype ultra basique, avec moins de 12h de travail...</i>
            </div>
            <p>
              Pour des raisons évidentes de temps disponible, ce projet ne pourra s'étoffer que s'il est soutenu par plusieurs personnes et qu'une équipe s'empare du sujet. <br/>
              <b>Me contacter</b> : <a href='mailto:dev@marc-antoinea.fr'>dev@marc-antoinea.fr</a>.<br/>
              <b>Code source</b> : <a href='https://github.com/Marc-AntoineA/collage-view'>Github.com</a>
            </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  },
  data: () => ({
  }),

}
</script>

<style>
</style>
