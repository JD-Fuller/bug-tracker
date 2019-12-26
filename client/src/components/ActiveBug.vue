<template>
  <div class="activeBug container-fluid">
    <div class="row">
      <div class="col">
        <h3>Active Bug</h3>
        {{ activeBug }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ActiveBug",
  computed: {
    activeBug() {
      return this.$store.state.activeBug;
    }
  }
};
</script>

<style></style>
