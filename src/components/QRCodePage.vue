<template>
<div>
  <app-bar title="平安成电智慧通行"></app-bar>
  <div class="qr-page-wrapper">
      <div class="qr-page md-elevation-2">
      <div class="qr-title">行人二维码</div>
      <img src="../assets/qr.jpg" alt="" class="qr-img">
      <div class="qr-text">二维码剩余有效时间{{time}}秒</div>
      <md-button class="md-primary md-raised">
        <span class="qr-button-content" @click="$router.push('/rule')">查看通行规则</span>
      </md-button>
    </div>
  </div>
</div>
</template>

<script>
import AppBar from './AppBar.vue'

export default {
  name: 'QRCodePage',
  components: {
    AppBar
  },

  data () {
    return {
      time: 300
    }
  },

  mounted () {
    setInterval(() => {
      this.time -= 2
    }, 2000);
  }
}
</script>

<style lang="less" scoped>
.qr-page-wrapper {
  padding: 20px;
}

.qr-page {
  padding: 10px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  .qr-title {
    font-size: 20px;
    font-weight: bolder;
    width: 100%;
    text-align: center;
  }

  .qr-img {
    width: 180px;
    height: 180px;
    margin: 20px 0 10px 0;
  }

  .qr-text {
    width: 100%;
    text-align: center;
  }

  .qr-button-content {
    color: white;
    padding: 10px;
  }
}
</style>