<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #c7ffdb;
  background-color: rgba(0, 0, 0, 0.925);
}

:root {
  background-color: rgba(0, 0, 0, 0.925);
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

.centeralign {
    display: block;
    margin-left: auto;
    margin-right: auto;
}
</style>
