<template>
  <div id="app">
    <m-header></m-header>
    <router-view></router-view>
  </div>
</template>

<script>
import MHeader from 'components/m-header/m-header'

export default {
  name: 'app',
  components: {
    MHeader
  }
}
</script>

<style>
*{
  margin: 0px;
  padding:0px
}
a {
  color: #000000; 
  text-decoration:none
}
</style>
