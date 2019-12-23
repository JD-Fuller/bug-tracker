<template>
  <div class="bug" :class="{ greyscale: bugData.closed }">
    <router-link :to="{ name: 'bugDetails', params: { id: bugData.id } }">
      <p>{{ bugMakeUpperCase }} | {{ bugData.title }}</p>
    </router-link>
    <button @click="closed">Closed</button>
  </div>
</template>

<script>
export default {
  name: "Bug",
  props: ["bugData"],
  computed: {
    bugMakeUpperCase() {
      return this.bugData.title.toUpperCase();
    }
  },
  methods: {
    closed() {
      this.$store.dispatch("closed", this.bugData.id);
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