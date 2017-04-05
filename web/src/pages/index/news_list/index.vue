<template>
    <div class="wrapper">
        <news-item class="news-item"></news-item>
    </div>
</template>

<script>
    import newsItem from '../../../components/news_item'

    export default {
        components: {
            newsItem
        }
    }
</script>

<style scoped>
    .wrapper {
        margin: 0 0.3rem 0;
    }
    .news-item {
        border-bottom: 1px solid #f6f6f6;
    }

    /* 1px 兼容处理 */
    @media (-webkit-min-device-pixel-ratio: 2) {
        .news-item {
            border: 0;
            position:relative;
            background-position: left bottom;
            background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0.5, transparent), color-stop(0.5, #e4e5e5));
            background-repeat: repeat-x;
            -webkit-background-size: 100% 1px;
        }
    }
</style>
