<template>
  <topmenu></topmenu>
    <div class="about">
    <h1>Learn Vue3</h1>
    <p>
      Test some new Vue3 API features<br>
      Ref, Computed, Reactive, Refs, etc.
    </p>
  </div>
</template>

<script>
  import topmenu from "./topmenu"

  export default {
    name: 'Home',
    components: {
      topmenu,
    },
  }
</script>
