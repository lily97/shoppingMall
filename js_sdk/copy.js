import h5Copy from '@/js_sdk/junyi-h5-copy/junyi-h5-copy.js';
		
export const zwCopy = (content)=> {
	
	// #ifndef H5
		uni.setClipboardData({
			data: content,
			success: function() {
				uni.showToast({
					title: '复制成功',
					icon: 'none'
				})
			}
		});
	//#endif
	// #ifdef H5
		const result = h5Copy(content)
		if (result === false) {
			uni.showToast({
				title: '不支持',
			})
		} else {
			uni.showToast({
				title: '复制成功',
				icon: 'none'
			})
		}
	// #endif
};


export function preImage(url,urls){
	
	if(!urls||!(urls instanceof Array)||urls.length<1){
		urls = [url]
	}
	
	uni.previewImage({
		current: url,
		urls: urls
	})
}

export const homeBack= ()=>{
	let pages = getCurrentPages()
	if(pages.length<=1){
		return uni.switchTab({
			url:'/pages/mall/index/index'
		})
	}
	let page = pages[pages.length - 1]
	let lastPage = pages[pages.length - 2]
	console.log(page,lastPage)
	if(!lastPage||!lastPage.route||lastPage.route==page.route){
		return uni.switchTab({
			url:'/pages/mall/index/index'
		})
	}
	uni.navigateBack()
}