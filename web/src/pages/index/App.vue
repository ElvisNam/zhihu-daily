<template>
    <div class="wrapper">
        <div class="header-wrap">
            <main-header></main-header>
        </div>
        <div class="content-wrap">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import mainHeader from './main_header'
export default {
    components: {
        mainHeader
    }
}
</script>

<style scoped>
    .wrapper {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
    .header-wrap {
        height: 0.76rem;
        position: absolute;
        top: 0;
        width: 100%;
    }
    .content-wrap {
        position: absolute;
        top: 0.76rem;
        bottom: 0;
        left: 0;
        right: 0;
    }
</style>
