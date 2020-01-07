<template>
  <form @submit.prevent="onSubmit">
    <div class="col form-group" style="text-align: left;">
      <!-- <router-link to="bugs"> -->
      <button class="btn btn-success" style="float: right;" type="submit">
        <i class="fas fa-plus">BUG</i>
      </button>
      <!-- </router-link> -->
      <!-- <router-view
        :activebug="activeBug"
        v-if="activeBug != undefined"
      ></router-view> -->
      <div class="form-group">
        <input
          type="text"
          name="name"
          id
          placeholder="Name"
          v-model="newBug.reportedBy"
        />
        <small id="nameHelp" class="form-text text-muted">Add Full Name</small>
      </div>
      <div class="form-group">
        <input
          type="text"
          name="title"
          id
          placeholder="Title"
          v-model="newBug.title"
        />
        <small id="titleHelp" class="form-text text-muted"
          >Main bug title or issue</small
        >
      </div>
      <div class="form-group">
        <input
          type="text"
          name="description"
          id
          placeholder="Description"
          v-model="newBug.description"
        />
        <small id="descriptionHelp" class="form-text text-muted"
          >Add bug description</small
        >
      </div>
    </div>
  </form>
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
    onSubmit() {
      this.$store.state.activeBug = {};
      let bug = { ...this.newBug };
      this.$store.dispatch("createBug", bug);
      this.newBug = {
        description: "",
        title: "",
        reportedBy: ""
      };
      this.activeBug();
      this.$router.push(`bugs/${this.activeBug._id}`);
      console.log("A bug was created in the addbug.vue");
    }
  },
  computed: {
    confirmation() {
      return this.$store.state.bugs.length;
    },
    bugs() {
      return this.$store.state.bugs;
    },
    activeBug() {
      return this.$store.state.activeBug;
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
