<template>
  <div id="big-screen">
    <vue-particles
      color="#dedede"
      :particleOpacity="0.5"
      :particlesNumber="60"
      shapeType="circle"
      :particleSize="2"
      linesColor="#dedede"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
      class="mas-canvas"
    >
    </vue-particles>
    <div class="container">

    </div>
  </div>
</template>

<script>
  export default {
    name: 'screen',
    components: {

    },
    data() {
      return {

      }
    },
    created(){
      this.showSlot()
    },
    methods: {
      showSlot() {
          this.$createDialog({
            type: 'confirm',
            icon: 'cubeic-alert',
            title: '欢迎使用',
            content: 'mas梅安森-移动端框架',
            confirmBtn: {
              text: '确定按钮',
              active: true,
              disabled: false,
              href: 'javascript:;'
            },
            cancelBtn: {
              text: '取消按钮',
              active: false,
              disabled: false,
              href: 'javascript:;'
            },
            onConfirm: () => {
              this.$createToast({
                type: 'warn',
                time: 1000,
                txt: '点击确认按钮'
              }).show()
            },
            onCancel: () => {
              this.$createToast({
                type: 'warn',
                time: 1000,
                txt: '点击取消按钮'
              }).show()
            }
          }).show()
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  #big-screen{
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: url('../../assets/images/bg-img.png')no-repeat transparent;
    background-size: cover;
    background-position: 100% 100%;
  }
  .mas-canvas{
    position: absolute;
    top:0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  .container{
    width: 100%;
    height: calc(98% - 0.8rem);
    z-index: 999;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    vertical-align: middle;
    overflow-y: auto;
  }
</style>
