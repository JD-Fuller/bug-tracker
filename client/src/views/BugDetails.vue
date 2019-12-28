<template>
  <div class="bugdetail container-fluid">
    <div class="row" style="padding-bottom: 3rem;">
      <div
        class="col header-text"
        style="min-height: 5vh; font: all-small-caps bold 2em;"
      >
        Active B <img alt="Vue logo" src="../assets/logo.png" />G View
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
      <div class="bugdetail col ml-5">
        <h1 style="text-align: left;">Active Bug: {{ activeBug.title }}</h1>
        <h2 style="text-align: left;">Status: {{ activeBug.closed }}</h2>
        <!-- <bugDetails v-bind:activeBug="activeBug" /> -->

        <activeBug v-bind:activeBug="activeBug" />
        {{ activeBug.title }}
        {{ notes }}
        <notes />
        <!-- {{ notelist }}
        <notelist /> -->
      </div>
    </div>
  </div>
</template>

<script>
import ActiveBug from "@/components/ActiveBug";
import BugModal from "@/components/BugModal";
import Notes from "@/components/Notes";
import NoteList from "@/components/NoteList";

export default {
  name: "bugDetail",
  data() {
    return {
      notes: ""
    };
  },
  props: ["bugs", "bug", "bugDetails", "activeBugs", "notelist"],
  mounted() {
    return this.$store.dispatch("getActiveBug", this.$route.params.id);
    console.log("from bugdetails - mounted");
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
    ActiveBug,
    BugModal,
    Notes,
    NoteList
  }
};
</script>

<style></style>
