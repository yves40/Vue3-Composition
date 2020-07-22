<template>
  <div id="app">
    <div id="header">{{Topmessage}}</div>
    <topmenu/>
    <div id="appzone">
      <router-view/>
    </div>
    <div id="footer">
      {{Version}}
    </div>
  </div>
</template>

<script>
  import topmenu from "./views/topmenu";

  export default {
    components: {
      topmenu
    },
    setup() {
      const Version = "App 1.40, Jul 22 2020";
      const Topmessage = "This is the Vue3 test App"

      return { Version, Topmessage }
    }  
  }
</script>
