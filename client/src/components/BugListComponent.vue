<template>
  <div class="table-responsive shadow" id="bug-table">
    <input
      type="text"
      id="bugFilter"
      v-model="search"
      placeholder="Add filter criteria..."
    />
    <table
      class="table table-striped table-borderless table-hover"
      id="bugTable"
    >
      <thead class="thead-light">
        <tr>
          <th scope="col" style="text-align: left;">Title</th>
          <th scope="col">Reported By</th>
          <th scope="col">Status</th>
          <th scope="col">Last Modified</th>
        </tr>
      </thead>
      <tbody>
        <tr class="table" v-for="bug in bugs" :key="bug._id">
          <router-link
            :to="{ name: 'bugs', params: { id: bug._id } }"
            v-on:click="setActiveBug(bug._id) + setAllNotes(bug._id)"
          >
            <td style="text-align: left;">{{ bug.title }}</td>
          </router-link>
          <td>{{ bug.reportedBy }}</td>
          <td class="status">{{ bug.closed }}</td>
          <td>{{ bug.updatedAt | formatDate }}</td>
          <!-- <router-view /> -->
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
      search: "",
      updatedAt: ""
    };
  },
  mounted() {
    debugger;
    return this.$store.dispatch("getBugs");
    console.log("buglistcomponent - mounted getBugs");
  },
  methods: {
    setActiveBug() {
      debugger;
      this.$store.dispatch("setActiveBug"), this.$route.params.id;
    },
    setAllNotes() {
      debugger;
      this.$store.dispatch("setAllNotes"), this.$route.params.id;
    }
  },
  computed: {
    // Returns all bugs to the list
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
    filterTable() {
      var input, filter, table, tr, td, i, txtValue;
      input = document.getElementById("bugFilter");
      filter = input.value.toUpperCase();
      table = document.getElementById("bugTable");
      tr = table.getElementsByTagName("tr");

      for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
          txtValue = td.textcontent || td.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = ";";
          } else {
            tr[i].style.display = "none";
          }
        }
      }
    },

    closedStatus() {
      var classClosed = "status";
      var color;
      var status = document.getElementsByClassName();
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
.status {
  color: red;
  font-variant-caps: all-small-caps;
}

#bugFilter {
  width: 100%;
  font-size: 16px;
}
#bugTable {
  border-collapse: collapse;
  width: 100%;
}
</style>
