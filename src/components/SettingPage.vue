<template>
  <div class="setting-page">
    <app-bar title="设置" />

    <div class="page-content">
      <md-list>
        <md-subheader>登录页信息</md-subheader>
        <md-list-item>
          <md-field>
            <label>入校提示信息</label>
            <md-input v-model="enterText"></md-input>
          </md-field>
        </md-list-item>

        <md-list-item>
          <md-field>
            <label>出校校提示信息</label>
            <md-input v-model="leaveText"></md-input>
          </md-field>
        </md-list-item>

        <md-list-item>
          <md-field>
            <label>身份类型</label>
            <md-input v-model="personType"></md-input>
          </md-field>
        </md-list-item>

        <md-list-item>
          <md-field>
            <label>名字</label>
            <md-input v-model="name"></md-input>
          </md-field>
        </md-list-item>

        <md-divider></md-divider>

        <md-subheader>其他设置</md-subheader>
        <md-list-item>
          <div class="md-list-item-text">
            <span>展示 AppBar</span>
            <span>如在微信内使用，则无需展示 AppBar</span>
          </div>

          <md-switch v-model="showAppBar"></md-switch>
      </md-list-item>
      </md-list>
    </div>
  </div>
</template>

<script>
import AppBar from './AppBar.vue'

const fields = {
  enterText: '研究生用户，入校授权有效！',
  leaveText: '研究生用户，出校登记有效！',
  personType: '研究生（硕士）',
  name: '试着点我三次',
  showAppBar: true
}

function s2b (s) {
  const table = {
    'true': true,
    'false': false
  }
  return (s in table) ? table[s] : s;
}

export default {
  components: {
    AppBar
  },

  data() {
    return Object.keys(fields).reduce((pre, k) => {
      return {
        ...pre,
        [k]: '加载中'
      }
    }, {})
  },

  watch: Object.keys(fields).reduce((ret, k) => {
    return {
      ...ret,
      [k]: (val) => {
        localStorage.setItem(k, val)
        console.log('writing', k, val)
      }
    }
  }, {}),

  mounted() {
    Object.keys(fields).forEach(key => {
      const value = localStorage.getItem(key)
      console.log('getting', key, value)
      if (value !== null) {
        this[key] = s2b(value)
      } else {
        this[key] = fields[key]
      }
    })
  }
}
</script>

<style lang="less" scoped>

</style>