<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col header-text" style="min-height: 4vh;">
        B
        <img alt="Vue logo" src="../assets/logo.png" />G Tracker View
      </div>
    </div>
    <div class="row">
      <div class="col addbug">
        <addBug />
      </div>
    </div>
    <div class="row">
      <div class="col buglist ml-5">
        <bugList />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AddBug from "@/components/AddBug";
import BugList from "@/components/BugListComponent";

export default {
  name: "home",
  components: {
    AddBug,
    BugList
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
</style>
