<template>
  <table class="table table-striped table-borderless table-hover">
    <h3>Active Bug</h3>
    <thead class="thead-light">
      <tr>
        <!-- <th scope="col">1</th> -->
        <th scope="col" style="text-align: left;">Title</th>
        <th scope="col">Reported By</th>
        <th scope="col">Status</th>
        <th scope="col">Last Modified</th>
      </tr>
    </thead>
    <tbody>
      <tr class="table" v-for="activebug in activebugs" :key="activebug._id">
        <!-- <th scope="row">#</th> -->
        <td>{{ activebug.title }}</td>
        <td>{{ activebug.reportedBy }}</td>
        <td>{{ activebug.closed }}</td>
        <td>{{ activebug.updatedAt | formatDate }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "ActiveBug",
  mounted() {
    return this.$store.dispatch("getBugById", this.$route.params.id);
  },
  computed: {
    activeBugs() {
      return this.$store.state.activeBug;
    },
    // bugs() {
    //   return this.$store.state.bugs;
    // },
    status(bug) {
      for (var closed in bug) {
        if (closed != false) {
          return "Open";
        } else {
          return "Closed Out";
        }
      }
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
