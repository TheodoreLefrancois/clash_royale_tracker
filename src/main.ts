import { createApp } from "vue";
import { createWebHashHistory, createRouter } from "vue-router";
import type { RouterOptions } from "vue-router";
import App from "./App.vue";
import { HomeVue, ResultVue, SearchVue } from "./vues";

const routes: RouterOptions["routes"] = [
  { path: "/", component: HomeVue },
  { path: "/result", component: ResultVue },
  {
    path: "/search",
    component: SearchVue,
    props: (route) => ({ tag: route.query.tag }),
  },
];
export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount("#app");
