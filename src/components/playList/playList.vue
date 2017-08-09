<template>
    <div class="playList">
        misc-list
    </div>
</template>

<script>
export default {
  name: 'play-list'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
    margin: 0;
    padding: 0;
}
.playList{
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: wheat;
}
</style>