<template>
  <div class="home container-fluid">
    <div class="row" style="padding-bottom: 3rem;">
      <div
        class="col header-text"
        style="min-height: 5vh; font: all-small-caps bold 2em;"
      >
        BUG Tracker
        <img alt="Vue logo" src="../assets/logo.png" />iew
      </div>

      <!-- <div class="col buttons">
        <button class="btn btn-success" data-toggle="modal" data-target="#one">
          <i class="fas fa-plus"></i>
          BUG
        </button>
        <BugModal id="one">
          <div slot="title">Add Bug</div>
          Bug Form
        </BugModal>
      </div> -->
    </div>
    <div class="row">
      <div class="col">
        <div
          class="shadow"
          style="margin-bottom: 2rem; background-color: #f0f2f3; padding: 1rem; text-align: left; width: 100%;"
        >
          <h1
            style="font-family: arial; font-variant: all-small-caps; text-align: left; font-size: 4rem;"
          >
            Log Bug
          </h1>
          <addBug />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="buglist ml-5">
        <hr />
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
