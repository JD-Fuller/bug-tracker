<template>
  <div class="note">
    <form @submit.prevent="createNote">
      <input v-model="note" type="text" placeholder="Add Note" required />
      <button type="submit">Add Note</button>
    </form>
    {{ notes }}
  </div>
</template>

<script>
export default {
  name: "Note",
  props: ["noteData"],
  computed: {
    notes() {
      return this.$store.state.notes;
    }
  },
  mounted() {
    this.$store.dispatch("getNotes", this.$route.params.id);
  },
  methods: {
    createNote() {
      let note = {
        content: this.note,
        bug: this.$route.params.id,
        reportedBy: this.$route.params.reportedBy
      };
      this.$store.dispatch("createNote", note);
      this.note = "";
    }
  }
};
</script>

<style scoped>
img {
  max-width: 100%;
}
.greyscale {
  filter: grayscale(1);
}
</style>