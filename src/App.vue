<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  height: 100%;
}
body {
  margin: 0;
}
ul {
  padding: 0;
}
li {
  list-style: none;
}
div,
ul,
li,
section,
header,
main,
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
li {
  list-style: none;
}
/* 设置滚动条的样式 */
::-webkit-scrollbar {
  width: 3px;
  height: 10px;
  border-radius: 10px;
  background-color: #fff;
}
/* 滚动槽 */
::-webkit-scrollbar-track {
  background-color: #f7f7f7;
}

/* 滚动条滑块 */
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: #42b983;
}
</style>
