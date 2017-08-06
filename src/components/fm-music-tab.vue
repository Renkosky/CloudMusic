<template>
  <div class="fmmusic-tab">
    <div class="tab-item">
      <i class="icon iconfont">&#xe648;</i>
      <p>私人FM</p>
    </div>
    <div class="tab-item">
      <i class="icon iconfont">&#xe63b;</i>
      <p>每日歌曲推荐</p>
    </div>
    <div class="tab-item">     
      <i class="icon iconfont">&#xe600;</i>     
      <p>云音乐热歌榜</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'fmmusictab'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
    margin: 0;
    padding: 0;
  }

@font-face {
  font-family: 'iconfont';  /* project id 369853 */
  src: url('//at.alicdn.com/t/font_y5geusd385lsdcxr.eot');
  src: url('//at.alicdn.com/t/font_y5geusd385lsdcxr.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_y5geusd385lsdcxr.woff') format('woff'),
  url('//at.alicdn.com/t/font_y5geusd385lsdcxr.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_y5geusd385lsdcxr.svg#iconfont') format('svg');
}

.fmmusic-tab{
  display: flex;
  margin: 20px 0px 0px 0px;
  padding-bottom: 20px;
  border-bottom: 3px solid rgb(250, 250, 250);   

}

.tab-item{
  flex: 1;
  padding-top: 40px;    
  text-align: center;  
}
.tab-item p{
  padding-top: 40px;
  font-size: 25px;
}

.iconfont {
  padding: 30px; 
  font-family:"iconfont" !important;
  font-size:70px; 
  border: 2px solid #eb2000;
  border-radius: 100%; 
  color: #eb2000;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
</style>
