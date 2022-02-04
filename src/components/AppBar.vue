<template>
  <div class="app-bar" v-if="showAppBar === 'true'" @click="document.documentElement.requestFullScreen()">
    <svg @click="back" class="close-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2007" width="200" height="200"><path d="M519.02036023 459.47959989L221.8941505 162.35411435a37.07885742 37.07885742 0 1 0-52.45354772 52.40502656l297.12476134 297.15010821L169.44060278 809.05863314a37.07885742 37.07885742 0 1 0 52.42964924 52.42892505l297.15010821-297.12476136 297.15010822 297.12476136a37.07885742 37.07885742 0 1 0 52.42892504-52.40430237l-297.12476135-297.1740067 297.12476135-297.12548553a37.07885742 37.07885742 0 1 0-52.42892504-52.42964924L519.04498291 459.47959989z" fill="#2c2c2c" p-id="2008"></path></svg>
    <div class="title">{{ title }}</div>
    <svg class="more-icon" style="vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1533"><path d="M96 522.666667m-96 0a96 96 0 1 0 192 0 96 96 0 1 0-192 0Z" fill="#212121" p-id="1534"></path><path d="M522.666667 522.666667m-96 0a96 96 0 1 0 192 0 96 96 0 1 0-192 0Z" fill="#212121" p-id="1535"></path><path d="M928 522.666667m-96 0a96 96 0 1 0 192 0 96 96 0 1 0-192 0Z" fill="#212121" p-id="1536"></path></svg>
  </div>    
</template>

<script>
// import screenfull from 'screenfull'

export default {
  props: {
    title: String
  },

  data() {
    return {
      showAppBar: localStorage.getItem('showAppBar')
    }
  },

  methods: {
    back () {
      this.$router.go(-1)
    },
    fullscreen () {
      console.log('fullscreen')
      // screenfull.on()
    }
  }
}
</script>

<style lang="less" scoped>
.app-bar {
  position: relative;
  padding: 20px 15px 15px 15px;
  background: #EDEDED;

  .close-icon {
    height: 20px;
    width: 20px;
    position: absolute;
    left: 15px;
    top: 20px;
  }

  .more-icon {
    height: 20px;
    width: 20px;
    position: absolute;
    right: 15px;
    top: 20px;
  }

  .title {
    text-align: center;
    font-weight: bolder;
    font-size: 17px;
  }
}
</style>