<template>
  <section class="page-wrapper">
    <div class="page-scroll">
      <ul>
        <li
          :class="{'active-item':currNavId == '1'}"
          @click="currNavId='1'"
          class="nav-item"
        >
          <router-link to="/guide/designIdea">设计原则</router-link>
        </li>
        <li
          :class="{'active-item':currNavId == '2'}"
          @click="currNavId='2'"
          class="nav-item"
        >
          <router-link to="/guide/nav">导航</router-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "side-bar",
  data() {
    return {
      currNavId: "1",
    };
  },
};
</script>

<style lang="scss" scoped>
.page-wrapper {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 240px;
  margin-top: 80px;
  border-right: 1px solid #f5f5f5;
  .page-scroll {
    height: 100%;
    padding: 20px;
    overflow-y: hidden;
    overflow-x: hidden;
  }
  .page-scroll:hover {
    overflow-y: auto;
  }
  .nav-group-title {
    font-size: 12px;
    color: #999;
    line-height: 26px;
    margin-top: 15px;
  }
  .nav-item > a {
    display: block;
    font-size: 16px;
    color: #333;
    font-weight: bold;
    height: 40px;
    line-height: 40px;
    margin-top: 15px;
    cursor: pointer;
  }
  .nav-item.active-item > a {
    color: #42b983;
  }
  .nav-group {
    li a.active {
      color: #42b983;
    }
    li {
      font-size: 14px;

      height: 40px;
      line-height: 40px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-weight: 400;
      cursor: pointer;
      a {
        color: #444;
      }
      &:hover a {
        color: #42b983;
      }
    }
  }
}
</style>