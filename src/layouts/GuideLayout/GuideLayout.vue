<template>
  <div class="page-container">
    <head-bar></head-bar>
    <section class="main-wrapper">
      <side-bar></side-bar>
      <section class="main">
        <router-view></router-view>
      </section>
    </section>

  </div>
</template>

<script>
import HeadBar from "./HeadBar";
import SideBar from "./SideBar";
export default {
  components: {
    HeadBar,
    SideBar,
  },
};
</script>

<style lang="scss" scoped>
.page-container {
  position: relative;
  height: 100%;
  overflow-y: hidden;
}
.main-wrapper {
  position: relative;
  left: 0;
  top: 0;
  margin-top: 80px;
  width: 100%;
  height: calc(100% - 80px);
}
.main {
  margin-left: 240px;
  height: 100%;
  padding: 20px;
}
</style>