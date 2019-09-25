<template>
  <span>{{time}}</span>
</template>

<script>
  export default {
    name: 'lb-time',
    data () {
      return {
        time:new Date().Format('yyyy-MM-dd hh:mm:ss')
      }
    },
    mounted() {
      let _this = this;
      this.timer = setInterval(() => {
        _this.time = new Date().Format('yyyy-MM-dd hh:mm:ss');
      }, 1000)
    },
    beforeDestroy() {
      if (this.time) {
        clearInterval(this.timer);
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
