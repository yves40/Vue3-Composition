<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
    </div>
    <div id="nav">
      <!-- For params to be passed, need to set props:true in router/index.js-->
      <router-link :to="{name: 'calcref',      params: { preset1: 12, preset2: 87}}">Calculator Ref</router-link><br>
      <router-link :to="{name: 'calcreactive', params: { preset1: 98, preset2: 1 }}">Calculator Reactive</router-link><br>
      <router-link :to="{name: 'calccomputed', params: { preset1: 1, preset2: 98 }}">Calculator Computed</router-link><br>
      <router-link :to="{name: 'calctorefs',   params: { preset1: 99, preset2: 99 }}">Calculator ToRefs</router-link><br>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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
