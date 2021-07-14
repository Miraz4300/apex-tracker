import { createWebHistory, createRouter } from "vue-router";
import Search from './components/Search'
import Profile from './components/Profile'

const routes = [
  {
    path: "/",
    name: "search",
    component: Search
  },
  {
    path: "/profile/:platform/:gamertag",
    name: "profile",
    component: Profile
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;