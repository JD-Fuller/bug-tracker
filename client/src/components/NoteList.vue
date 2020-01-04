<template>
  <div class="table-responsive shadow" style="margin-top: 2rem;">
    <table class="table table-striped table-borderless table-hover">
      <thead class="thead-light">
        <tr>
          <!-- <th scope="col">1</th> -->
          <th scope="col" style="text-align: left;">Comment</th>
          <th scope="col" style="text-align: left;">Name</th>
          <th scope="col" style="text-align: center;">Last Modified</th>
          <th scope="col" style="text-align: center;">Close Note</th>
        </tr>
      </thead>
      <tbody>
        <tr class="table " v-for="note in notes" :key="note.bug">
          <!-- <th scope="row">#</th> -->
          <td style="text-align: left;">{{ note.content }}</td>
          <td style="text-align: left;">{{ note.reportedBy }}</td>
          <td style="text-align: center;">{{ note.createdAt | formatDate }}</td>
          <td style="text-align: center;">
            <button
              class="btn btn-warning"
              type="submit"
              v-on:click="deleteNotes"
            >
              <i class="fa fa-arrow-circle-right fa-lg"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "NoteList",
  data() {
    return {
      content: "",
      reportedBy: "",
      createdAt: ""
    };
  },
  mounted() {
    //Confirmed this mounted is working - gtg
    return this.$store.dispatch("getNotesByBugId", this.$route.params.id);
    // return this.$store.dispatch("getNotesById", this.$route.params.id);
    // debugger;
    // return this.$store.state.notes;
  },
  methods: {
    deleteNotes() {
      debugger;
      this.$store.dispatch("deleteNote"), this.$store.state.activeNote.id;
    }
  },
  computed: {
    // activeNotes() {
    //   debugger;
    //   return this.$store.state.activeNotes;
    // },
    notes() {
      return this.$store.state.notes;
    }

    // if (this.$store.state.bugs.get("closed" != false)) {
    //   return "Closed";
    // } else {
    //   return "Open";
    // }
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
