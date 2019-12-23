<template>
  <div class="hello">{{description}}</div>
</template>

<script>
export default {
  name: "HomeComponent",
  data() {
    return {
      newBug: {
        description: "Check the inline specs on the rotary gerder",
        title: "Brake Pads",
        reportedBy: "Tommy Calahan"
      }
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
