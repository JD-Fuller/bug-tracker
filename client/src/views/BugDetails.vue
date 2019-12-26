<template>
  <div class="bug-details container-fluid">
    <div class="row" style="padding-bottom: 3rem;">
      <div
        class="col header-text"
        style="min-height: 5vh; font: all-small-caps bold 2em;"
      >
        Active B
        <img alt="Vue logo" src="../assets/logo.png" />G View
      </div>
      <div class="col buttons">
        <button class="btn btn-danger" data-toggle="modal" data-target="#one">
          <i class="fas fa-plus"></i>
          Note
        </button>
        <BugModal id="one">
          <div slot="title"></div>
        </BugModal>
      </div>
    </div>
    <!-- <div class="row">
      <div class="col addbug">
        <addBug />
      </div>
    </div>-->
    <div class="row">
      <div class="buglist ml-5">
        <h2 style="text-align: left;">Status: {{ activeBug.closed }}</h2>
        <bugList />
      </div>

      <activebug />
    </div>
  </div>
</template>

<script>
import activebug from "../components/ActiveBug";
export default {
  name: "bug-details",
  mounted() {
    this.$store.dispatch("getBugById");
    console.log("from buglist - mounted");
  },
  computed: {
    activeBug() {
      return this.$store.state.activeBug;
    }
  },
  components: {
    activebug
  }
};
</script>

<style></style>
