<template>
  <div class="home container-fluid">
    <div class="row" style="padding-bottom: 3rem;">
      <div
        class="col header-text"
        style="min-height: 5vh; font: all-small-caps bold 2em;"
      >
        B
        <img alt="Vue logo" src="../assets/logo.png" />G Tracker View
      </div>
      <div class="col buttons">
        <button class="btn btn-danger" data-toggle="modal" data-target="#one">
          <i class="fas fa-plus"></i>
          BUG
        </button>
        <BugModal id="one">
          <div slot="title">Add Bug</div>
          Bug Form
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
        <h2 style="text-align: left;">Open Bugs:{{ confirmation }}</h2>
        <bugList v-bind:bugs="bugs" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AddBug from "@/components/AddBug";
import BugList from "@/components/BugListComponent";
import BugModal from "@/components/BugModal";

export default {
  name: "home",
  props: ["bugs", "activebug"],
  mounted() {
    return this.$store.dispatch("getBugs");
  },
  components: {
    AddBug,
    BugList,
    BugModal
  },
  computed: {
    confirmation() {
      return this.$store.state.bugs.length;
    }
  }
};
</script>
<style>
header {
  background-color: rgb(134, 173, 173);
}
.header-text {
  text-align: left;
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
}
img {
  height: 1em;
}
</style>
