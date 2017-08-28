<template>
  <div>
    <div class="highquality">
      <div class="highqualityBg" :style="'backgroundImage:'+'url('+BgUrl+')'"></div>
        <div class="list-Img">
          <img :src="highqualityList[0].coverImgUrl" alt="#">
        </div>
      <div class="list-title">
        <div class="highquality-list">精品歌单 ></div>
        <div class="list-description">
          <p>{{ name }}</p>     
        </div>
        <div class="list-copywriter"> <p>{{ copywriter }}</p></div>
      </div>    
    </div>
    <personalized :personalized="highqualityList"></personalized>
  </div>
</template>

<script>
import api from '../../api/api'
import personalized from '../personalized'
export default {
  name: 'music-list',
  components: {
    personalized
  },
  data() {
    return {
      highqualityList: [],
      BgUrl: [],
      name: [],
      copywriter: []
    }
  },
  created: function () {
    api.getApidata('top/playlist/highquality').then(response => {
      this.highqualityList = response.data.playlists
      this.BgUrl = this.highqualityList[0].coverImgUrl
      this.name = this.highqualityList[0].name
      this.copywriter = this.highqualityList[0].copywriter
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
  filter:blur(80px);
  background-size: cover;
}
.list-Img{
  position: absolute;
  width: 30%;
  height: 18%;
  top: 17%;
  left: 5%
}

.list-Img img{
  height: 100%;
}
.list-title{
  position: absolute;
  width: 65%;
  height: 18%;
  top: 17%;
  left: 42%;
}
.highquality-list{
 margin-bottom: 30px;
 font-size: 40px;
 color: white
}

.list-description{
  margin-bottom: 30px; 
  font-size: 30px;
  color: white
}
.list-copywriter{
  font-size: 20px;
  color: rgba(255, 255, 255, 0.6)
}
</style>
