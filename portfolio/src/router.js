import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from './views/index.vue'
import contactView from './views/contact.vue'
import PortfolioView from './views/portfolio.vue'

import ProjetView from './views/projet.vue'
import murtal from './views/projet/escarmouche.vue'
import karla from './views/projet/karla.vue'
import portfolio3d from './views/projet/threejs.vue'


const routes = [
  { path: '/', component: HomeView },
  { path: '/contat', component: contactView },
  { path: '/portfolio', component: PortfolioView },


  { path: '/projet', component: ProjetView },

  { path: '/projet/karla', component: karla },
  { path: '/projet/3d', component: portfolio3d },
  { path: '/projet/Mur-Tale', component: murtal },


]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})


export default router;