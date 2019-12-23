<template>
  <div class="bug container-fluid">
    Bug shown here
    {{ bug }}
  </div>
</template>
<script>
export default {
  name: "bug",
  mounted() {
    this.$store.dispatch("getActiveBug", this.$route.params.id);
  },
  computed: {
    bug() {
      return this.$store.state.activeBug;
    }
  },
  components: {}
};
</script>
<style>
</style>
