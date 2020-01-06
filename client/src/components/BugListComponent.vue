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
          <th @click="sort('title')" scope="col" style="text-align: left;">
            Title
          </th>
          <th @click="sort('reportedBy')" scope="col">Reported By</th>
          <th @click="sort('closed')" scope="col">Status</th>
          <th @click="sort('updatedAt')" scope="col">Last Modified</th>
        </tr>
      </thead>
      <tbody>
        <tr class="table" v-for="bug in sortedBugs" :key="bug._id">
          <router-link :to="{ name: 'bugs', params: { id: bug._id } }">
            <td style="text-align: left;">{{ bug.title }}</td>
          </router-link>
          <td>{{ bug.reportedBy }}</td>
          <td class="open" v-if="bug.closed === false">Open</td>
          <td class="closed" v-else>Closed</td>
          <td>{{ bug.updatedAt | formatDate }}</td>
          <!-- <router-view /> -->
        </tr>
      </tbody>
    </table>
    <!-- debug: sort={{ currentSort }}, dir={{ currentSortDir }} -->
  </div>
</template>

<script>
export default {
  name: "BugList",
  data() {
    return {
      bugs: [],
      search: "",
      updatedAt: "",
      currentSort: "title",
      currentSortDir: "asc"
    };
  },
  mounted() {
    return this.$store.dispatch("getBugs");
    console.log("buglistcomponent - mounted getBugs");
  },
  methods: {
    setActiveBug() {
      this.$store.dispatch("setActiveBug"), this.$route.params.id;
    },
    setAllNotes() {
      this.$store.dispatch("setAllNotes"), this.$route.params.id;
    },
    sort(s) {
      if (s === this.currentSort) {
        this.currentSortDir = this.currentSortDir === "asc" ? "desc" : "asc";
      }
      this.currentSort = s;
    }
  },
  computed: {
    // Returns all bugs to the list
    // bugs() {
    //   return this.$store.state.bugs;
    // },
    status() {
      if (this.$store.state.activeBug.closed === true) {
        return "Closed";
      } else {
        return "Open";
      }
    },
    // if (this.$store.state.bugs.get("closed" != false)) {
    //   return "Closed";
    // } else {
    //   return "Open";
    // }
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
    },
    sortedBugs() {
      return this.$store.state.bugs.sort((a, b) => {
        let modifier = 1;
        if (this.currentSortDir === "desc") modifier = -1;
        if (a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
        if (a[this.currentSortDir] > b[this.currentSort]) return 1 * modifier;
        return 0;
      });
    }
  }
};
</script>
<style scoped>
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
th {
  cursor: pointer;
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
.open {
  color: green;
}
.closed {
  color: red;
}
</style>
