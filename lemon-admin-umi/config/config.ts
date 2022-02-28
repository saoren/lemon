/*
 * @Author: L.柠
 * @Date: 2022-02-27 00:12:40
 */
import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  mfsu:{},
  layout: {name:'博客后台管理'},
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/index',name:'首页', icon:'crown',component: '@/pages/admin/Home/Index' },
    { path: '/article',name:'文章管理', icon:'FileText',routes:[
        { path: '/article/List',name:'文章列表', icon:'crown',component: '@/pages/admin/ArticleManagement/ArticleList' },
        { path: '/article/label',name:'标签列表', icon:'crown',component: '@/pages/admin/ArticleManagement/LableList' },
        { path: '/article/classify',name:'分类列表', icon:'crown',component: '@/pages/admin/ArticleManagement/ClassifyList' }
    ]},
    { path: '/website',name:'网站管理', icon:'Ie',component: '@/pages/admin/Website' },
    { path: '/authority',name:'权限管理', icon:'Unlock',component: '@/pages/admin/Authority' },
    { path: '/user',name:'用户管理', icon:'Team',component: '@/pages/admin/User' },
  ],
  fastRefresh: {},
});
