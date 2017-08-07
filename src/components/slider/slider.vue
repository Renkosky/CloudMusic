<template>
  <div class="slide-show" @mouseover="clearInv" @mouseout="runInv">
    <div class="slide-img">  
      <transition name="slide-trans">
        <img v-if="isShow" :src="slides[nowIndex].pic">
      </transition>
      <transition name="slide-trans-old">
        <img v-if="!isShow" :src="slides[nowIndex].pic">
      </transition>
    </div>
    <ul class="slide-pages">   
      <li v-for="(item, index) in slides" @click="goto(index)">
        <div class="slide-dots-icon" :class="{on: index === nowIndex}"></div>
      </li>
    </ul>
    <div class="slide-title" :style="{ backgroundColor: slides[nowIndex].titleColor }">
      {{ slides[nowIndex].typeTitle }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'slider',
  props: {
    slides: {
      type: Array,
      default: function () {
        return
      }
    },
    inv: {
      type: Number,
      default: 6000
    }
  },
  data() {
    return {
      nowIndex: 0,
      isShow: true
    }
  },
  computed: {
    prevIndex() {
      if (this.nowIndex === 0) {
        return this.slides.length - 1
      } else {
        return this.nowIndex - 1
      }
    },
    nextIndex() {
      if (this.nowIndex === this.slides.length - 1) {
        return 0
      } else {
        return this.nowIndex + 1
      }
    }
  },
  methods: {
    goto(index) {
      this.isShow = false
      setTimeout(() => {
        this.isShow = true
        this.nowIndex = index
            //  this.$emit('onchange',index)
      }, 10)
    },
    runInv() {
      this.invId = setInterval(() => {
        this.goto(this.nextIndex)
      }, this.inv)
    },
    clearInv() {
      clearInterval(this.invId)
    }
  },
  mounted() {
    this.runInv()
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.slide-trans-enter-active {
    transition: all .5s;
}

.slide-trans-enter {
    transform: translateX(900px);
}

.slide-trans-old-leave-active {
    transition: all .5s;
    transform: translateX(-900px);
}

.slide-show {
    position: relative;
    /* margin: 15px 15px 15px 0; */
    min-width: 845px;
    height: 320px;
    overflow: hidden;
}

.slide-img {
    width: 100%;
    height: 100%
}

.slide-img img {
    width: 100%;
    position: absolute;
    top: 0;
}

.slide-pages {
    position: absolute;
    bottom: 10%;
    right: 60%;
    left: 40%;
    min-width: 842px;
}

.slide-pages li {
    display: inline-block;
    float: left;
    padding: 0 10px;
    cursor: pointer;
    color: #fff;
}
.slide-title {
  position: absolute;
  bottom: 10%;
  right: 2px;
  padding: 5px 10px 5px 20px;
  border-radius: 25px 0px 0px 25px;
  font-size: 30px; 
  color: white;
  opacity: 0.7;
}
.slide-dots-icon {
    width: 16px;
    height: 16px;
    border-radius: 100%;
    background-color: grey
}

.slide-pages .on {
    background-color: red
}
</style>
