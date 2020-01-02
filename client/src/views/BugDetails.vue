<template>
  <div class="bugdetail container-fluid">
    <!-- <div v-if="loading" class="loading">Loading...</div> -->
    <!-- <div v-if="error" class="error">{{ error }}</div> -->

    <div v-if="liveBug" class="content">
      <div class="row" style="padding-bottom: 3rem;">
        <div
          class="col header-text"
          style="min-height: 5vh; font: all-small-caps bold 2em;"
        >
          Active Bug <img alt="Vue logo" src="../assets/logo.png" />iew
        </div>
      </div>
      <div class="row">
        <div class="bugdetail col ml-5">
          <div
            class="shadow"
            style="margin-bottom: 2rem; background-color: #f0f2f3; padding: 1rem; text-align: left;"
          >
            <div class="button">
              <button
                class="fas fa-edit"
                data-toggle="modal"
                data-target="#editBug"
                style="float: right; font-size: 2em; border-style: none; background-color: #f0f2f3"
              ></button>
              <editModal id="editBug">
                <div slot="title">Edit Bug</div>
              </editModal>
            </div>

            <h1 style="text-align: left;">Bug: {{ liveBug.title }}</h1>

            <h2 style="text-align: left;">
              Reported By: {{ liveBug.reportedBy }}
            </h2>
            <h2 style="text-align: left;">Status: {{ liveBug.closed }}</h2>
            <h2 style="text-align: left;">Description:</h2>

            <textarea
              rows="4"
              cols="80"
              style="text-align: left; justify-content: left; align-items: left;"
              v-model="liveBug.description"
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
      <!-- <div class="row liveBugs">
      <div class="col-10" v-for="liveBug in liveBugs" :key="liveBug.id">
        <activeBug :activeBugData="liveBug" />
      </div>
    </!-->
      -->
    </div>
  </div>
</template>

<script>
// import ActiveBug from "@/components/ActiveBug";
import EditModal from "@/components/EditBugModal";
import BugModal from "@/components/BugModal";
import Notes from "@/components/Notes";
import NoteList from "@/components/NoteList";
// import ActiveBug from "@/components/ActiveBug";

export default {
  name: "bugDetail",
  data() {
    return {
      // loading: false,
      // activeBug: null,
      // error: null,
      notes: "",
      editModal: {}
    };
  },
  // created() {
  //   debugger;
  //   this.fetchData();
  // },
  // watch: {
  //   $route: "fetchData"
  // },
  // methods: {
  //   fetchData() {
  //     debugger;
  //     this.error = this.activeBug = null;
  //     this.loading = true;
  //     this.liveBugs(this.$route.params.id, (err, activeBug) => {
  //       this.loading = false;
  //       if (err) {
  //         this.error = err.toString();
  //       } else {
  //         this.activeBug = activeBug;
  //       }
  //     });
  //   }
  // },
  props: ["bugs", "bug", "bugDetails", "activeBugs", "notelist"],
  mounted() {
    this.$store.dispatch("getActiveBug", this.$route.params.id);

    // return this.$store.dispatch("getActiveBug", this.$route.params.id);
    console.log("from bugdetails - mounted");
  },
  computed: {
    liveBug() {
      return this.$store.state.activeBug;
    }
    // activeBug() {
    //   return this.$store.state.activeBug;
    // },
    // status() {
    //   //TODO change to activeNotes
    //   return this.$store.state.activeNote;
    // }
  },
  components: {
    // ActiveBug,
    BugModal,
    Notes,
    NoteList,
    // ActiveBug,
    EditModal
  }
};
</script>

<style></style>
