import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Bug from "../components/Bug.vue";
import BugDetails from "../components/BugDetails.vue";
import NoteComponent from "../components/NoteComponent.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/bugs",
    name: "bugs",
    component: Bug
  },
  {
    path: "/bugs/:id",
    name: "bugDetails",
    component: BugDetails
  },
  {
    path: "/notes",
    name: "notes",
    component: NoteComponent
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
