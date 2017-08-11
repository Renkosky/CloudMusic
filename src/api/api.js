import Vue from 'vue'

export default {
  getApidata: function(url) {
    let cloudMusicApi = 'http://localhost:3000/'
    cloudMusicApi = cloudMusicApi + url
    return Vue.http.get(cloudMusicApi)
  }
}