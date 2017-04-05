<template>
    <div class="wrapper">
        <div class="icon-wrap">
            <i class="icon"></i>
        </div>
        <div class="content">
            <span>今日热闻</span>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    .wrapper {
        font-size: 16px;
        line-height: 0.76rem;
        color: #ffffff;
        background-color: #038fd6;
    }

    .icon-wrap {
        width: 0.36rem;
        height: 0.76rem;
        position: absolute;
        margin-left: 0.26rem;
    }
    .icon {
        width: 0.36rem;
        height: 0.28rem;
        position: absolute;
        background: url('/static/img/menu.png') no-repeat;
        background-size: contain;
        top: 50%;
        transform: translateY(-50%);
    }

    .content {
        float: left;
        margin-left: 50%;
        transform: translateX(-50%);
    }
</style>
