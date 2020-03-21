<template>
    <div :class="['footer wow animated',outActive?'slideOutDown':'slideInUp']">
        <span>@软件工程11班46号林锴(毕业设计)-指导老师(麦惠强)</span>
    </div>
</template>
<script>
import { computed } from '@vue/composition-api';
export default {
    name: 'footer_k',
    setup(props,{root}){
        //退出特效
        const outActive = computed(()=>root.$store.state.outActive);
        return {
            outActive
        }
    }
}
</script>
<style lang="scss" scoped>
.footer {
    box-sizing: border-box;
    background: rgba(255,255,255,0.5);
    color:white;
    margin-top:20px;
    padding:10px 30px;
    text-align: center;
    user-select: none;
    span {
        border-bottom:1px solid white;
    }
}
</style>