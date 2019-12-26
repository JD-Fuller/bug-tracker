<template>
  <div class="row addBug">
    <form @submit.prevent="addBug">
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
      <h3>Current Bugs: {{confirmation}}</h3>
    </form>
    <!-- 
    <ul>
      <li v-for="bug in bugs" :key="bug._id">
        <router-link
          :to="{ title: 'bug', params: { id: bug._id } }"
          @click="setActiveBug(bug)"
        >{{ bug.closed + " | " + bug.title + " | " + bug.description }}</router-link>
      </li>
    </ul>-->
  </div>
</template>

<script>
export default {
  name: "AddBug",
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
    console.log("from data() in addbug.vue", this.store.state.bugs);
  },
  methods: {
    addBug() {
      let bug = { ...this.newBug };
      this.$store.dispatch("createBug", bug);
      this.newBug = {
        description: "",
        title: "",
        reportedBy: ""
      };
      console.log("A bug was created in the addbug.vue");
    },
    setActiveBug(bug) {
      this.$store.dispatch("setActiveBug", bug);
    }
  },
  computed: {
    confirmation() {
      return this.$store.state.bugs.length;
    },
    bugs() {
      return this.$store.state.bugs;
    }
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