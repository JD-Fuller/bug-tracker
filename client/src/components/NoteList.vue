<template>
  <div class="table-responsive">
    <table class="table table-striped table-borderless table-hover">
      <thead class="thead-light">
        <tr>
          <!-- <th scope="col">1</th> -->
          <th scope="col" style="text-align: left;">Comment</th>
          <th scope="col">Name</th>
          <th scope="col">Status</th>
          <th scope="col">Last Modified</th>
        </tr>
      </thead>
      <tbody>
        <tr class="note" v-for="note in notes" :key="note._id">
          <!-- <th scope="row">#</th> -->
          <td>{{ note.content }}</td>
          <td>{{ note.reportedBy }}</td>
          <td>{{ note.flagged }}</td>
          <td>{{ note.createdAt | formatDate }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "NoteList",
  // props: ["note"],
  data() {
    return {
      createdAt: ""
    };
  },
  mounted() {
    //Confirmed this mounted is working - gtg
    debugger;
    return this.$store.dispatch("getNotesById", this.$route.params.id);
  },
  methods: {
    setActiveNote() {
      debugger;
      this.$store.dispatch("setActiveNote");
    }
  },
  computed: {
    activeNotes() {
      return this.$store.state.activeNote;
    },
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
