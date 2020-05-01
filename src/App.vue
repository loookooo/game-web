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
* {
  transition: all .3s;
}
#app {
}
.el-pagination.is-background .el-pager li {
  background:#ccc!important;
}
.el-pagination.is-background .el-pager li:hover {
  color:#fff!important;
}
.el-pagination.is-background .el-pager li:not(.disabled).active{
  color:$Black;
  background: white!important;
}
.el-pagination__total {
  color:$Color;
}
.el-table th, .el-table tr,.el-table, .el-table__expanded-cellhi {
  background:$White;
  //color:$Color;
}
.el-radio__input.is-checked .el-radio__inner{
    border-color:$Color;
    background:$Black;
}
.el-radio__input.is-checked+.el-radio__label ,.el-radio{
  color:$Color;
}
.el-form-item__label {
  color:$Color
}
.el-button--primary {
  background:$Black;
  border-color:$Color;
}
.el-dialog, .el-pager li {
  background:#999!important;
  .el-dialog__title,.el-dialog__body{
    color:$Color
  }
  .el-icon-close:before {
    color:$Color;
  }

}
.el-cascader-node:not(.is-disabled):hover {
  background: $White;
}
.el-cascader-node.in-active-path, .el-cascader-node.is-active, .el-cascader-node.is-selectable.in-checked-path{
  color:$Color;
  background: $Black;
}
.el-input__inner,.el-cascader-menu__list {
  outline: none!important;
  background: $Black;
  color:$Color
}
/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
::-webkit-scrollbar {
  width: 10px; /*滚动条宽度*/
  height: 16px; /*滚动条高度*/
}

/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px; /*滚动条的背景区域的圆角*/
  background-color: transparent; /*滚动条的背景颜色*/
}

/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb {
  border-radius: 10px; /*滚动条的圆角*/
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color:rgba(255,255,255,0.7); /*滚动条的背景颜色*/
}
a {
  color:white;
}
.el-collapse-item__header:hover {
  background: $White;
  color:#000!important;
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
