<template>
  <div class="buglist container-fluid">
    <div class="row">
      <div class="col">
        <ol>
          <li v-for="bug in bugs" :key="bug.id">{{ bug.title | bug.description }}</li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BugList",
  computed: {
    bugs() {
      return this.$store.state.bugs;
    }
    // closeBug() {
    //   this.bugs.filter(c => bug.closed);
    //   console.log("Bug was closed");
    // }
  },
  methods: {},
  mounted() {
    this.$store.dispatch("getBugs");
    console.log("from buglist - mounted");
  }
};
</script>

<style></style>
