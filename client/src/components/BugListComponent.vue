<template>
  <div class="table-responsive">
    <table class="table table-striped table-borderless table-hover">
      <thead class="thead-light">
        <tr>
          <th scope="col">1</th>
          <th scope="col" style="text-align: left;">Title</th>
          <th scope="col">Reported By</th>
          <th scope="col">Status</th>
          <th scope="col">Last Modified</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="bug in bugs" :key="bug._id">
          <router-link
            :to="{ name: 'bugs', params: { id: bug._id } }"
            @click="setActiveBug(bug)"
            style="padding-right: 15px"
          >
            <th scope="row">#</th>
            <td>{{ bug.title }}</td>
            <td>{{ bug.reportedBy }}</td>
            <td>{{ bug.closed }}</td>
            <td>{{ bug.updatedAt | formatDate }}</td>
          </router-link>
          <router-view />
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "BugList",
  data() {
    return {
      updatedAt: ""
    };
  },
  mounted() {
    this.$store.dispatch("getBugs");
  },
  methods: {
    setActiveBug(activeBug) {
      debugger;
      this.$store.dispatch("setActiveBug", activeBug);
    }
  },
  computed: {
    activeBugs() {
      return this.$store.state.activeBug;
    },
    bugs() {
      return this.$store.state.bugs;
    },
    status(bug) {
      debugger;
      for (var closed in bug) {
        if (closed != false) {
          return "Open";
        } else {
          return "Closed Out";
        }
      }
      // if (this.$store.state.bugs.get("closed" != false)) {
      //   return "Closed";
      // } else {
      //   return "Open";
      // }
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
table {
  text-align: end;
}
</style>
