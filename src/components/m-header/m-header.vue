<template>
  <div class="header">
    <div>
      <i class="icon iconfont">&#xe65b;</i>
    </div>
        <div class="innerbar">
          <router-link  to='/music-list'>
            <i class="icon iconfont">&#xe680;</i>
          </router-link>
            <router-link to='/recommendation' exact>
            <i class="icon iconfont">&#xe601;</i>
          </router-link>
          <router-link  to='/society'>
            <i class="icon iconfont">&#xe60b;</i>
          </router-link>
        </div>
        <div >
          <i class="icon iconfont">&#xe603;</i>
        </div>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'm-header'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{
  height: 60px;
  width: 100%;
  padding: 60px 30px 10px 30px;
  background-color: rgb(234, 32, 0) 
}

.header div{
  float: left;
}

.innerbar{
  padding: 0px 16% 0 16%;
  width: 55%
}

.innerbar i{
  padding: 0 12% 0 12%;
  color: rgba(255, 255, 255,0.5);
}
@font-face {
  font-family: 'iconfont';  /* project id 369853 */
  src: url('//at.alicdn.com/t/font_3865i9c01jj1yvi.eot');
  src: url('//at.alicdn.com/t/font_3865i9c01jj1yvi.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_3865i9c01jj1yvi.woff') format('woff'),
  url('//at.alicdn.com/t/font_3865i9c01jj1yvi.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_3865i9c01jj1yvi.svg#iconfont') format('svg');
}
.iconfont {
  font-family:"iconfont" !important;
  font-size:50px;
  color: rgb(255, 255, 255);
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
.router-link-active i{
  color: rgb(255, 255, 255)
}
</style>
