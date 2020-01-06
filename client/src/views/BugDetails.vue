<template>
  <div class="bugdetail container-fluid">
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
        <div class="bugdetail col-12">
          <div
            class="shadow"
            style="margin-bottom: 2rem; background-color: #f0f2f3; padding: 1rem; text-align: left; width: 100%;"
          >
            <button
              id="status"
              @submit.prevent="deleteBug()"
              class="btn-danger"
              style="float: right; font-size: 2em; border-style: none; font-family: montserrat; font-variant: all-small-caps;"
              type="submit"
              v-on:click="deleteBug"
            >
              <i class="fas fa-trash-alt"></i>
              Delete Bug
            </button>
            <p id="cb"></p>
            <!-- <removeNote /> -->
            <!-- <button
              id="status"
              class="btn-danger"
              style="float: right; font-size: 2em; border-style: none; font-family: montserrat; font-variant: all-small-caps;"
              type="submit"
              v-on:click="alertDisplay"
            >
              <i class="fas fa-trash-alt"></i>
              Close Bug
            </button> -->

            <h1 style="text-align: left;">Bug: {{ liveBug.title }}</h1>

            <h2 style="text-align: left;">
              Reported By: {{ liveBug.reportedBy }}
            </h2>
            <h2 style="text-align: left;">
              Status:
              <h2 class="open" v-if="liveBug.closed === false">Open</h2>
              <h2 class="closed" v-else>Closed</h2>
            </h2>
            <h2 style="text-align: left;">Description:</h2>

            <textarea
              rows="4"
              cols="80"
              style="text-align: left; justify-content: left; align-items: left;"
              v-model="liveBug.description"
              placeholder="Bug details..."
            ></textarea>
          </div>
          <div
            class="col-12 shadow"
            style="margin-bottom: 2rem; background-color: #f0f2f3; padding: 1rem; text-align: left;"
          >
            <h1 style="font-variant: all-small-caps">Edit Bug</h1>
            <editModal id="editBug">
              <div slot="title">Edit Bug</div>
            </editModal>
          </div>
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
  mounted() {
    this.$store.dispatch("getActiveBug", this.$route.params.id);
  },
  // vuetify: new Vuetify(),
  data() {
    return {
      // liveBug: {},
      reportedBy: "",
      title: "",
      closed: "",
      description: "",
      notes: "",
      editModal: {}
      // status: false
    };
  },
  methods: {
    deleteBug() {
      var result = confirm("Are you sure you want to close this bug?");
      if (result == true) {
        this.$store.dispatch("closeBug", this.liveBug.id);
      }
    }
    // alertDisplay() {
    //   $swal({
    //     title: "Are you sure?",
    //     text: "You will not be able to open this bug again",
    //     type: "warning",
    //     confirmButtonText: "Yes!",
    //     showCancelButton: true
    //   }).then(result => {
    //     if (result.value) {
    //       this.deleteBug();
    //     } else if (result.dismiss === "cancel") {
    //       swal("Cancelled", "Your stay here :)", "error");
    //     }
    //   });
    // }
  },
  props: ["bugs", "bug", "bugDetails", "activeBugs", "notelist"],
  computed: {
    liveBug() {
      return this.$store.state.activeBug;
    },
    isDisabled() {
      if (this.$store.state.activeBug.closed) {
        return false;
      } else {
        return true;
      }
    },
    status() {
      if (this.$store.state.activeBug.closed === true) {
        return "Closed";
      } else {
        return "Open";
      }
    },
    disableButton() {
      if (this.$store.state.activeBug) {
        document.getElementById("button").disabled = true;
      } else {
        document.getElementById("button").disabled = false;
      }
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

<style>
.open {
  color: green;
}
.closed {
  color: red;
}
</style>
