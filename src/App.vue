<template>
  <div id="app">
    <div style="margin-bottom: 20px">
      <router-link to="/">home|</router-link>
      <router-link to="/about">about</router-link>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
body {
  margin: 0;
}
ul {
  padding: 0;
}
li {
  list-style: none;
}
</style>
