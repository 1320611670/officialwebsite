import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // history:{type:'hash'},
  // hash:true,
  routes: [
    {
      path: '/',
      component: '@/pages/start',  // layouts页面
      title:"执念科技",
    },
    { 
      path: '/',
       component: '@/pages/index',  // layouts页面
       title:"执念科技",
      routes:[
        { 
          path: '/home', 
          component: '@/components/home',
        title:"执念科技", 
      },
        { 
          path: '/intro',
           component: '@/components/intro',
           title:"执念科技", 
           },
        { path: '/talents', 
        component: '@/components/talents' ,
        title:"执念科技", 
      },
        { path: '/cs', component: '@/components/cs' },
      ]
  },
  ],
    exportStatic: {
      htmlSuffix: true,
    //部署到任意路径
    dynamicRoot: true,
  },
  fastRefresh: {},
});
