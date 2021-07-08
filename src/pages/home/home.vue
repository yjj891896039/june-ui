<template>
  <div>
    home
  </div>
</template>

<script>
  export default {
    data() {
      return {
        timerIds: []
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