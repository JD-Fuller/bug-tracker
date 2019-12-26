<template>
  <div class="buglist container-fluid">
    <div class="row">
      <div class="col"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BugList",
  mounted() {
    this.$store.dispatch("getBugs");
    console.log("from buglist - mounted");
  },
  computed: {
    bugs() {
      return this.$store.state.bugs;
    }
    // closeBug() {
    //   this.bugs.filter(c => bug.closed);
    //   console.log("Bug was closed");
    // }
  },
  methods: {}
};
</script>

<style></style>
