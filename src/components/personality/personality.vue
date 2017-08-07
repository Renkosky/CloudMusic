<template> 
  <div>  
    <slider :slides="slidedata"></slider>
    <fmmusictab></fmmusictab>
    <personalized :personalized="personnalizeddata">      
      <router-link to="/recommendation/personality">
        推荐歌曲
      </router-link>    
    </personalized>
    <personalized :personalized="privatecontent">独家放送</personalized>
  <personalized :personalized="djprogram">主播电台</personalized>

  </div>
</template>

<script>
import slider from '../slider/slider'
import fmmusictab from '../fm-music-tab'
import personalized from '../personalized'
export default {
  name: 'personality',
  components: {
    slider,
    fmmusictab,
    personalized
  },
  created: function () {
    // GET /someUrl
    this.$http.get('http://localhost:3000/banner').then(response => {
      this.slidedata = response.data.banners
    }, response => {
      console.log('Error')
    })
    this.$http.get('http://localhost:3000/personalized').then(response => {
      this.personnalizeddata = response.data.result
    }, response => {
      console.log('Error')
    })
    this.$http.get('http://localhost:3000/personalized/privatecontent').then(response => {
      this.privatecontent = response.data.result
    }, response => {
      console.log('Error')
    })
    this.$http.get('http://localhost:3000/personalized/djprogram').then(response => {
      this.djprogram = response.data.result
    }, response => {
      console.log('Error')
    })
  },
  data() {
    return {
      slidedata: [],
      personnalizeddata: [],
      privatecontent: [],
      djprogram: []
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  margin: 0;
  padding: 0;
}
</style>
