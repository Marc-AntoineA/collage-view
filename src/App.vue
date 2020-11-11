<template>
  <div id="app" style="height:100vh">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <FdcNetwork id='network' :nodes='nodes' :edges='edges'/>
  </div>
</template>

<script>
import FdcNetwork from '@/components/network.vue';

export default {
  name: 'App',
  components: {
    FdcNetwork
  },
  data: () => ({
    nodes: [
      {id: 1, label: 'Activités humaines'},
      {id: 2, label: "Industrie"},
      {id: 3, label: "Utilisation des bâtiments"},
      {id: 4, label: "Transport"},
      {id: 5, label: "Énergies fossiles"},
      {id: 6, label: "Déforestation"},
      {id: 7, label: "Émissions de CO2"},
      {id: 8, label: "Agriculture"},
      {id: 9, label: "Autres GES"},
      {id: 10, label: "Aérosols"},
      {id: 11, label: "Concentrations en CO2 (ppm)"},
      {id: 12, label: "Puits de carbone"},
      {id: 13, label: 'Effet de serre additionnel'},
      {id: 14, label: "Bilan énergétique"},
      {id: 15, label: "Forçage radiatif"},
      {id: 16, label: "Fonte des glaciers"},
      {id: 17, label: "Hausse de la température de l'eau"},
      {id: 18, label: "Fonte de la banquise"},
      {id: 19, label: "Fonte des calottes glaciaires"},
      {id: 20, label: "Perturbuation du cycle de l'eau"},
      {id: 21, label: "Hausse de la température"},
      {id: 22, label: "Montée des eaux"},
      {id: 23, label: "Problèmes de calcification"},
      {id: 24, label: "Acidification de l'océan"},
      {id: 25, label: "Biodiversité terrestre"},
      {id: 26, label: "Crues"},
      {id: 27, label: "Biodiversité marine"},
      {id: 28, label: "Vecteurs de maladie"},
      {id: 29, label: "Ptéropodes et coccolithophores"},
      {id: 30, label: "Sécheresses"},
      {id: 31, label: "Ressources en eau douce"},
      {id: 32, label: "Baisse des rendements agricoles"},
      {id: 33, label: "Submersions"},
      {id: 34, label: "Cyclones"},
      {id: 35, label: "Incendies"},
      {id: 36, label: "Canicules"},
      {id: 37, label: "Famines"},
      {id: 38, label: "Santé humaine"},
      {id: 39, label: "Réfugiés climatiques"},
      {id: 40, label: "Conflits armés"},
      {id: 41, label: "Permafrost"},
      {id: 42, label: "Hydrates de méthane"},
    ],
    edges: [
      {from: 1, to: 4, arrows: { to: { enabled: true } } },
      {from: 1, to: 3, arrows: { to: { enabled: true } } },
      {from: 1, to: 8, arrows: { to: { enabled: true } } },
      {from: 2, to: 5, arrows: { to: { enabled: true } } },
      {from: 2, to: 10, arrows: { to: { enabled: true } } },
      {from: 3, to: 5, arrows: { to: { enabled: true } } },
      {from: 4, to: 10, arrows: { to: { enabled: true } } },
      {from: 4, to: 5, arrows: { to: { enabled: true } } },
      {from: 5, to: 7, arrows: { to: { enabled: true } } },
      {from: 6, to: 7, arrows: { to: { enabled: true } } },
      {from: 7, to: 12, arrows: { to: { enabled: true } } },
      {from: 8, to: 6, arrows: { to: { enabled: true } } },
      {from: 8, to: 9, arrows: { to: { enabled: true } } },
      {from: 9, to: 13, arrows: { to: { enabled: true } } },
      {from: 10, to: 15, arrows: { to: { enabled: true } } },
      {from: 10, to: 38, arrows: { to: { enabled: true } } },
      {from: 11, to: 38, arrows: { to: { enabled: true } } },
      {from: 12, to: 24, arrows: { to: { enabled: true } } },
      {from: 13, to: 15, arrows: { to: { enabled: true } } },
      {from: 14, to: 18, arrows: { to: { enabled: true } } },
      {from: 14, to: 19, arrows: { to: { enabled: true } } },
      {from: 14, to: 16, arrows: { to: { enabled: true } } },
      {from: 14, to: 17, arrows: { to: { enabled: true } } },
      {from: 14, to: 21, arrows: { to: { enabled: true } } },
      {from: 15, to: 14, arrows: { to: { enabled: true } } },
      {from: 16, to: 22, arrows: { to: { enabled: true } } },
      {from: 16, to: 31, arrows: { to: { enabled: true } } },
      {from: 17, to: 22, arrows: { to: { enabled: true } } },
      {from: 17, to: 20, arrows: { to: { enabled: true } } },
      {from: 17, to: 27, arrows: { to: { enabled: true } } },
      {from: 17, to: 42, arrows: { to: { enabled: true } } },
      //Rien pour 18
      {from: 19, to: 22, arrows: { to: { enabled: true } } },
      {from: 20, to: 25, arrows: { to: { enabled: true } } },
      {from: 20, to: 30, arrows: { to: { enabled: true } } },
      {from: 20, to: 26, arrows: { to: { enabled: true } } },
      {from: 21, to: 20, arrows: { to: { enabled: true } } },
      {from: 21, to: 41, arrows: { to: { enabled: true } } },
      {from: 21, to: 36, arrows: { to: { enabled: true } } },
      {from: 21, to: 25, arrows: { to: { enabled: true } } },
      {from: 22, to: 33, arrows: { to: { enabled: true } } },
      {from: 23, to: 29, arrows: { to: { enabled: true } } },
      {from: 24, to: 23, arrows: { to: { enabled: true } } },
      {from: 25, to: 28, arrows: { to: { enabled: true } } },
      {from: 26, to: 32, arrows: { to: { enabled: true } } },
      {from: 26, to: 31, arrows: { to: { enabled: true } } },
      {from: 27, to: 37, arrows: { to: { enabled: true } } },
      {from: 28, to: 38, arrows: { to: { enabled: true } } },
      {from: 29, to: 27, arrows: { to: { enabled: true } } },
      {from: 30, to: 35, arrows: { to: { enabled: true } } },
      {from: 30, to: 26, arrows: { to: { enabled: true } } },
      {from: 31, to: 32, arrows: { to: { enabled: true } } },
      {from: 32, to: 37, arrows: { to: { enabled: true } } },
      {from: 33, to: 32, arrows: { to: { enabled: true } } },
      {from: 34, to: 38, arrows: { to: { enabled: true } } },
      {from: 34, to: 33, arrows: { to: { enabled: true } } },
      {from: 34, to: 32, arrows: { to: { enabled: true } } },
      // 35 vers rien
      {from: 36, to: 35, arrows: { to: { enabled: true } } },
      {from: 37, to: 39, arrows: { to: { enabled: true } } },
      {from: 37, to: 40, arrows: { to: { enabled: true } } },
      {from: 37, to: 38, arrows: { to: { enabled: true } } },
      {from: 38, to: 39, arrows: { to: { enabled: true } } },
      {from: 38, to: 40, arrows: { to: { enabled: true } } },
      {from: 39, to: 40, arrows: { to: { enabled: true } } },
      {from: 40, to: 38, arrows: { to: { enabled: true } } },
      {from: 40, to: 39, arrows: { to: { enabled: true } } },
      {from: 41, to: 9, arrows: { to: { enabled: true } } },
      {from: 42, to: 9, arrows: { to: { enabled: true } } },
    ]
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
