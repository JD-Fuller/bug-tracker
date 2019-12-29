<template>
  <div class="modal" :id="id" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">
            <!-- slot added for input, named slot -->
            <slot name="title"></slot>
          </h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <!-- slot added for input -->
          <form @submit.prevent="addBug() && setActiveBug()">
            <div class="col form-group" style="text-align: left;">
              <div class="form-group">
                <input
                  type="text"
                  name="name"
                  id
                  placeholder="Name"
                  v-model="editedBug.reportedBy"
                />
                <small id="nameHelp" class="form-text text-muted"
                  >Add Full Name</small
                >
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

              <button type="submit" class="btn btn-danger">
                Save Changes
              </button>
            </div>
          </form>
          <!-- <slot></slot> -->
        </div>
        <div class="modal-footer"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "editbugmodal",
  data() {
    return {
      editedBug: {
        description: "",
        title: "",
        reportedBy: ""
      }
    };
    console.log("from data() in addbug.vue", this.store.state.bugs);
  },
  methods: {
    setBug() {
      let bug = { ...this.editedBug };
      this.$store.dispatch("createBug", bug);
      this.editedBug = {
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
  },
  props: ["id"]
};
</script>

<style scoped></style>
