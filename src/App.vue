<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import "~vue-material/dist/theme/engine"; // Import the theme engine

@include md-register-theme("default", (
  primary: md-get-palette-color(teal, A700), // The primary color of your application
  accent: md-get-palette-color(green, A700) // The accent or secondary color
));

@import "~vue-material/dist/theme/all"; // Apply the theme

body {
  background: white;
}
</style>