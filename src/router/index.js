import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/battle',
    name: 'BattleScreen',
    component: () => import(/* webpackChunkName: "battle" */ '../views/BattleScreen.vue')
  },
  {
    path: '/battles',
    name: 'BattleIndex',
    component: () => import(/* webpackChunkName: "battles" */ '../views/BattleIndex.vue')
  },
  {
    path: '/enemy-builder',
    name: 'EnemyBuilderMain',
    component: () => import(/* webpackChunkName: "enemy-builder" */ '../views/EnemyBuilder.vue')
  },
  {
    path: '/enemy-builder/:monsterId',
    name: 'EnemyBuilderEdit',
    component: () => import(/* webpackChunkName: "enemy-builder" */ '../views/EnemyBuilder.vue')
  },
  {
    path: '/monsters-index',
    name: 'MonstersIndex',
    component: () => import(/* webpackChunkName: "about" */ '../views/MonstersIndex.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
