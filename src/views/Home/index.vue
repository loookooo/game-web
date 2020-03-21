<template>
    <div>
        <homeHeader></homeHeader>
        <div class="main">
            <router-view></router-view>
        </div>
        <homeFooter></homeFooter>
    </div>
</template>
<script>
import homeHeader from './Components/Header.vue';
import homeFooter from './Components/Footer.vue';
 export default {
     name:'home',
     components:{
         homeHeader,
         homeFooter
     }
  }
</script>
<style lang="scss" scoped>
.main {
    
    margin:30px 0;
}
</style>