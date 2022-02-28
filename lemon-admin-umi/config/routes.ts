/*
 * @Author: L.柠
 * @Date: 2022-02-28 20:37:10
 */
export default [
    { path: '/', component: '@/Login', menuRender: false, headerRender: false },
    { path: '/register', component: '@/Register', menuRender: false, headerRender: false },
    { path: '/index', name: '首页', icon: 'crown', component: '@/pages/admin/Home/Index', wrappers: ['@/wrappers/auth',], },
    {
        path: '/article', name: '文章管理', icon: 'FileText', redirect: '/index', routes: [
            { path: '/article/List', name: '文章列表', icon: 'crown', component: '@/pages/admin/ArticleManagement/ArticleList', wrappers: ['@/wrappers/auth',] },
            { path: '/article/label', name: '标签列表', icon: 'crown', component: '@/pages/admin/ArticleManagement/LableList', wrappers: ['@/wrappers/auth',] },
            { path: '/article/classify', name: '分类列表', icon: 'crown', component: '@/pages/admin/ArticleManagement/ClassifyList', wrappers: ['@/wrappers/auth',] }]
    },
    { path: '/website', name: '网站管理', icon: 'Ie', component: '@/pages/admin/Website', wrappers: ['@/wrappers/auth',] },
    { path: '/authority', name: '权限管理', icon: 'Unlock', component: '@/pages/admin/Authority', wrappers: ['@/wrappers/auth',] },
    { path: '/user', name: '用户管理', icon: 'Team', component: '@/pages/admin/User', wrappers: ['@/wrappers/auth',] },
]