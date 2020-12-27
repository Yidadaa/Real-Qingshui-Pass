<template>
  <div class="login-page">
    <div class="progress-bar">
      <!-- <md-progress-bar md-mode="determinate" :md-value="amount" class="md-accent"></md-progress-bar> -->
    </div>
    <img src="../assets/wechat.svg" alt="" class="wechat-icon">
    <div class="login-tips">近期你已经授权登录过电子科技大学保卫处</div>
    <div class="login-tips">自动登录中</div>
  </div>
</template>

<script>
let timer = null

export default {
  name: 'LoginPage',
  props: {},

  data () {
    return {
      amount: 0
    }
  },

  mounted () {
    const { type } = this.$route.query
    const qText = type !== undefined ? `?type=${type}` : ''

    document.title = ''
    timer = setInterval(() => {
      if (this.amount < 100) this.amount += parseInt(Math.random() * 80)

      if (this.amount >= 100) {
        this.$router.replace('/home' + qText)
        timer && clearInterval(timer)
      }
    }, 300);
  }
}
</script>

<style lang="less" scoped>
.login-page {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  .progress-bar {
    width: 100%;
    margin-bottom: 125px;
    transform: scaleY(0.6);
  }

  .wechat-icon {
    height: 80px;
    width: 80px;
    margin-bottom: 30px;
  }

  .login-tips {
    font-size: 12px;
    width: 100%;
    text-align: center;
    line-height: 2;
  }
}
</style>