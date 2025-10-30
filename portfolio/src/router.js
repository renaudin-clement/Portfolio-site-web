import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from './views/index.vue'
import contactView from './views/contact.vue'
import PortfolioView from './views/portfolio.vue'
import ProjetView from './views/projet.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/contat', component: contactView },
  { path: '/portfolio', component: PortfolioView },
  { path: '/projet', component: ProjetView },


]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})


export default router;