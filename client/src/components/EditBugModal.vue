<template>
  <!-- slot added for input -->
  <form @submit.prevent="editBug">
    <div class="col-12 form-group" style="text-align: left;">
      <button
        class="btn-warning"
        style="float: right; font-size: 2em; border-style: none; font-family: montserrat; font-variant: all-small-caps;"
        v-on:click="editBug"
      >
        <i class="fas fa-edit"></i>
        Save Changes
      </button>
      <div class="form-group">
        <input
          type="text"
          name="name"
          id
          placeholder="Name"
          v-model="editedBug.reportedBy"
        />
        <small id="nameHelp" class="form-text text-muted">Add Full Name</small>
      </div>
      <div class="form-group">
        <input
          type="text"
          name="title"
          id
          placeholder="Title"
          v-model="editedBug.title"
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
          v-model="editedBug.description"
        />
        <small id="descriptionHelp" class="form-text text-muted"
          >Add bug description</small
        >
      </div>
      <!-- <router-link to="/bugs/:id"> -->
    </div>
    <!-- </router-link> -->
  </form>
  <!-- <slot></slot> -->
</template>

<script>
export default {
  name: "editbugmodal",
  mounted() {
    this.$store.dispatch("getActiveBug");
  },
  data() {
    return {
      editedBug: {
        description: "",
        title: "",
        reportedBy: "",
        id: this.$route.params.id,
        closed: this.$route.params.closed
      }
    };
  },

  methods: {
    editBug() {
      debugger;
      let bug = { ...this.editedBug };
      this.$store.dispatch("editBug", bug);
      this.editedBug = {
        description: "",
        title: "",
        reportedBy: ""
        // id: this.$route.params.id
      };
      console.log("A bug was edited in the addbug.vue", this.editedBug);
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
    },
    activeBug() {
      return this.$store.state.activeBug;
    },
    status() {
      return this.$store.state.activeBug.closed;
    }
  },
  props: ["id"]
};
</script>

<style scoped></style>
