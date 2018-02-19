<template>
<div>
  <div class="nav-cover">
    <div class="playList-nav" :style="'backgroundImage:'+'url('+url+')'">
      <div @click="back()" class="back-btn"> back </div>
        <div>
          <div>歌单</div>
          <div></div>
        </div>
    </div>
  </div>
    <div class="playList">
      <div class="head-wrap">
        <div class="playList-head" :style="'backgroundImage:'+'url('+url+')'">
          </div>
          <div class="playList-innerhead">
            <div class="playList-cover"><img :src=" playListData.coverImgUrl "></div>
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
      <div class="songlist">
        <ul>
          <li  v-for="(item,index) in playListData.tracks" :key="index">
            <div class="Sl-index">{{ index+1 }}</div>
            <div class="tracks-info">
              <div class="tracks-name">{{ playListData.tracks[index].album.name }}</div>
              <div  class="tracks-artist">
                {{ playListData.tracks[index].album.artists["0"].name }} - {{ playListData.tracks[index].album.name }}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import api from '../../api/api.js'

export default {
  created: function() {
    api.getPlayListData(this.$route.params.id).then(response => {
      this.playListData = response.data.result
      this.url = this.playListData.coverImgUrl
    }, response => {
      console.log('Error')
    })
    console.log(this.playList)
  },
  computed: {
    ...mapGetters([
      'playList'
    ])
  },
  data() {
    return {
      playListData: [],
      url: []
    }
  },
  methods: {
    back() {
      history.back()
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
  overflow: scroll; 
}
.playList-nav{
  display: flex;
  width: 100%;
  padding: 35px;
  font-size: 40px;
  filter: blur(200px);
}
.nav-cover{
  width: 100%;
  display: flex;
  position: absolute;
  top: 0;
  z-index: 2;
  overflow: hidden;
}
.back-btn{
  padding-right: 20px;
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
  filter:blur(200px);
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
  flex: 0 1 350px;
}

.playList-cover img{
   width: 100%;
   height: 100%;
  
}

.playList-title{
  padding-left: 10%;
  flex: 1;
  font-size: 45px;
 
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
.songlist ul li{
  display: flex;
  padding: 20px;
}
.Sl-index{
  color: grey;
  padding: 30px;
}
.tracks-info{
  padding: 10px;
  width: 100%;
  border-bottom: 1px solid #bcbcbc;
}
.tracks-artist{
  font-size: 30px;
  padding: 10px 0px;
  color: grey;
}
</style>