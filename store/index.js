import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
    SocketState: {},
    SocketStateErr: {},
		hasLogin: false,
		userInfo: {}
	},
	mutations: {
		login(state, provider) {
			state.hasLogin = true
			state.userInfo = provider
			uni.setStorage({
			    key: 'userInfo',  
			    data: provider
			})
      uni.setStorage({
          key: 'token',  
          data: provider.token
      }) 
			console.log(state.userInfo)
		},
		logout(state) {
			state.hasLogin = false
			state.userInfo = {}
			uni.removeStorage({  
        key: 'userInfo'
      })
      uni.removeStorage({  
        key: 'token'
      })
		},
    setSocketState(that, info) {
      that.SocketState = info
    },
    setSocketStateErr(that, info) {
      that.SocketStateErr = info;
    }
	},
	actions: {
	
	}
})

export default store
