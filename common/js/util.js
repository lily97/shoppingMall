// 业务层代码会用到的各种方法

/*数字十位补0*/
function formatNumber(n) {
	n = n.toString()
	return n[1] ? n : '0' + n
}
/*获取区间内的随机整数*/
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min)
}
/*消息提示*/
const msg = (title, duration = 1500, position = 'bottom', mask = false,icon = 'none') => {
	if (Boolean(title) === false) {
		return;
	}
	uni.showToast({
		title,
		duration,
		position,
		mask,
		icon
	});
}
/*时间戳转2018-08-08 00:00:00 格式*/
const formatTime = (timestamp) => {
	timestamp = parseInt(timestamp)
	if (isNaN(timestamp) || timestamp == 0) {
		return '--'
	}
	var date = new Date(timestamp * 1000)
	var year = date.getFullYear()
	var month = date.getMonth() + 1
	var day = date.getDate()

	var hour = date.getHours()
	var minute = date.getMinutes()
	var second = date.getSeconds()

	return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}
/*按格式 yyyy-MM-dd hh:mm:ss.S | yyyy-M-d h:m:s.S 格式化时间戳*/
const formatDateTime = (fmt, timestamp) => {
	timestamp = parseInt(timestamp)
	if (isNaN(timestamp) || timestamp == 0) {
		return '--'
	}
	var date = new Date(timestamp * 1000)
	var o = {
		"M+": date.getMonth() + 1, //月份
		"d+": date.getDate(), //日
		"h+": date.getHours(), //小时
		"m+": date.getMinutes(), //分
		"s+": date.getSeconds(), //秒
		"q+": Math.floor((date.getMonth() + 3) / 3), //季度
		"S": date.getMilliseconds() //毫秒
	};
	if (/(y+)/.test(fmt))
		fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
	for (var k in o)
		if (new RegExp("(" + k + ")").test(fmt))
			fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k])
				.length)));
	return fmt;
}
/*打乱数组排序*/
const shuffle = (arr) => {
	let _arr = arr.slice()
	for (let i = 0; i < _arr.length; i++) {
		let j = getRandomInt(0, i)
		let t = _arr[i]
		_arr[i] = _arr[j]
		_arr[j] = t
	}
	return _arr
}
/*函数防抖*/
const debounce = (func, delay) => {
	let timer
	return function(...args) {
		if (timer) {
			clearTimeout(timer)
		}
		timer = setTimeout(() => {
			func.apply(this, args)
		}, delay)
	}
}
/*从数组中删除指定元素*/
const deleteFromArray = (arr, compare) => {
	const index = arr.findIndex(compare)
	if (index > -1) {
		arr.splice(index, 1)
	}
}
/*向数组中插入指定元素(重复的值会前提,并有最大值设置)*/
const insertArray = (arr, val, compare, maxLen) => {
	const index = arr.findIndex(compare)
	if (index === 0) {
		return
	}
	if (index > 0) {
		arr.splice(index, 1)
	}
	arr.unshift(val)
	if (maxLen && arr.length > maxLen) {
		arr.pop()
	}
}
/*数字转带正负号的字符串*/
const formatSymbol = (num) => {
	let temp = parseFloat(num)
	return temp > 0 ? `+${temp}` : temp.toString()
}
/*秒转分秒*/
const formatMinuteSecond = (second) => {
	let min = parseInt(second / 60)
	let sec = parseInt(second % 60)
	return formatNumber(min) + ':' + formatNumber(sec)
}
/*数字转小数点后n位的字符串*/
const numberToString = (num, digit) => {
	if (isNaN(parseFloat(num))) {
		num = 0
	}
	return parseFloat(num).toFixed(digit).toString()
}
/*URL参数转obj对象*/
const querystring2obj = (url) => {
	let queryArr = (url && url.substr(url.indexOf('?') + 1).split('&')) ||
		location.search.substr(1).split('&'),
		query = {}
	for (let i = 0, len = queryArr.length; i < len; i++) {
		let key = queryArr[i].split('=')[0],
			val = queryArr[i].split('=')[1];
		if (query.hasOwnProperty(key)) {
			if (!Array.isArray(query[key])) {
				query[key] = [query[key]]
				query[key].push(val)
			} else {
				query[key].push(val)
			}
			continue
		}
		query[key] = val
	}
	return query
}
/*移除HTML标签*/
const removeHTMLTag = (str) => {
	str = str.replace(/<\/?[^>]*>/g, '') //去除HTML tag
	str = str.replace(/[ | ]*\n/g, '\n') //去除行尾空白
	str = str.replace(/&nbsp;/ig, '') //去掉&nbsp;
	return str
}
/*接口请求完成,提示成功并有其他提示*/
const success = ({
	msg = '提交成功',
	mode = 'navigateBack',
	url = ''
}) => {
	setTimeout(() => {
		uni.showToast({
			title: msg,
			duration: 1500
		})
	}, 20)
	setTimeout(() => {
		if (mode === 'none') {
			url && url()
			return
		}
		if (mode === 'navigateBack') {
			uni.navigateBack()
			return
		}
		if (mode === 'navigateTo') {
			uni.navigateTo({
				url
			})
			return
		}
		if (mode === 'redirectTo') {
			uni.redirectTo({
				url
			})
			return
		}
		if (mode === 'switchTab') {
			uni.switchTab({
				url
			})
			return
		}
		if (mode === 'reLaunch') {
			uni.reLaunch({
				url
			})
			return
		}
	}, 1000)
}
/*隐藏手机号中间几位字符*/
const hidePhoneInfo = mobile => {
	let newMobile = ''
	if (mobile.length > 7) {
		newMobile = mobile.substr(0, 3) + '****' + mobile.substr(7)
		return newMobile
	} else {
		return mobile
	}
}
/*隐藏邮箱号中间几位字符*/
const hideEmailInfo = email => {
	if (String(email).indexOf('@') > 0) {
		let newEmail, str = email.split('@'),
			_s = ''

		if (str[0].length > 4) {
			_s = str[0].substr(0, 4)
			for (let i = 0; i < str[0].length - 4; i++) {
				_s += '*'
			}
		} else {
			_s = str[0].substr(0, 1)
			for (let i = 0; i < str[0].length - 1; i++) {
				_s += '*'
			}
		}
		newEmail = _s + '@' + str[1]
		return newEmail
	} else {
		return email
	}
}
/*生成随机4位验证码字符串*/
const getRanNum = (n = 4) => {
	let chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'
	let temp = ''
	for (let i = 0; i < n; i++) {
		if (Math.random() < 48) {
			temp += chars.charAt(Math.random() * 48 - 1)
		}
	}
	return temp
}
/*生成随机指定位数字符串*/
const chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K',
	'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];
const generateMixed = (n) => {
	let res = ''
	for (let i = 0; i < n; i++) {
		let id = Math.ceil(Math.random() * 35)
		res += chars[id]
	}
	return res
}

/*打开新页面*/
const openNewPage = (url, mode = 'navigateTo', verify = false) => {
	
	// console.log(!uni.getStorageSync('token'))
	if (verify && !uni.getStorageSync('token')) {
		uni.navigateTo({
			url: '/pages/account/login/login?origin=' + encodeURIComponent(url)
		})
		return
	} else {
		if (mode === 'navigateTo') {
			uni.navigateTo({
				url,
				fail: (res) => {
					console.log(res)
				}
			})
			return
		}
		if (mode === 'redirectTo') {
			uni.redirectTo({
				url
			})
			return
		}
		if (mode === 'switchTab') {
			uni.switchTab({
				url
			})
			return
		}
		if (mode === 'reLaunch') {
			uni.reLaunch({
				url
			})
			return
		}
	}
}
/*obj对象转url格式*/
const objToUrl = (obj) => {
	var arr = []
	for (var i in obj) {
		if (obj.hasOwnProperty(i)) {
			arr.push(encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]))
		}
	}
	return arr.join('&')
}

const adToJump = (obj) => {
	if(!obj.ad_wb_link&&!obj.ad_link){
		return uni.showToast({
					title: '暂未开放',
					duration: 3000,
					icon:'none'
				})
	}
	if (obj.link_type == 0 && obj.ad_wb_link.indexOf('http') != -1) { //外部链接
		let url = encodeURIComponent(obj.ad_wb_link)
		uni.navigateTo({
			url:'/pages/web-view/web-view?url='+url+'&title='+obj.ad_name
		})
	} else if(obj.link_type == 1) { //内部链接
		let url = obj.ad_link+'?'+objToUrl(obj.parameter)
		if(obj.ad_link.indexOf('?')>-1){
			url = obj.ad_link+'&'+objToUrl(obj.parameter)
		}
		uni.navigateTo({
			url:'/'+url,
			fail: (res) => {
				if(res.errMsg.indexOf('tabbar')>-1){
					uni.switchTab({
						url:'/'+url,
					})
				}
			}
		})
	}
}
const formatSeconds = (value,split=":")=>{
	  //  秒
	  let second = parseInt(value)
	  //  分
	  let minute = 0
	  //  小时
	  let hour = 0
	  //  天
	  //  let day = 0
	  //  如果秒数大于60，将秒数转换成整数
	  if (second > 60) {
	    //  获取分钟，除以60取整数，得到整数分钟
	    minute = parseInt(second / 60)
	    //  获取秒数，秒数取佘，得到整数秒数
	    second = parseInt(second % 60)
	    //  如果分钟大于60，将分钟转换成小时
	    if (minute > 60) {
	      //  获取小时，获取分钟除以60，得到整数小时
	      hour = parseInt(minute / 60)
	      //  获取小时后取佘的分，获取分钟除以60取佘的分
	      minute = parseInt(minute % 60)
	      //  如果小时大于24，将小时转换成天
	      //  if (hour > 23) {
	      //    //  获取天数，获取小时除以24，得到整天数
	      //    day = parseInt(hour / 24)
	      //    //  获取天数后取余的小时，获取小时除以24取余的小时
	      //    hour = parseInt(hour % 24)
	      //  }
	    }
	  }
	  
	  
	  let result = parseInt(second)<10?'0' + parseInt(second):''+parseInt(second)
	  
	  result = parseInt(minute)<10?'0'+ parseInt(minute) + split + result
				:''+parseInt(minute) + split + result
				
	if(parseInt(hour)>0){
		result = parseInt(hour)<10?'0'+ parseInt(hour) + split + result
					:''+parseInt(hour) + split + result
	}
				
	return result
}
const isWeixn = ()=>{
	//#ifdef H5
	const ua = navigator.userAgent.toLowerCase();
	return ua.indexOf('micromessenger') != -1;	
	//#endif
	return false
		
}

const callPhone = async (phone)=>{
	//#ifdef H5
	return msg('H5不支持拨打电话')
	//#endif
	uni.makePhoneCall({
		phoneNumber:phone
	})
}

const isWechat = () => {
	  return String(navigator.userAgent.toLowerCase().match(/MicroMessenger/i)) === "micromessenger";
}
const getUrlParam = (name) => {
	let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	let r = window.location.search.substr(1).match(reg);
	if (r != null) {
		return unescape(r[2]);
	}
	return null;
}

const objEncodeUrl = (obj)=>{
	return encodeURIComponent(JSON.stringify(obj));
}

const objDecodeUrl = (str)=>{
	return JSON.parse(decodeURIComponent(str));
}

const goodsJumpDetail = (item,ct_id=0)=>{
	if(item.goods_zone == 2){
		// openNewPage(`/pages/mall/group-buy/group-detail?id=${item.goods_id}&tg_id=${item.tg_info.id}&ct_id=${ct_id}`)
		openNewPage(`/pages/mall/product/product?id=${item.goods_id}&tg_id=${item.tg_info.id}&ct_id=${ct_id}`)
	} else {
		openNewPage(`/pages/mall/product/product?id=${item.goods_id}`)
	}
}

const computedPercent = (num1,num2)=>{
		if(num1<=0){
			return 0;
		}
		if(num2<=0){
			return 100;
		}
		return (num1/num2).toFixed(2)*100
	}

const download = (url,isOpen = false)=>{
	uni.showLoading({
		title:'文件下载中...'
	})
	uni.downloadFile({
		url: url,
		success: (res) => {
			if (res.statusCode === 200) {
				uni.saveFile({
					tempFilePath: res.tempFilePath,//文件的临时路径
					success: function(res) {
						const savedFilePath = res.savedFilePath;
						msg('下载成功,保存路径为：'+savedFilePath)
						if(isOpen){
							uni.openDocument({
								filePath: savedFilePath,
								success: function(res) {
									uni.hideLoading()
								},
								fail: function(res) {},
								complete: function(res) {
									setTimeout(uni.hideLoading(), 4000)
								},
							});
						}
						
					},
					fail: function(err) {
						console.log(err)
						msg('下载失败')
						uni.hideLoading()
					}
				});
			}
		},
		fail(res) {
			msg('下载失败')
			uni.hideLoading()
		}
	});
}
export default {
	msg,
	formatTime,
	formatDateTime,
	debounce,
	shuffle,
	deleteFromArray,
	insertArray,
	formatSymbol,
	formatMinuteSecond,
	numberToString,
	querystring2obj,
	removeHTMLTag,
	success,
	hidePhoneInfo,
	hideEmailInfo,
	getRanNum,
	generateMixed,
	openNewPage,
	objToUrl,
	adToJump,
	isWeixn,
	objEncodeUrl,
	objDecodeUrl,
	isWechat,
	goodsJumpDetail,
	callPhone,
	computedPercent,
	formatSeconds,
	download
}
