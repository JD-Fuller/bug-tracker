<template>
  <div class="notes" style="text-align: left;">
    <form @submit.prevent="createNote() && setActiveNotes()">
      <h2 style="text-align: left;">Add Note</h2>
      <div class="form-group">
        <h3>Details</h3>
        <input
          v-model="newNote.content"
          type="text"
          placeholder="Add Details"
          required
        />
      </div>
      <div class="form-group">
        <h3>Name</h3>
        <input
          v-model="newNote.reportedBy"
          type="text"
          placeholder="Add Name"
          required
        />
      </div>
      <button class="fas fa-plus" type="submit">Note</button>
      <!-- <div class="form-group">
        <h3 style="color: lightgrey;">Status</h3>

        <select
          style="color: lightgrey;"
          v-model="flagged"
          type="text"
          placeholder="Select status"
          disabled
        />
      </div> -->
    </form>
  </div>
</template>

<script>
export default {
  name: "Notes",
  data() {
    return {
      newNote: {
        content: "",
        reportedBy: ""
      }
      // flagged: {
      //   enum: ["pending", "completed", "rejected"]
      // }
    };
  },
  methods: {
    createNote() {
      let note = { ...this.newNote };
      this.$store.dispatch("createNote", note);
      this.newNote = {
        content: "",
        bug: this.$route.params.id,
        reportedBy: ""
      };
    },
    setActiveNotes(note) {
      this.$store.dispatch("setActiveNotes", note);
    }
    // this.$store.dispatch("createNote", note);
    // this.content = "";
    // this.reportedBy = "";
  }
};
</script>

<style></style>
