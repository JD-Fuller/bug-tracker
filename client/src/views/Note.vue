<template>
  <div class="note container-fluid">
    <div class="row">
      <div class="col"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "notes",
  data() {
    return {
      newNote: {
        content: "",
        bug: "",
        reportedBy: "",
        flagged: ""
      }
    };
  }
};
</script>

<style>
</style>