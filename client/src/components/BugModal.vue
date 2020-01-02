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
          <form>
            <div class="col form-group" style="text-align: left;">
              <div class="form-group">
                <input
                  type="text"
                  name="name"
                  id
                  placeholder="Name"
                  v-model="newBug.reportedBy"
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
              <div>
                <h4>router section</h4>
                <h5>{$router.params.id}</h5>
                <router-link to="bugs/:id">
                  <button
                    v-on:click="onSubmit"
                    type="submit"
                    class="fas fa-plus"
                  >
                    Bug:
                  </button>
                </router-link>
                <router-view></router-view>
              </div>
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
  name: "bugmodal",
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
      // }
      // addBug() {
      debugger;
      this.$store.state.activeBug = {};
      let bug = { ...this.newBug };
      this.$store.dispatch("createBug", bug);
      debugger;
      // .then(this.$store.dispatch("setActiveBug", bug))
      // .then(this.$router.push("bugs"));
      this.newBug = {
        description: "",
        title: "",
        reportedBy: ""
      };
      // this.$router.push("/bugs/:id");
      console.log("A bug was created in the addbug.vue");
      // },
      // setActiveBug(bug) {
      //   this.$store.dispatch("setActiveBug", bug);
      // }
    },
    setActiveBug() {
      debugger;
      this.$store.dispatch("setActiveBug"), this.$route.params.id;
    }
    // emitRoute(){
    //   this.$router.push('bugs');
    // }
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
  },
  props: ["id"]
};
</script>

<style scoped>
/* :to="{ name: 'bugs', params: { id: activeBug._id } }" */
</style>
