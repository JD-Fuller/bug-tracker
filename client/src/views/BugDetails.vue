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
        <button
          class="fas fa-edit"
          data-toggle="modal"
          data-target="#one"
        ></button>
        <BugModal id="one">
          <div slot="title"></div>
        </BugModal>
      </div>
    </div>
    <div class="row">
      <div class="bugdetail col ml-5">
        <div style="margin-bottom: 2rem; background-color: #f0f2f3;">
          <button
            class="fas fa-edit"
            style="float: right; font-size: 2em; border-style: none; background-color: #f0f2f3"
            type="submit"
          ></button>
          <h1 style="text-align: left;">Bug: {{ activeBug.title }}</h1>

          <h2 style="text-align: left;">
            Reported By: {{ activeBug.reportedBy }}
          </h2>
          <h2 style="text-align: left;">Status: {{ activeBug.closed }}</h2>
          <h2 style="text-align: left;">Description:</h2>

          <textarea
            rows="5"
            cols="100"
            style="text-align: left;"
            v-model="activeBug.description"
            placeholder="Bug details..."
          ></textarea>
        </div>

        <!-- <bugDetails v-bind:activeBug="activeBug" /> -->

        <!--  This adds the table header to the screen -- coming from mounted-->
        <!-- <activeBug v-bind:activeBug="activeBug" /> -->
        <!-- {{ activeBug.title }}{{ activeBug.reportedBy }} -->
        <!-- {{ notes }} -->

        <!-- Adds Note input field from Components/notes -->
        <notes />
        <!-- {{ notelist }}
        <notelist /> -->
        <noteList />
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
      return this.$store.state.activeNote;
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
