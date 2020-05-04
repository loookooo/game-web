<template>
  <div
    :class="['manup wow animated',gameactive?'slideOutRight':'slideInRight']"
    data-wow-duration="0.5s"
  >
    <div class="left">
      <game-tab game="连连看"></game-tab>
    </div>
    <div class="right">
      <div v-if="!start" style="text-align:center">
        <h1>{{detail.name}}</h1>
        <h3>{{detail.background}}</h3>
        <div>{{detail.rule}}</div>
        <el-button @click="start=true" size="small" style="margin-top:20px">进入游戏</el-button>
      </div>
      <iframe v-else
        class="game"
        src="http://47.94.216.36:8080/KeepLook/index.html"
        frameborder="0"
        scrolling="auto"
      ></iframe>
    </div>
  </div>
</template>
<script>
import { computed, reactive } from "@vue/composition-api";
import GameTab from "@/components/GameTab.vue";
export default {
  name: "manup",
  components: {
    GameTab
  },
  data(){
    return {
      game:'连连看',
      start:false,
      detail:{  }
    }
  },
  mounted(){
    this.detail = this.$store.getters.getDetailByGame(this.game);
  },
  setup(props, { root }) {
    const gameactive = computed(() => root.$store.state.gamechangeActive);
    return {
      gameactive
    };
  }
};
</script>


<style lang="scss" scoped>
.game {
  width: 1043px;
  height: 564px;
  background: black;
}
.manup {
  position: relative;
  .left,
  .right {
    position: absolute;
    height: 564px;
  }
  .left {
    left: 0px;
    width: 300px;
    background-color: rgba(255, 255, 255, 0.5);
  }
  .right {
    display:flex;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(#000,#000, #999, #000,#000);
    right: 0px;
    width: 1043px;
  }
}
.placeholder {
  font-size: 2rem;
  font-family: "Courier New", Courier, monospace;
}
</style>
