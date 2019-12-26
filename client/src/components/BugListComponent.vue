<template>
  <div class="table-responsive">
    <table class="row table table-striped table-borderless table-hover">
      <thead class="thead-light">
        <tr>
          <th scope="col">#</th>
          <th scope="col" style="text-align: left;">Title</th>
          <th scope="col">Reported By</th>
          <th scope="col">Status</th>
          <th scope="col">Last Modified</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="bug in bugs" :key="bug._id">
          <router-link :to="{ title: 'bug', params: { id: bug._id } }" @click="setActiveBug(bug)">
            <th scope="row">{{number}}</th>
            <td style="text-align: left;">{{ bug.title}}</td>
            <td>{{ bug.reportedBy }}</td>
            <td>{{ status }}</td>
            <td>{{bug.updatedAt}}</td>
          </router-link>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "BugList",
  mounted() {
    this.$store.dispatch("getBugs");
  },
  methods: {
    setActiveBug(bug) {
      this.$store.dispatch("setActiveBug", bug);
    }
  },
  computed: {
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
    },
    number() {
      return this.$store.state.bugs.indexOf();
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