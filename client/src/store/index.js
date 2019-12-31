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
    activeNotes: [],
    activeBug: {},
    activeNote: {}
  },
  mutations: {
    setAllBugs(state, data) {
      state.bugs = data;
      console.log("setAllBugs in store", data);
    },
    addBug(state, bug) {
      debugger;
      state.bugs.push(bug);
    },
    setActiveBug(state, bug) {
      state.activeBug = bug;
    },
    setAllNotes(state, data) {
      debugger;
      state.notes = data;
    },
    addNote(state, note) {
      debugger;
      state.notes.push(note);
      debugger;
      console.log("A note has been added at the store");
    },
    setActiveNote(state, note) {
      state.activeNote = note;
    },
    setActiveNotes(state, data) {
      state.activeNotes = data;
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
      debugger;
      commit("setActiveBug", bug);
    },

    async getActiveBug({ commit, dispatch }, id) {
      //getActiveBug debugged - gtg
      let res = await _api.get("bugs/" + id);
      commit("setActiveBug", res.data);
    },
    async closed({ commit, dispatch }, id) {
      await _api.delete("bugs/" + id);
      dispatch("getBugs");
    },
    async setActiveNotes({ commit, dispatch }, id) {
      debugger;
      let res = await _api.get("bugs/" + id + "/notes");
      commit("setActiveNotes", res.data);
    },
    async setAllNotes({ commit, dispatch }, id) {
      debugger;
      let res = await _api.get("bugs/" + id + "/notes");
      commit("setAllNotes", res.data);
    },

    async getNotes({ commit, dispatch }) {
      debugger;
      let res = await _api.get("notes");
      commit("setAllNotes", res.data);
    },
    async getNoteById({ commit, dispatch }, id) {
      let res = await _api.get("bugs/" + id + "/notes/" + id);
      commit("setActiveNote", res.data);
    },
    async getNotesByBugId({ commit, dispatch }, id) {
      let res = await _api.get("bugs/" + id + "/notes");
      debugger;
      commit("setAllNotes", res.data);
    },
    async getNotesById({ commit, dispatch }, id) {
      debugger;
      let res = await _api.get("notes/" + id);
      commit("setActiveNotes", res.data);
    },
    async createNote({ commit, dispatch }, note) {
      debugger;
      let res = await _api.post("notes", note);
      debugger;
      commit("addNote", res.data);
    },
    async editNote({ commit, dispatch }, id) {
      let res = await _api.put("bugs/" + id + "/notes/" + id);
      commit("setAllNotes", res.data);
    }
  }
});
