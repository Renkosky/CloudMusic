import Vue from 'vue'
import axios from 'axios'
import config from './config'
const cloudMusicApi = 'http://localhost:3000/'
const playList = 'playlist/detail?id='

export default {
  getApi(url) {
    let cloudMusicApiurl
    cloudMusicApiurl = config.url + url
    return axios.get(cloudMusicApiurl)
  },
  getApidata: function(url) {
    let cloudMusicApiurl
    cloudMusicApiurl = cloudMusicApi + url
    return Vue.http.get(cloudMusicApiurl)
  },
  getPlayListData: function (id) {
    let playListurl = cloudMusicApi + playList + id
    return Vue.http.get(playListurl, {})
  }
}