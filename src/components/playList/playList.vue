<template>
    <div class="playList" >
      <div class="head-wrap">
        <div class="playList-head" :style="'backgroundImage:'+'url('+url+')'">
          </div>
          <div class="playList-innerhead">
            <div class="playList-cover"><img :src=" playListData.coverImgUrl "></img></div>
            <div class="playList-title">{{ playListData.name }}</div>         
          </div>
          <div class="toolbar">
            <ul>
              <li class="iconfont">&#xe602;<p>{{ playListData.subscribedCount }}</p></li>
              <li class="iconfont">&#xe6d9;<p>{{ playListData.commentCount }}</p></li>
              <li class="iconfont">&#xe6db;<p>{{ playListData.shareCount }}</p></li>
              <li class="iconfont">&#xe62d;<p>下载</p></li>
            </ul>
          </div>
          
      </div>
      <div class="songlist" v-for="(item,index) in playListData.trackIds">{{ index+1 }}</div>
    </div>
</template>

<script>
// import {mapGetters} from 'vuex'
import api from '../../api/api.js'

export default {
  // data() {
  //   playListData:[]
  // },
  computed: {

  },
  created: function() {
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



@font-face {
  font-family: 'iconfont';
  /* project id 369853 */
  src: url('//at.alicdn.com/t/font_369853_l9xy2hu0418aor.eot');
  src: url('//at.alicdn.com/t/font_369853_l9xy2hu0418aor.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_369853_l9xy2hu0418aor.woff') format('woff'),
  url('//at.alicdn.com/t/font_369853_l9xy2hu0418aor.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_369853_l9xy2hu0418aor.svg#iconfont') format('svg');
}


.iconfont {
  font-family: "iconfont" !important;
  font-style: normal;
  font-size: 60px;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
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
.head-wrap{
  position: relative;
  height: 40%;
  overflow: hidden;
  color: white
}
.playList-head{
  display: flex; 
  height: 100%;
  width: 100%; 
  overflow:hidden;
  filter:blur(150px);
  background-size: cover;
}
.playList-innerhead{
  display: flex;
  position: absolute;
  top: 0;
  flex: auto; 
  margin: 15% 5% 5% 5%;
}
.playList-cover{
  flex: 0 1 300px;
}

.playList-cover img{
   width: 100%;
   height: 100%;
  
}

.playList-title{
  padding-left: 10%;
  flex: 1;
  font-size: 35px;
 
}
.toolbar{
  position: absolute;
  display: flex;
  bottom: 0;
  height: 25%;
  width: 100%;
}

.toolbar ul{
  display: flex;
  width: 100%;
  list-style: none;
  align-items:center
}

.toolbar ul li{
  flex: 1;
  text-align: center;
  padding: 30px
}

.toolbar ul li p{
  font-size: 30px;
  font-family: "Microsoft YaHei"
}

.songlist{
  font-size: 40px;
  height: 90px;
}

</style>