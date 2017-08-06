<template> 
  <div>  
    <slider :slides="slidedata"></slider>
    <fmmusictab></fmmusictab>
  </div>
</template>

<script>
import slider from '../slider/slider'
import fmmusictab from '../fm-music-tab'
export default {
  name: 'personality',
  components: {
    slider,
    fmmusictab
  },
  created: function () {
    // GET /someUrl
    this.$http.get('http://localhost:3000/banner').then(response => {
      this.slidedata = response.body.banners
    }, response => {
      console.log('Error')
    })
  },
  data() {
    return {
      slidedata: []
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
