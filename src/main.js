import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './vuex/store'
import Vant from 'vant'
import 'vant/lib/index.css'
// ajax
import axios from 'axios'
import VueAxios from 'vue-axios'
import moment from 'moment'
import { Lazyload } from 'vant';
import { ImagePreview } from 'vant';
import { Uploader } from 'vant';
import echarts from 'echarts'
// import VConsole from 'vconsole/dist/vconsole.min.js' //import vconsole


import './styles/common.scss'
// let vConsole = new VConsole() // 初始化
Vue.use(Uploader);
Vue.use(VueAxios, axios)
Vue.config.productionTip = false
Vue.prototype.$moment = moment
Vue.prototype.$echarts = echarts
Vue.use(Vant)
Vue.use(Lazyload)
Vue.use(ImagePreview);
window.addEventListener(
  "touchmove",
  function(event) {
  if (event.scale !== 1) {
  event.preventDefault();
  }
  },
  { passive: false }
  );
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
