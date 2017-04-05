import Vue from 'vue'
import Router from 'vue-router'

// import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/main',
            name: 'main',
            component: require('../pages/index/news_list')
        },
        {
            path: '/',
            redirect: '/main'
        }
    ]
})
