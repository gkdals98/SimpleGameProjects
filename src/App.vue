<template>
  <div id="app">
    <MainTab/>
  </div>
</template>

<script>
import MainTab from './main/MainTab'

export default {
  name: 'App',
  components: {
    MainTab
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  /*Dragable False Block*/
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  color: #2c3e50;
  /*align center and size fix*/
  margin-left: auto;
  margin-right: auto;
  margin-top : 0px;
  width: 800px;
  height: 550px;
}
</style>
