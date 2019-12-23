import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

let _api = axios.create({
  baseURL: "//localhost:3000/api"
});

let _sandBox = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/jdfuller",
  timeout: 8000
});

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    notes: [],
    bugs: [],
    activeBug: {}
  },
  mutations: {
    setAllBugs(state, data) {
      state.bugs = data;
    },
    addBug(state, bug) {
      state.bugs.push(bug);
    },
    setActiveBug(state, bug) {
      state.activeBug = bug;
    }
  },
  actions: {
    async getBugs({ commit, dispatch }) {
      let res = await _api.get("bugs");
      commit("setAllBugs", res.data);
    },
    async getBugById({ commit, dispatch }, id) {
      let res = await _api.get("bugs/" + id);
      commit("setActiveBug", res.data);
    },
    async createBug({ commit, dispatch }, bug) {
      let res = await _api.post("bugs", bug);
      commit("addBug", res.data);
    },
    async closed({ commit, dispatch }, id) {
      await _api.delete("bugs/" + id);
      dispatch("getBugs");
    }
  },
  modules: {}
});
