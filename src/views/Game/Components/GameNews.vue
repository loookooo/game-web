<template>
    <div :class="['gamenews wow animated',gameActive?'slideOutRight':'slideInRight']" data-wow-duration="0.5s">
        <div class="left">
            <div class="up">
            </div>
            <div class="tipUp"></div>
            <div class="tipDown"></div>
            <div class="down">

            </div>
        </div>
        <div class="right">
            <div class="block">
                <el-carousel height="564px" :interval="4000">
                <el-carousel-item v-for="item in imglist" :key="item.id">
                    <img :src="item" alt="">
                </el-carousel-item>
                </el-carousel>
            </div>
        </div>
    </div>
</template>
<script>
import { reactive, computed } from '@vue/composition-api'
export default {
    name:'gamenews',
    setup(props,{root}) {
        //游戏切换参数
        const gameActive = computed( ()=>root.$store.state.gamechangeActive );
        //轮播图列表
        const imglist = reactive([
             'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582906554717&di=75f2134c5fe7f45c80e605ee3e2002a9&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farchive%2F36f68dac8d7aa5686d2f4c3bc8e6fc18ce1f5fed.jpg',
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582906515190&di=dc1cb20f106ef52b8d8cb610bc71f75a&imgtype=0&src=http%3A%2F%2Fbucket.mall.actoys.net%2Fdata%2Ffiles%2Fstore_643325%2Fgoods_47%2F201511161204079214.jpeg'
        ]);
        return {
            imglist,gameActive
        }
    }
}
</script>
<style lang="scss" scoped>
$arrowTo:rgba(255,255,255,0.5);
$arrowFrom:rgba(0,0,0,0.5);

.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }

.gamenews {
    position: relative;
}
.left {
    box-sizing: border-box;
    position:absolute;
    left:0px;
    width:300px;
    height:564px;
    overflow: hidden;
    border-right:4px solid transparent;
    .up {
        height:47%;
        background:url('http://hbimg.b0.upaiyun.com/d3d07fa95ef03b5354cbcd6f0a7ba01ec94157d123fc4-Z8yzFH_fw658') no-repeat;
        background-position:center;
        margin-bottom: 2px;
    }
    .tipUp {
        height:3%;
        background: linear-gradient(135deg,
        $arrowTo 0%,$arrowTo 5.9%,$arrowFrom 5.9%,$arrowFrom 11.8%,
        $arrowTo 11.8%,$arrowTo 17.7%,$arrowFrom 17.7%,$arrowFrom 23.6%,
        $arrowTo 23.6%,$arrowTo 29.5%,$arrowFrom 29.5%,$arrowFrom 35.5%,
        $arrowTo 35.5%,$arrowTo 41.3%,$arrowFrom 41.3%,$arrowFrom 47.2%,
        $arrowTo 47.2%,$arrowTo 53.1%,$arrowFrom 53.1%,$arrowFrom 59%,
        $arrowTo 59%,$arrowTo 64.9%,$arrowFrom 64.9%,$arrowFrom 70.8%,
        $arrowTo 70.8%,$arrowTo 76.7%,$arrowFrom 76.7%,$arrowFrom 82.6%,
        $arrowTo 82.6%,$arrowTo 88.5%,$arrowFrom 88.5%,$arrowFrom 94.4%,
        $arrowTo 94.4%,$arrowTo 99.9%
        );
        animation:move 8s linear infinite;
    }
    .tipDown {
        height:3%;
        background: linear-gradient(45deg,
        $arrowTo 0%,$arrowTo 5.9%,$arrowFrom 5.9%,$arrowFrom 11.8%,
        $arrowTo 11.8%,$arrowTo 17.7%,$arrowFrom 17.7%,$arrowFrom 23.6%,
        $arrowTo 23.6%,$arrowTo 29.5%,$arrowFrom 29.5%,$arrowFrom 35.5%,
        $arrowTo 35.5%,$arrowTo 41.3%,$arrowFrom 41.3%,$arrowFrom 47.2%,
        $arrowTo 47.2%,$arrowTo 53.1%,$arrowFrom 53.1%,$arrowFrom 59%,
        $arrowTo 59%,$arrowTo 64.9%,$arrowFrom 64.9%,$arrowFrom 70.8%,
        $arrowTo 70.8%,$arrowTo 76.7%,$arrowFrom 76.7%,$arrowFrom 82.6%,
        $arrowTo 82.6%,$arrowTo 88.5%,$arrowFrom 88.5%,$arrowFrom 94.4%,
        $arrowTo 94.4%,$arrowTo 99.9%
        );
        animation:move 8s linear infinite;
    }
    @keyframes move {
        0% {}
        100% {background-position:-300px 0;}
    }
    .down {
        margin-top: 2px;
        height: 47%;
        background: url('http://img3.imgtn.bdimg.com/it/u=3893109520,3773061345&fm=26&gp=0.jpg') no-repeat;
        background-position: center;
    }
}
.right {
    position:absolute;
    right:0px;
    width:1043px;
    height:564px;
    img {
        height:100%;
        width: 100%;
    }
}

</style>