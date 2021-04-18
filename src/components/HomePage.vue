<template>
  <div>
    <app-bar title="平安成电智慧通行" />
    <div :class="'homepage ' + (loading ? 'loading' : '')">
      <div class="snack-bar" :class="hiddenLoading && showSnack ? '' : 'snack-bar-hidden'">
        <md-toolbar class="md-elevation-5 snack-content">
          <div style="flex: 1">授权有效！</div>
          <md-button class="md-icon-button md-primary" @click="showSnack = false">关闭</md-button>
        </md-toolbar>
      </div>

      <div class="spinner" v-if="!hiddenLoading">
        <md-progress-spinner class="md-primary" :md-stroke="4"
          :md-diameter="50" md-mode="indeterminate"></md-progress-spinner>
        <div class="spinner-text">正在进行扫码登记</div>
      </div>

      <div class="pass-content" v-if="hiddenLoading">
        <div class="pass-result">{{ textContent }}</div>
        <md-list class="pass-list">
          <md-list-item>
            <svg class="list-icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true" tabindex="-1" title="Person" data-ga-event-category="material-icons" data-ga-event-action="click" data-ga-event-label="Person"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path></svg>
            <div class="md-list-item-text list-title">用户姓名</div>
            <div class="md-list-action list-text" @click="clickName">{{ name }}</div>
          </md-list-item>
          <md-list-item>
            <svg class="list-icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true" tabindex="-1" title="Group" data-ga-event-category="material-icons" data-ga-event-action="click" data-ga-event-label="Group"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"></path></svg>
            <div class="md-list-item-text list-title">登记类型</div>
            <div class="md-list-action list-text">{{ personType }}</div>
          </md-list-item>
          <md-list-item>
            <svg class="list-icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true" tabindex="-1" title="Timer" data-ga-event-category="material-icons" data-ga-event-action="click" data-ga-event-label="Timer"><path d="M15 1H9v2h6V1zm-4 13h2V8h-2v6zm8.03-6.61l1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42C16.07 4.74 14.12 4 12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9 9-4.03 9-9c0-2.12-.74-4.07-1.97-5.61zM12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"></path></svg>
            <div class="md-list-item-text list-title">登记时间</div>
            <div class="md-list-action list-text time-text">
              <div class="line-text">{{ timeStr }} {{ timeStr }}</div>
            </div>
          </md-list-item>
        </md-list>
      </div>

      <div class="pass-button" v-if="hiddenLoading">
        <md-button class="md-primary md-raised">
          <span class="pass-button-content" @click="$router.replace('/qr')">前往个人二维码</span>
        </md-button>
      </div>

      <div class="logo" v-if="hiddenLoading">
        <img src="../assets/logo.png" alt="" class="logo-img">
      </div>
    </div>
  </div>
</template>

<script>
import AppBar from './AppBar.vue'

export default {
  name: 'HomePage',

  components: {
    AppBar
  },

  data () {
    return {
      loading: true,
      hiddenLoading: false,
      showSnack: false,
      timeStr: new Date().toLocaleString(),
      name: '试着点我三次',
      personType: localStorage.getItem('personType') || '未设置',
      clickCount: 0
    }
  },

  computed: {
    textContent () {
      const { type } = this.$route.query
      const tText = type && type === 'out' ?
        localStorage.getItem('leaveText') :
        localStorage.getItem('enterText')
      return tText || '尚未设置，请点击用户姓名进入设置页'
    }
  },

  mounted () {
    document.title = '平安成电智慧通行'

    setTimeout(() => {
      this.loading = false

      setTimeout(() => {
        this.hiddenLoading = true
        this.showSnack = true

        setTimeout(() => {
          this.showSnack = false
        }, 3000)
      }, 500);
    }, 1000);

    // load name
    const localName = localStorage.getItem('name')
    if (localName) this.name = localName

    const rawDate = new Date()
    const hour = rawDate.getHours()
    const minutes = rawDate.getMinutes()
    const seconds = rawDate.getSeconds()
    const date = [rawDate.getFullYear(), rawDate.getMonth() + 1, rawDate.getDate()].map(v => v.toString().padStart(2, '0')).join('-')
    const time = [hour, minutes, seconds].map(v => v.toString().padStart(2, '0')).join(':')

    this.timeStr = `${date} ${time}`
  },

  methods: {
    clickName () {
      this.clickCount += 1
      if (this.clickCount > 3) {
        this.clickCount = 0
        this.$router.push('/setting')
      }
    }
  }
}
</script>

<style lang="less" scoped>

@keyframes run {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-200px);
  }
}

.homepage {
  display: flex;
  justify-content: center;
  padding-top: 40px;
  flex-wrap: wrap;
  position: relative;
  overflow: hidden;

  .spinner {
    transition: all ease .3s;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    transform: translateY(0);

    .spinner-text {
      width: 100%;
      font-size: 12px;
      text-align: center;
      margin-top: 10px;
      opacity: 1;
    }
  }

  .snack-bar {
    width: 100%;
    position: absolute;
    top: 0;
    transition: all ease .3s;

    .snack-content {
      padding: 0 20px;
      background: rgb(50, 50, 50);
      color: #fff;
    }
  }

  .snack-bar-hidden {
    transform: translateY(-100px);
  }

  .pass-content {
    width: 100%;

    .pass-result {
      padding: 30px 20px 40px 20px;
      box-sizing: border-box;
      color: rgb(0, 125, 0);
      font-size: 24px;
      font-weight: bold;
      border-bottom: 1px solid #ddd;
    }

    .pass-list {
      padding-right: 20px;
      .list-icon {
        height: 30px;
        width: 30px;
        opacity: 0.5;
      }

      .list-title {
        margin-left: 10px;
      }

      .list-text {
        text-align: right;

        font-weight: bold;
        font-size: 24px;

        &.time-text {
          font-size: 18px;
          width: 180px;
          overflow: hidden;
          color: rgb(11, 198, 167);
        }
      }

      .line-text {
        animation: linear infinite run 10s;
      }
    }
  }

  .pass-button {
    justify-content: center;

    .pass-button-content {
      padding: 0 10px;
      color: white;
    }
  }

  .logo {
    display: flex;
    justify-content: center;
    width: 100%;

    .logo-img {
      width: 60px;
      height: 60px;
      margin-top: 20px;
    }
  }

  &.loading {
    .spinner {
      transform: translateY(40vh);

      .spinner-text {
        opacity: 0;
      }
    }
  }
}

</style>