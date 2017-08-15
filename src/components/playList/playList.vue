<template>
    <div class="playList" >
      <div class="playList-head" :style="'backgroundImage:'+'url('+url+')'">
        <div class="playList-innerhead">
          <div class="playList-cover"><img :src=" playListData.coverImgUrl "></img></div>
          <div class="playList-title"></div>         
        </div>
        <div class="toolbar"></div>
      </div>
    </div>
</template>

<script>
// import {mapGetters} from 'vuex'
import api from '../../api/api.js'

export default {
  // data() {
  //   playListData:[]
  // },
  created: function() {
    console.log(this.$route.params.id)
    api.getPlayListData(this.$route.params.id).then(response => {
      this.playListData = response.data.playlist
      this.url = this.playListData.coverImgUrl
    }, response => {
      console.log('Error')
    })
  },
  data() {
    return {
      playListData: [],
      url: []
    }
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
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: white;
  
}
.playList-head{
  display: flex;
  flex-direction:column;
  height: 40%;
  background-size: cover;
  overflow: hidden;
  border: 4px solid red;
}
.playList-innerhead{
  display: flex;
  height: 20%;
  flex: auto; 
  margin: 10% 5% 5% 5%;
  z-index:8;
  filter: blur(0px); 
}
.playList-cover{
  flex: 1 1;
 
  padding: 0px 80px 0px 0px
}

.playList-cover img{
   width: 100%;
   height: 100%;
}

.playList-title{
  flex: 1
}
.toolbar{
  flex: 1;
  width: 100%;
}

</style>