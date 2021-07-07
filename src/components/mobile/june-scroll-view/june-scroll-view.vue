<template>
  <div class="uni-scroll-view" v-on="$listeners">
    <div class="uni-scroll-view" ref="main" :style="scrollStyle">
      <div class="uni-scroll-view-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "june-scroll-view",
  data() {
    return {
      lastScrollTop: this.scrollTopNumber,
      lastScrollLeft: this.scrollLeftNumber,
      lastScrollToUpperTime: 0,
      lastScrollToLowerTime: 0,
      refresherHeight: 0,
      refreshRotate: 0,
      refreshState: "",
    };
  },
  props: {
    scrollY: {
      type: Boolean,
      default: false,
    },
    scrollX: {
      type: Boolean,
      default: false,
    },
    upperThreshold: {
      type: [Number, String],
      default: 50,
    },
    lowerThreshold: {
      type: [Number, String],
      default: 50,
    },
    scrollTop: {
      type: [Number, String],
      default: 0,
    },
    scrollLeft: {
      type: [Number, String],
      default: 0,
    },
  },
  computed: {
    scrollTopNumber() {
      return Number(this.scrollTop) || 0;
    },
    scrollLeftNumber() {
      return Number(this.scrollLeft) || 0;
    },
    upperThresholdNumber() {
      var val = Number(this.upperThreshold);
      return isNaN(val) ? 50 : val;
    },
    lowerThresholdNumber() {
      var val = Number(this.lowerThreshold);
      return isNaN(val) ? 50 : val;
    },
    scrollStyle() {
      if (this.scrollY) {
        return { overflow: "hidden auto" };
      }
      if (this.scrollX) {
        return { overflow: "auto hidden" };
      }
      return { overflow: "visible" };
    },
  },
  methods: {
    _handleScroll($event) {
      const target = $event.target;
      if (this.scrollY) {
        if (
          target.scrollTop <= this.upperThresholdNumber &&
          this.lastScrollTop - target.scrollTop > 0 &&
          $event.timeStamp - this.lastScrollToUpperTime > 200
        ) {
          this.$emit("scrolltoupper", $event, {
            direction: "top",
          });
          this.lastScrollToUpperTime = $event.timeStamp;
        }
        if (
          target.scrollTop + target.offsetHeight + this.lowerThresholdNumber >=
            target.scrollHeight &&
          this.lastScrollTop - target.scrollTop < 0 &&
          $event.timeStamp - this.lastScrollToLowerTime > 200
        ) {
          this.$emit("scrolltolower", $event, {
            direction: "bottom",
          });
          this.lastScrollToLowerTime = $event.timeStamp;
        }
      }
      this.lastScrollTop = target.scrollTop;
      this.lastScrollLeft = target.scrollLeft;
    },
  },
  mounted() {
    console.log("lastScrollTop:", this.lastScrollTop);
    let self = this;
    this.__handleScroll = function (event) {
      event.preventDefault();
      event.stopPropagation();
      self._handleScroll.bind(self, event)();
    };
    this.$refs.main.addEventListener("scroll", this.__handleScroll);
  },
};
</script>

<style lang="scss" scoped>
uni-scroll-view {
  display: block;
  width: 100%;
}

.uni-scroll-view,
.uni-scroll-view-content {
  width: 100%;
  height: 100%;
}
.uni-scroll-view {
  position: relative;
  -webkit-overflow-scrolling: touch;
  max-height: inherit;
}
</style>