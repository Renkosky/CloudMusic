<template>
  <div class="personalized">
    <div class="personalized-title">      
      <slot></slot>
      <span>></span>
    </div>
    <div  class="personalized-item" v-for="(item, index) in personalized">
      <img :src=" personalized[index].picUrl" alt="#">
      <div class="icon iconfont count" @click="logCount()">&#xe604;{{ personalized[index].playCount }}
      </div>
      <p>{{ personalized[index].name }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'personalized',
  computed: {
    Countchange: function() {
      for (var index = 0; index < this.personalized.length; index++) {
        this.personalized[index].playCount = parseInt(this.personalized[index].playCount)
        if (this.personalized[index].playCount.length >=5) {
          
        }
      }
    }
  },
  props: {
    personalized: {
      type: Array,
      default: function () {
        return
      }
    }
  },
  methods: {
    selectItem(item) {
      this.$emit('select', item)
    },
    logCount() {
      for (var index = 0; index < this.personalized.length; index++) {
        this.personalized[index].playCount = parseInt(this.personalized[index].playCount)
        console.log(this.personalized[index].playCount)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@font-face {
    font-family: 'iconfont';
    /* project id 369853 */
    src: url('//at.alicdn.com/t/font_jp08te1k9snka9k9.eot');
    src: url('//at.alicdn.com/t/font_jp08te1k9snka9k9.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_jp08te1k9snka9k9.woff') format('woff'),
    url('//at.alicdn.com/t/font_jp08te1k9snka9k9.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_jp08te1k9snka9k9.svg#iconfont') format('svg');
}

.iconfont {
    font-family: "iconfont" !important;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
}

.personalized {
    flex-wrap: wrap;
    display: flex;
    margin: 20px 0 20px 0px
}

.personalized-title {
    margin-bottom: 30px;
    padding-left: 10px;
    width: 100%;
    font-size: 35px;
    border-left: 1px solid #eb2000;
}

.personalized-title span {
    font-size: 45px;
    color: rgb(75%, 75%, 75%)
}

.personalized-item {
    position: relative;
    flex: 1 1 250px;
    height: 100%;
    padding-right: 3px;
}

.personalized-item img {
    width: 100%;
    height: 100%;
}

.personalized-item p{
    margin: 10px;
    font-size:25px 
}

.count {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 30px;
    color: white;
}


</style>
