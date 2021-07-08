<template>
  <section class="page-wrapper">
    <div class="page-scroll">
      <ul>
        <li class="nav-item">
          <p
          >起步</p>
          <div class="nav-group">
            <ul>
              <li
                @click="currNavId='1'"
              >
                <router-link :class="{'active':currNavId=='1'}" :to="{path: '/component/about'}">介绍</router-link>
              </li>
              <li @click="currNavId='2'"><router-link :class="{'active':currNavId=='2'}" to="/component/quickStart">快速上手</router-link></li>
              <li @click="currNavId='3'"><router-link :class="{'active':currNavId=='3'}" to="/component/updateLog">更新日志</router-link></li>
            </ul>
          </div>
        </li>
        <li class="nav-item">
          <p>组件</p>
          <div class="nav-group">
            <div class="nav-group-title">pc端</div>
            <ul>
              <li><a href="#">echarts 图表</a></li>
              <li><a href="#">Menu 导航菜单</a></li>
              <li><a href="#">Loading 加载</a></li>
            </ul>
          </div>
          <div class="nav-group">
            <div class="nav-group-title">移动端</div>
            <ul>
              <li><a href="#">Table 表格</a></li>
              <li><a href="#">WeekCalendar 周日历</a></li>
            </ul>
          </div>
          <div class="nav-group">
            <div class="nav-group-title">全端</div>
            <ul>
              <li><a href="#">Avatar 头像</a></li>
              <li><a href="#">Button 按钮</a></li>
              <li><a href="#">ScrollBar 滚动条</a></li>
              <li><a href="#">CheckBox 复选框</a></li>
              <li><a href="#">Radio 单选框</a></li>
            </ul>
          </div>
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
  mounted () {
    this.$bus.$on('comeFromHeadbar',()=>{
      console.log('in');
      this.currNavId = '1'
    })
  },
  beforeDestroy(){
    this.$bus.$off('comeFromHeadbar')
  }
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
    overflow-y:hidden;
    overflow-x:hidden;
  }
  .page-scroll:hover {
    overflow-y:auto
  }
  .nav-group-title {
    font-size: 12px;
    color: #999;
    line-height: 26px;
    margin-top: 15px;
  }
  .nav-item > p {
    display: block;
    font-size: 16px;
    color: #333;
    font-weight: bold;
    height: 40px;
    line-height: 40px;
    margin-top: 15px;
  }
  .nav-group {
    li a.active {
      color: #42b983;
    }
    li {
      a {
        display: block;
        color: #444;
        font-size: 14px;
        height: 40px;
        line-height: 40px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-weight: 400;
        cursor: pointer;
      }
      &:hover a {
        color: #42b983;
      }
    }
  }
}
</style>