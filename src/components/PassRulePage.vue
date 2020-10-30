<template>
  <div class="spinner">
    <md-progress-spinner class="md-primary" :md-stroke="4"
      :md-diameter="50" md-mode="indeterminate"></md-progress-spinner>
  </div>
</template>

<script>
export default {
  name: 'PassRulePage'
}
</script>

<style lang="less" scoped>
.spinner {
  display: flex;
  justify-content: center;
  padding: 100px;
}
</style>