<template>
  <div
    :class="['manup wow animated',gameactive?'slideOutRight':'slideInRight']"
    data-wow-duration="0.5s"
  >
    <div class="left">
      <ranking :rankingList="rankingList"></ranking>
      <comment></comment>
    </div>
    <div class="right">
      <iframe
        class="game"
        src="http://47.94.216.36:8080/plane/panle.html"
        frameborder="0"
        scrolling="auto"
      ></iframe>
    </div>
  </div>
</template>
<script>
import { computed, reactive } from "@vue/composition-api";
import ranking from "@/components/ranking.vue";
import comment from "@/components/comment.vue";
export default {
  name: "manup",
  components: {
    ranking,
    comment
  },
  setup(props, { root }) {
    const gameactive = computed(() => root.$store.state.gamechangeActive);
    const rankingList = reactive([
      { name: "小明", grade: 999999999 },
      { name: "AAAA", grade: 100 },
      { name: "loookooo", grade: 100 },
      { name: "132123123112123123", grade: 100 },
      { name: "小明", grade: 100 },
      { name: "小明", grade: 100 },
      { name: "小明", grade: 100 },
      { name: "小明", grade: 100 },
      { name: "小明", grade: 100 },
      { name: "小明", grade: 100 },
      { name: "小明", grade: 100 },
      { name: "小明", grade: 100 },
      { name: "小明", grade: 100 }
    ]);
    return {
      gameactive,
      rankingList
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
    right: 0px;
    width: 1043px;
  }
}
.placeholder {
  font-size: 2rem;
  font-family: "Courier New", Courier, monospace;
}
</style>
