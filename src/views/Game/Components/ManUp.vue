<template>
    <div :class="['manup wow animated',gameactive?'slideOutRight':'slideInRight']" data-wow-duration="0.5s">
        <div class="left"></div>
        <div class="right">
           <iframe class="game" src="http://localhost:8080/plane/panle.html" frameborder="0" scrolling="auto"></iframe>
        </div>
    </div>
  
</template>
<script>
import { computed } from '@vue/composition-api';
export default {
  name: 'manup',
  setup(props,{root}){
      const gameactive = computed(()=> root.$store.state.gamechangeActive);
      return {
          gameactive
      }
  },
}
</script>


<style lang="scss" scoped>
.game {
    width:1043px;
    height:564px;
    background:black;
}
.manup {
    position: relative;
    .left,.right {
        position:absolute;
        height: 564px;
    }
    .left {
        left: 0px;
        width: 300px;
        background-color: rgba(255,255,255,0.5);
    }
    .right {
        right: 0px;
        width:1043px;
    }
}
.placeholder {
  font-size: 2rem;
  font-family: 'Courier New', Courier, monospace;
}
</style>
