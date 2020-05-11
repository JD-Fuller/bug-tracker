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
              @submit.prevent="deleteNote(note._id)"
              class="btn btn-warning"
              type="submit"
              @click="deleteNote"
            >
              <i class="fa fa-arrow-circle-right fa-lg"></i>
            </button>
            <!-- <removeNote /> -->
            <!-- <button @click="deleteNote(note._id)">Remove Note</button> -->
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import removeNote from "@/components/RemoveNoteModal";
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
  },
  methods: {
    setActiveNote() {
      debugger;
      this.$store.dispatch("setActiveNote"), this.$route.params.id;
    },
    deleteNote(noteId) {
      debugger;
      this.$store.dispatch("deleteNote"), this.$route.params.id;
    },
    alertDisplay() {
      this.$swal('heading", "this is a heading', "ok");
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
  },
  components: {
    removeNote
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
