export const baseURL = 'http://ll1050.linliancn.com'
// token :6WT3DoKwgLjP5J0
export const request = (options) => {
	uni.showLoading({
		title: '加载中'
	})
	return new Promise((resolve, reject) => {
		uni.request({
			url: baseURL + options.url, //接口地址：前缀+方法中传入的地址
			method: options.method || 'GET', //请求方法：传入的方法或者默认是“GET”
			data: options.data || {}, //传递参数：传入的参数或者默认传递空集合
			header: {
				'Authorization': uni.getStorageSync("token") || "6WT3DoKwgLjP5J0", //自定义请求头信息
				// 'content-type': 'application/x-www-form-urlencoded',
			},
			success: (res) => {
				//返回的数据（不固定，看后端接口，这里是做了一个判断，如果不为true，用uni.showToast方法提示获取数据失败)
				if (res.data.status == 0) {
					uni.hideLoading();
					resolve(res.data.data)
				} else {
					// if(res.data.code== 401){
					// 	uni.navigateTo({
					// 		url:'/login/login'
					// 	})
					// 	uni.clearStorageSync()
					// }
					reject(res.data.msg)
				}
				// 如果不满足上述判断就输出数据
			},
			// 这里的接口请求，如果出现问题就输出接口请求失败
			fail: (err) => {
				uni.hideLoading();
				uni.showToast({
					title: err,
					duration: 2000
				});
				reject(err)
			},
			complete: function() {
				uni.hideLoading()
			}
		})
	})
}


/*上传图片*/
export const upload = (src, param = {}) => {
	return new Promise(function(resolve, reject) {
		uni.uploadFile({
			url: baseURL,
			header: {
				// ...headerParameter('obj', param),
				'content-Type': 'multipart/form-data'
			},
			formData: param,
			filePath: src,
			fileType: 'image',
			name: 'file',
			success: (res) => {
				if (res.statusCode == 200) {
					let data = JSON.parse(res.data)
					console.log(data)
					if (data.status == 0) {
						resolve(data)
					} else {
						reject(data)
					}
				} else {
					reject(res)
				}
			},
			fail: (err) => {
				reject(err)
			}
		})

	})

}
