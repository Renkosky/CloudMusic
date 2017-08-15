import Vue from 'vue'
const cloudMusicApi = 'http://localhost:3000/'
const playList = 'playlist/detail?id='

export default {
  getApidata: function(url) {
    let cloudMusicApiurl
    cloudMusicApiurl = cloudMusicApi + url
    return Vue.http.get(cloudMusicApiurl)
  },
  getPlayListData: function (id) {
    let playListurl = cloudMusicApi + playList + id
    return Vue.http.get(playListurl)
  }
}