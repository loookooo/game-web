<template>
    <div class="comment">
        查看评论 >>>
    </div>
</template>
<script>
export default {
    name:'comment'
}
</script>
<style lang="scss" scoped>
.comment {
    cursor: pointer;
    height:44px;
    text-align: center;
    line-height: 44px;
    font-size:20px;
    background-color:rgba(0,0,0,0.5);
}
.comment:hover {
    background-color:transparent;
}
</style>