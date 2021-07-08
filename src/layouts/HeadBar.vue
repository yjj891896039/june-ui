<template>
  <section class="header">
    <div class="container-wrapper">
      <div class="header-content">
        <h2>
          <a href="/home">
            <img
              src="@/assets/panda.svg"
              alt=""
            >
            <span class="head-title">welcome to june-ui</span>
          </a>
        </h2>
        <ul>
          <li>
            <el-input
              size="small"
              prefix-icon="el-icon-search"
              placeholder="搜索文档..."
            ></el-input>
          </li>
          <li @click="currNavIds = '1'" :class="{'active-item':currNavIds == '1'}"><a href="#">指南</a></li>
          <li @click="currNavIds = '2'" :class="{'active-item':currNavIds == '2'}"><a href="#">组件</a></li>
          <li @click="currNavIds = '3'" :class="{'active-item':currNavIds == '3'}"><a href="https://cn.vuejs.org/">vue官方文档</a></li>
          <li @click="currNavIds = '4'" :class="{'active-item':currNavIds == '4'}"><a href="https://element.eleme.cn/#/zh-CN/">element官方文档</a></li>
          <li>
            <div class="nav-gap">
            </div>
          </li>
          <li>
            <el-dropdown trigger="click" style="padding: 0 22px">
              <span class="el-dropdown-link">
                v1.0.0<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>v1.0.0</el-dropdown-item>
                <el-dropdown-item>v1.0.1</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </li>
          <li>
            <a
              style="opacity: 1;"
              href="https://github.com/yjj891896039/june-ui"
            >
              <img
                src="@/assets/github.svg"
                alt=""
              >
            </a>

          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "head-bar",
  data() {
    return {
        currNavIds: '1'
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/css/animate.scss";

.header {
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 1500;
}
.container-wrapper {
  position: relative;
  left: 0;
  top: 0;
  height: 80px;
  line-height: 80px;
  border-bottom: 1px solid #f5f5f5;
  background-color: #fff;
  width: 100%;
}
.header-content {
  height: 100%;
  padding: 0 20px;
  .head-title {
    animation: pulse 1s linear 1s;
  }
  h2 {
    float: left;
    font-size: 23px;
    font-weight: 400;
    a {
      color: #333;
      display: block;
      img {
        vertical-align: middle;
        margin-right: 10px;
        animation: ratate 1s linear 1s;
      }
      span {
        line-height: 80px;
        display: inline-block;
      }
    }
  }

  ul {
    float: right;
    &::before {
      content: "";
      display: table;
    }
    &::after {
      clear: both;
    }
    li {
      float: left;
      position: relative;
      cursor: pointer;
      a:hover,
      &:hover {
        opacity: 1;
      }
      .nav-gap {
        padding: 0 22px;
        width: 1px;
        height: 80px;
        &::before {
          content: "";
          position: absolute;
          top: calc(50% - 8px);
          width: 1px;
          height: 16px;
          background: #ebebeb;
        }
      }
      img {
        width: 22px;
        height: 22px;
        vertical-align: sub;
      }
      a {
        color: #42b983;
        opacity: 0.5;
        display: block;
        padding: 0 22px;
      }
    }
    li.active-item {
      a {
        opacity: 1;
      }
      &::after {
        content: "";
        display: inline-block;
        position: absolute;
        bottom: 0;
        left: calc(50% - 15px);
        width: 30px;
        height: 2px;
        background: #42b983;
      }
    }
  }
}
</style>