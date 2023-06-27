<template>
  <div>
    home is home page (version3)
  </div>
</template>

<script>
  export default {
    data() {
      return {
        timerIds: [1,2,3,4]
      }
    },
    mounted () {
      // this.timerIds = []
      // this.$loading.show();
      // const i = setTimeout(() => {
      //   this.$loading.hide();
      // }, 3000);
      // this.timerIds.push(i)
    },
    beforeDestroy(){
      // this.timerIds.forEach(i => {
      //    clearTimeout(i)
      // });
    }
  }
</script>

<style lang="scss" scoped>

</style>