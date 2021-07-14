import { createWebHistory, createRouter } from "vue-router";
import Search from './components/Search'

const routes = [
  {
    path: "/",
    name: "search",
    component: Search,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;