/*
 * @Author: L.柠
 * @Date: 2022-02-27 00:12:40
 */
import { defineConfig } from 'umi';
import routes from './routes'
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  mfsu: {},
  layout: { name: '博客后台管理' },
  routes: routes,
  fastRefresh: {},
  
});
