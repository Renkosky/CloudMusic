<template>
  <div class="content">
    <div class="tab">
      <router-link class="tab-item" to="/recommendation/personality">
        <span class="tab-link">个性推荐</span>
      </router-link>
      <router-link class="tab-item" to="/recommendation/list">
        <span class="tab-link">歌单</span>
      </router-link>
      <router-link class="tab-item" to="/recommendation/radio">
        <span class="tab-link">主播电台</span>
      </router-link>
      <router-link class="tab-item" to="/recommendation/top">
        <span class="tab-link">排行榜</span>
      </router-link>
    </div>
    <transition name="slide-rec">
    <router-view></router-view>
    </transition>  
  </div>
</template>

<script>
export default {
  name: 'recommendation'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content{
  min-width: 845px;
}
.tab{
  display: flex;
  height:60px;
}
.tab-link{
  margin: 20px;
  font-size: 30px;
  color: rgba(0, 0, 0, 0.6)
}
.tab-item{
  flex:1;
  padding: 15px 15px 15px 15px;
  text-align: center;
}
.router-link-active{
  border-bottom: 2px solid rgb(234, 32, 0);
}
.router-link-active span{
    color: rgb(234, 32, 0);
}

/* .slide-rec-enter-active {
  transition: all 0.3s
}

.slide-rec-leave-active {
  transition: all 0.3s
}

.slide-rec-enter {
  transform: translateX(100%)
}

.slide-rec-leave-to{
  transition: translateX(-100%)
} */


</style>
