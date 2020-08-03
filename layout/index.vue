<template>
    <div>
        <div style="padding-bottom: 50px">
            <router-link to="/home">主页</router-link>
            <router-link to="/page/1">页面1</router-link>
            <router-link to="/page/2">页面2</router-link>
        </div>
        <keep-router-view-alive :include="cachedViews">
            <router-view></router-view>
        </keep-router-view-alive>
    </div>
</template>

<script>
module.exports = {
    name: 'layout',

    components: {
        'keep-router-view-alive': httpVueLoader('./KeepAlive.vue')
    },

    data() {
        return {
            cachedViews: ['/page/1', '/page/2']
        }
    }
}
</script>
