<template>
  <div id="app">
    <div id="nav">
      <router-link style="padding-right: 15px" to="/">Home</router-link>
      <router-link style="padding-right: 15px" to="/notes">Bug Details</router-link>
      <router-link style="padding-right: 15px" to="/about">About</router-link>
      <router-view />
    </div>
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
