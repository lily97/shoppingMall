const wx = require('/common/js/jweixin-1.6.0.js');
const wxPay = (data,conf, callback, errCallback) => {
	wx.config({
			debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
			appId:conf.appId,      // 必填，公众号的唯一标识
			timestamp:conf.timestamp,  // 必填，生成签名的时间戳
			nonceStr:conf.nonceStr,   // 必填，生成签名的随机串
			signature:conf.signature,  // 必填，签名，见附录1
			jsApiList: ['chooseWXPay'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
	});
	wx.ready(res=> {
		wx.chooseWXPay({
			appId:data.appId,
			timestamp:data.timestamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
			nonceStr:data.nonceStr, // 支付签名随机串，不长于 32 位
			'package': data.package, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=***）
			signType:data.signType, // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
			paySign:data.paySign, // 支付签名
			success(res) {
				callback(res);
			},
			fail(res) {
				errCallback(res);
			}
		});
  });

  wx.error(function(res) {
	 alert("config信息验证失败");
  });

}

export const wxShare = (confData,shareData)=>{
	wx.config(confData)
	if(shareData){
		wx.ready(function(){
			wx.updateAppMessageShareData({
				title: shareData.title, // 分享标题  
				desc: shareData.desc, // 分享描述  
				link: shareData.link, // 当前页面链接  
				imgUrl:shareData.img 
				
			});
			wx.updateAppMessageShareData({
				title: shareData.title, // 分享标题
				desc: shareData.desc, // 分享描述  
				link: shareData.link, // 当前页面链接  
				imgUrl:shareData.img 
			});
		})
	}
	
	wx.error(function(res){
		console.log(111,res);
	})
	return wx
}
 
export default wxPay;