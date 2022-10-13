import App from './App'
import Vue from 'vue'
import store from './store'
import uView from 'uview-ui'
Vue.use(uView);
Vue.config.productionTip = false
Vue.prototype.$store = store
App.mpType = 'app'
const app = new Vue({
	...App
})
app.$mount()
