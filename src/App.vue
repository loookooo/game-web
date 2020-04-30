<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  name:'app',
}
</script>
<style lang="scss">
$White:rgba(255,255,255,0.5)!important;
$Black:rgba(0,0,0,0.5)!important;
$Color:#fff!important;
$None:transparent!important;
#app {
}
.el-collapse-item__wrap {
  background: rgba(255,255,255,0.8)!important;
}
.el-collapse {
  border:none!important;
}
.el-collapse-item__header{
  color:$Color;
  background: $None;
}
.el-tabs__active-bar {
   background: $Black; 
}
.el-tabs__item {
  color:$Color
}
.el-card {
  background-color: $White;
  border:none!important;
  border-radius: 0!important;
  color:white!important;
}
.el-tabs__item:hover {
  color:$Black
}
</style>
