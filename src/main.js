import Vue from 'vue'
import App from './App.vue'
import http from './utils/http'

//vue配置--禁用vue默认情况下在浏览器控制台里面的一个提示。
Vue.config.productionTip = false
Vue.prototype.$http=http

//render 表示把App里面包含的html结构渲染到页面
new Vue({
  render: h => h(App),
}).$mount('#app')
