import { createWebHistory, createRouter } from "vue-router";
import Init from './components/InitMain';
import Sub from "./components/InitSub";

const routes = [
  {
    path: "/",
    component: Init,
  },
  {
    path: "/detail",
    component: Sub,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;