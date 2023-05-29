import App from './App'
import Vue from 'vue'
import './uni.promisify.adaptor'
import {myRequest} from 'utils/api.js'


Vue.prototype.$myRequest = myRequest
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
  ...App
})

app.$mount()



