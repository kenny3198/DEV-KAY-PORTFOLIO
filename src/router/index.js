import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactPage from "@/components/ContactPage"
import WorkPage from "@/components/WorkPage"

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/ContactPage',
    name: 'ContactPage',
    component: ContactPage
  },
  {
    path: '/WorkPage',
    name: 'WorkPage',
    component: WorkPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
