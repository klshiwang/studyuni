import Vue from 'vue'
import App from './App'
import {http} from './utils/http.js'

Vue.config.productionTip = false
Vue.prototype.$http = http
//混入后,其它组件可以像使用自己数据一样使用
Vue.mixin({
	data(){
		return {
			baseUrl:"https://api-hmugo-web.itheima.net/api/public/v1"
		}
	}
})

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
