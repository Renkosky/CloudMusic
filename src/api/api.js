import Vue from 'vue'

export default {
  getBanner: function() {
    return Vue.http.get('http://localhost:3000/banner')
  },

  getPrivateContent: function() {
    return Vue.$http.get('http://localhost:3000/privatecontent')
  },

  getPersonalized: function() {
    return Vue.$http.get('http://localhost:3000/personalized')
  },

  getDjprogram: function() {
    return Vue.$http.get('http://localhost:3000/djprogram')
  }

}