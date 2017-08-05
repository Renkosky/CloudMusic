<template>
  <slider :slides="slidedata"></slider>
</template>

<script>
import slider from '../slider/slider'

export default {
  name: 'personality',
  components: {
    slider
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
