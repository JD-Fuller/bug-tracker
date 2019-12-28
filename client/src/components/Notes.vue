<template>
  <div class="notes">
    <form @submit.prevent="createNote">
      <input v-model="note" type="text" placeholder="Add Details" required />
      <input v-model="reportedBy" type="text" placeholder="Add Name" required />
      <button type="submit">Add Note</button>
    </form>
    {{ notes }}
  </div>
</template>

<script>
export default {
  name: "Notes",
  props: ["bug", "bugs"],
  mounted() {
    this.$store.dispatch("getNotes", this.$route.params.id);
  },
  computed: {
    notes() {
      return this.$store.state.notes;
    }
  },
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
    }
  }
};
</script>

<style></style>
