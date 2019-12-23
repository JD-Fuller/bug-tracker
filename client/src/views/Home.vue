<template>
  <div class="home container-fluid">
    <header class="row">
      <div class="col header-text" style="min-height: 4vh;">
        B
        <img alt="Vue logo" src="../assets/logo.png" />G Tracker
      </div>
    </header>
    <div class="row">
      <form>
        <div class="col form-group" style="text-align: left;">
          <div class="form-group">
            <input type="text" name="name" id placeholder="Name" v-model="newBug.reportedBy" />
            <small id="nameHelp" class="form-text text-muted">Add Full Name</small>
          </div>
          <div class="form-group">
            <input type="text" name="title" id placeholder="Title" v-model="newBug.title" />
            <small id="titleHelp" class="form-text text-muted">Main bug title or issue</small>
          </div>
          <div class="form-group">
            <input
              type="text"
              name="description"
              id
              placeholder="Description"
              v-model="newBug.description"
            />
            <small id="descriptionHelp" class="form-text text-muted">Add bug description</small>
          </div>
          <button type="submit" class="btn btn-danger">Log Bug:</button>
        </div>
      </form>
    </div>
    <div class="row">
      <div class="col" v-for="bug in bugs" :key="bug.id">
        <bug-component :bugData="bug" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import BugComponent from "@/components/Bug.vue";
import HomeComponent from "@/components/HomeComponent.vue";

export default {
  name: "home",
  mounted() {
    this.$store.dispatch("getBugs");
  },
  data() {
    return {
      newBug: {
        description: "",
        title: "",
        reportedBy: ""
      }
    };
  },
  methods: {
    createBug() {
      let bug = { ...this.newBug };
      this.$store.dispatch("createBug", bug);
      this.newBug = {
        description: "",
        title: "",
        reportedBy: ""
      };
    }
  },
  computed: {
    bugs() {
      return this.$store.state.bugs;
    },
    closedBugs() {
      this.bugs.filter(c => bug.closed);
    }
  },
  components: {
    BugComponent,
    HomeComponent
  }
};
</script>
<style>
header {
  background-color: rgb(134, 173, 173);
}
.header-text {
  text-align: left;
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
}
img {
  height: 1em;
}
</style>