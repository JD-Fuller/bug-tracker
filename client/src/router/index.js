import Vue from "vue";
import VueRouter from "vue-router";
// @ts-ignore
import Home from "../views/Home.vue";
// @ts-ignore
import BugDetails from "../views/BugDetails.vue";
// @ts-ignore
import About from "../views/About.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/bugs/:id",
    name: "bugs",
    component: BugDetails
  },
  {
    path: "/about",
    name: "about",
    component: function() {
      // @ts-ignore
      return import("../views/About.vue");
    }
  },
  {
    path: "*",
    redirect: "/"
  }
];

const router = new VueRouter({
  routes
});

export default router;
