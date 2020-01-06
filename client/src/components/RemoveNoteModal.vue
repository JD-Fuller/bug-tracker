<template>
  <button v-on:click="alertDislay">Remove Note</button>
</template>

<script>
export default {
  name: "removeNote",
  data() {
    return {};
  },
  methods: {
    setActiveNote() {
      debugger;
      this.$store.dispatch("setActiveNote"), this.$route.params.id;
    }
    // emitRoute(){
    //   this.$router.push('bugs');
    // }
  },
  computed: {
    confirmation() {
      return this.$store.state.bugs.length;
    },
    bugs() {
      return this.$store.state.bugs;
    },
    activeBug() {
      return this.$store.state.activeBug;
    }
  },
  props: ["id"]
};
</script>

<style scoped>
body {
  background-color: aliceblue;
  font-family: sans-serif;
  text-align: center;
}
button {
  background-color: cadetblue;
  color: whitesmoke;
  border: 0;
  -webkit-box-shadow: none;
  box-shadow: none;
  font-size: 18px;
  font-weight: 500;
  border-radius: 7px;
  padding: 15px 35px;
  cursor: pointer;
  white-space: nowrap;
  margin: 10px;
}
img {
  width: 200px;
}
input[type="text"] {
  padding: 12px 20px;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-sizing: border-box;
}
h1 {
  border-bottom: solid 2px grey;
}
#success {
  background: green;
}
#error {
  background: red;
}
#warning {
  background: coral;
}
#info {
  background: cornflowerblue;
}
#question {
  background: grey;
}
</style>
