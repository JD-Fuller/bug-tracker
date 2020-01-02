<template>
  <div class="activeBug table-responsive shadow">
    <table class="table table-striped table-borderless table-hover">
      <thead class="thead-light">
        <tr>
          <!-- <th scope="col">1</th> -->
          <th scope="col" style="text-align: left;">Title</th>
          <th scope="col">Reported By: {{ activeBugData.reportedBy }}</th>
          <th scope="col">Status: {{ activeBugData.closed }}</th>
          <th scope="col">Date Created: {{ activeBugData.createdAt }}</th>
          <th scope="col">Last Modified: {{ activeBugData.updatedAt }}</th>
        </tr>
      </thead>
      <!-- <tbody>
        <tr>
          <router-link
            :to="{ name: 'bugs', params: { id: this.$route.params.id } }"
          >
            
            <td>{{ activeBugData.title }}</td>
            <td>{{ activeBugData.reportedBy }}</td>
            <td>{{ activeBugData.closed }}</td>
            <td>{{ activeBugData.updatedAt | formatDate }}</td>
          </router-link>
        </tr>
      </tbody> -->
    </table>
  </div>
</template>

<script>
export default {
  name: "ActiveBug",
  props: ["activeBugData"],
  // data() {
  //   return {
  //     bug: {
  //       // title: "",
  //       // reportedBy: "",
  //       // closed: "",
  //       updatedAt: ""
  //     }
  //   };
  // },

  mounted() {
    // Checks out in the debugger - this mounted is GTG
    // debugger;
    // this.$store.dispatch("getActiveBug", this.$route.params.id);
    // console.log("from activebug");
  },
  methods: {
    // addNote() {
    //   let note = { ...this.newNote };
    //   this.$store.dispatch("createNote", note);
    //   this.newNote = {
    //     content: "",
    //     reportedBy: "" //The provided name for who made the note
    //   };
    //   console.log("a new note was created");
    // },
    // setActiveNote(note) {
    //   debugger;
    //   this.$store.dispatch("setActiveNote", note);
    // }
  },
  computed: {
    // bug() {
    //   return this.$store.state.activebug;
    // },
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
