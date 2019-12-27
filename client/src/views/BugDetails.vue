<template>
  <div class="bugDetail container-fluid">
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
      <div class="activeBug col ml-5">
        <h1 style="text-align: left;">Active Bug: {{ activeBug.title }}</h1>
        <h2 style="text-align: left;">Status: {{ activeBug.closed }}</h2>
        <activeBug v-bind:activeBugs="activeBugs" />
      </div>
    </div>
  </div>
</template>

<script>
import activeBug from "@/components/ActiveBug";
import BugModal from "@/components/BugModal";

export default {
  name: "bugDetail",
  mounted() {
    this.$store.dispatch("getBugById", this.$route.params.id);
    console.log("from buglist - mounted");
  },
  computed: {
    activeBug() {
      return this.$store.state.activeBug;
    },
    status() {
      //TODO change to activeNotes
      return this.$store.state.activeBug.length;
    }
  },
  components: {
    activeBug
  }
};
</script>

<style></style>
