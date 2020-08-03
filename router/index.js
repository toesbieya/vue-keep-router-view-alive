Vue.use(VueRouter)

const Layout = httpVueLoader('./layout/index.vue')

const router = new VueRouter({
    scrollBehavior: () => ({y: 0}),
    routes: [
        {
            path: '/',
            redirect: '/page/1',
            component: Layout,
            children: [
                {
                    path: 'redirect/:path(.*)',
                    component: httpVueLoader('./view/redirect.vue')
                },
                {
                    path: 'home',
                    component: httpVueLoader('./view/home.vue')
                },
                {
                    path: 'page/:index',
                    props: true,
                    component: httpVueLoader('./view/testView.vue')
                }
            ]
        }
    ]
})

router.beforeEach((to, from, next) => {
    if (needExtraRedirect(to, from)) {
        return next(`/redirect${to.fullPath}`)
    }
    next()
})

//判断是否需要一次额外的redirect跳转
function needExtraRedirect(to, from) {
    //若是详情页之间的跳转，借助redirect避免组件复用
    const isToDetailPage = to.path.startsWith('/page'),
        isFromDetailPage = from.path.startsWith('/page')

    return isToDetailPage && isFromDetailPage
}
