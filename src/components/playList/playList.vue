<template>
    <div class="playList">
      <div class="">

      </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'playlist',
  computed: {
    ...mapGetters([
      'playList'
    ])
  }

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
  background-color: white;
}
</style>