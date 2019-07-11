import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VeeValidate, { Validator } from 'vee-validate'
import zhCN from 'vee-validate/dist/locale/zh_CN'
/**
 * 这个第三方包引入即可,它会自动根据页面宽度设置网页基准字体大小
 */
import 'amfe-flexible'
import Vant from 'vant'
import 'vant/lib/index.css'
Vue.use(VeeValidate, {
  events: '' // 禁用默认事件验证
  // events: 'change'
})
Validator.localize('zh_CN', zhCN)
Vue.use(Vant)
/**
 * 现在我们简单粗暴全引进来,方便使用
 * 后面我们再配置为按需引入的方式（减少代码打包体积）
 */
/**
 * 安装 npm i -S amfe-flexible
 * 这个第三方包引入即可,它会自动根据页面宽度设置网页基准字体大小
 * 安装 npm install postcss-pxtorem --save-dev
 * 用于将单位转化为 rem
 */
//
// import {
//   Button,
//   Tabbar,
//   TabbarItem
// } from 'vant'
// Vue
//   .use(Button)
//   .use(Tabbar)
//   .use(TabbarItem)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
