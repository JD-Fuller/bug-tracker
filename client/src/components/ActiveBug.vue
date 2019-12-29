<template>
  <div class="activeBug table-responsive">
    <table class="table table-striped table-borderless table-hover">
      <thead class="thead-light">
        <tr>
          <!-- <th scope="col">1</th> -->
          <th scope="col" style="text-align: left;">Title</th>
          <th scope="col">Reported By</th>
          <th scope="col">Status</th>
          <th scope="col">Date Created</th>
          <th scope="col">Last Modified</th>
        </tr>
      </thead>
      <tbody>
        <tr class="table" v-for="activebug in activebugs" :key="activebug._id">
          <router-link
            :to="{ name: 'bugs', params: { id: activebug._id } }"
            v-on:click="setActiveNote(activebug._id)"
            style="padding-right: 15px"
          >
            <td>{{ bug.title }}</td>
            <td>{{ bug.reportedBy }}</td>
            <td>{{ bug.closed }}</td>
            <td>{{ bug.updatedAt | formatDate }}</td>
          </router-link>
          <router-view />
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "ActiveBug",
  props: ["activeBugs", "bugs", "activebugs"],
  data() {
    return {
      activeBug: {
        title: "",
        reportedBy: "",
        closed: "",
        updatedAt: ""
      }
    };
  },
  mounted() {
    // Checks out in the debugger - this mounted is GTG
    this.$store.dispatch("getActiveBug", this.$route.params.id);
  },
  methods: {
    addNote() {
      let note = { ...this.newNote };
      this.$store.dispatch("createNote", note);
      this.newNote = {
        content: "",
        reportedBy: "" //The provided name for who made the note
      };
      console.log("a new note was created");
    },
    setActiveNote(note) {
      this.$store.dispatch("setActiveNote", note);
    }
  },
  computed: {
    bug() {
      return this.$store.state.activebugs;
    },
    // activeBug() {
    //   return this.$store.state.activeBug;
    // },
    status(bug) {
      for (var closed in bug) {
        if (closed != false) {
          return "Open";
        } else {
          return "Closed Out";
        }
      }
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
table {
  text-align: end;
}
</style>
