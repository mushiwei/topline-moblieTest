import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
/**
 * 安装 npm i -S amfe-flexible
 * 这个第三方包引入即可,它会自动根据页面宽度设置网页基准字体大小
 * 安装 npm install postcss-pxtorem --save-dev
 * 用于将单位转化为 rem
 */
import 'amfe-flexible'
import {
  Button,
  Tabbar,
  TabbarItem
} from 'vant'
Vue
  .use(Button)
  .use(Tabbar)
  .use(TabbarItem)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
