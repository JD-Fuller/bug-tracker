import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

let _api = axios.create({
  baseURL: "//localhost:3000/api"
});

// let _api = axios.create({
//   baseURL: "//bcw-sandbox.herokuapp.com/api/jdfuller",
//   timeout: 8000
// });

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    notes: [],
    bugs: [],
    activeBug: {},
    activeNote: {}
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
    },
    setAllNotes(state, data) {
      state.notes = data;
    },
    addNote(state, note) {
      debugger;
      state.notes.push(note);
    },
    setActiveNote(state, note) {
      state.activeNote = note;
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

    setActiveBug({ commit, dispatch }, bug) {
      commit("setActiveBug", bug);
    },
    async getActiveBug({ commit, dispatch }) {
      let res = await _api.get("bugs/" + id);
      commit("setActiveBug", res.data);
    },
    async closed({ commit, dispatch }, id) {
      await _api.delete("bugs/" + id);
      dispatch("getBugs");
    },
    async getNotes({ commit, dispatch }) {
      let res = await _api.get("notes");
      commit("setAllNotes", res.data);
    },
    async getNoteById({ commit, dispatch }, id) {
      let res = await _api.get("notes/" + id);
      commit("setActiveNote", res.data);
    },
    async createNote({ commit, dispatch }, note) {
      debugger;
      let res = await _api.post("notes", note);
      debugger;
      commit("addNote", res.data);
    }
  }
});
