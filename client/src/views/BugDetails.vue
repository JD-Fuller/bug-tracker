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
              :disabled="isDisabled"
              v-on:click="deleteBug"
            >
              <i class="fas fa-trash-alt"></i>
              Delete Bug
            </button>

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
          <!-- <div class="row"> -->
          <button id="button" @click="showAlert">
            Delete Bug
          </button>
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
  data() {
    return {
      notes: "",
      editModal: {},
      status: false
    };
  },

  methods: {
    deleteBug() {
      debugger;
      this.$store.dispatch("closeBug", this.liveBug.id);
    },
    showAlert() {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(result => {
        if (result.value) {
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      });
    }
  },
  props: ["bugs", "bug", "bugDetails", "activeBugs", "notelist"],
  mounted() {
    this.$store.dispatch("getActiveBug", this.$route.params.id);

    // return this.$store.dispatch("getActiveBug", this.$route.params.id);
    console.log("from bugdetails - mounted");
  },
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

<style></style>
