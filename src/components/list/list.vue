<template>
  <div class="highquality">
    <div class="highqualityBg" :style="'backgroundImage:'+'url('+BgUrl+')'"></div>
      <div class="list-Img">
        <img :src="highqualityList[0].coverImgUrl" alt="#">
      </div>
     <div class="list-title">

     </div>
      
  </div>

</template>

<script>
import api from '../../api/api'
export default {
  name: 'music-list',
  data() {
    return {
      highqualityList: [],
      BgUrl: []
    }
  },
  created: function () {
    api.getApidata('top/playlist/highquality').then(response => {
      this.highqualityList = response.data.playlists
      this.BgUrl = this.highqualityList[0].coverImgUrl
      console.log(this.highqualityList)
    }, response => {
      console.log('Error')
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  margin: 0;
  padding: 0;
}

.highquality{
  height: 320px;
  overflow:hidden;
}


.highqualityBg{
  display: flex;
  width: 100%;
  height: 100%;
  filter:blur(150px);
  background-size: cover;
}
.list-Img{
  width: 30%;
  height: 30%;
  position: absolute;
  top: 20%;

}

.list-Img img{
  width: 100%;
  height: 100%;
}
.list-title{
  width: 70%;
  height: 80%;
  margin: 60px 30px 20px 20px;
}

</style>
