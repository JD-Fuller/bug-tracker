<template>
  <div class="bug-details container-fluid">
    <header class="row">
      <div class="col">
        <router-link :to="{ name: 'home' }">
          <h1>B<img alt="Vue logo" src="../assets/logo.png" />gs</h1>
        </router-link>
      </div>
    </header>
    {{ bug }}
  </div>
</template>

<script>
export default {
  name: "BugDetails",
  mounted() {
    this.$store.dispatch("getBugById", this.$route.params.id);
  },
  computed: {
    bug() {
      return this.$store.state.activeBug;
    }
  }
};
</script>

<style></style>
