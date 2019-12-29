<template>
  <div class="notes" style="text-align: left;">
    <form @submit.prevent="createNote">
      <h2 style="text-align: left;">Add Note</h2>
      <div class="form-group">
        <h3>Details</h3>
        <input v-model="note" type="text" placeholder="Add Details" required />
      </div>
      <div class="form-group">
        <h3>Name</h3>

        <input
          v-model="reportedBy"
          type="text"
          placeholder="Add Name"
          required
        />
      </div>
    </form>
    <button class="fas fa-plus" type="submit">Note</button>
  </div>
</template>

<script>
export default {
  name: "Notes",
  data() {
    return {
      note: "",
      reportedBy: ""
    };
  },
  methods: {
    createNote() {
      let note = {
        content: this.note,
        bug: this.$route.params.id,
        reportedBy: this.reportedBy
      };
      this.$store.dispatch("createNote", note);
      this.note = "";
      this.reportedBy = "";
    }
  }
};
</script>

<style></style>
