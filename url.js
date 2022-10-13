const appConfig = {
	baseUrl: 'http://ll1050.linliancn.com',
	appId: '602fc35c189f4bd2b15ed63a965b8a67',
	token: '6WT3DoKwgLjP5J0',
	key: 'IyLCEH4ARKn5wCkCWJ4N7f19XqadKzRhGEvme7hew8',
	wxAppid:'wxbcc54f6a309c63b7',
	wxAuthHost:'https://open.weixin.qq.com/connect/oauth2/authorize',
	webUrl:null,
	appUrl:null,
	appBid:'com.ywuhulian'
}

appConfig.webUrl = appConfig.webUrl||appConfig.baseUrl
appConfig.appUrl = appConfig.appUrl||appConfig.baseUrl

const appApi = {
	
	getAppInfo: `${appConfig.appUrl}/distribute/upgrade`,//app升级
	getProtocol: `${appConfig.baseUrl}/api/protocol`,//
	getPhoneCode: `${appConfig.baseUrl}/api/user/get-code`,//获取验证码
	doLogin: `${appConfig.baseUrl}/api/user/login`, //会员登录
	doRegister: `${appConfig.baseUrl}/api/user/register`, //会员注册
	doForget: `${appConfig.baseUrl}/api/user/look-pwd`, //会员找回密码
	
	wxLogin: `${appConfig.baseUrl}/api/user/wxLogin`,//微信登录(公众号)
	appLogin: `${appConfig.baseUrl}/api/user/appLogin`,//微信授权登录（app）
	wxAuth:`${appConfig.baseUrl}/api/share`,//微信分享
	
	getConfig:`${appConfig.baseUrl}/api/config`,
	getAbout: `${appConfig.baseUrl}/api/about`, //关于我们
	uploadUrl: `${appConfig.baseUrl}/api/upload/images`, //上传图片
	
	getShopIndex: `${appConfig.baseUrl}/api/shop/index`,
	getShopSeckill: `${appConfig.baseUrl}/api/shop/seckill`,
	getAllGoods: `${appConfig.baseUrl}/api/shop/goods`, //商品搜索
	getAllCategory: `${appConfig.baseUrl}/api/shop/category`, //所有分类
	getGoodsDetail: `${appConfig.baseUrl}/api/shop/goods/detail`, //商品详情
	getGoodsSku: `${appConfig.baseUrl}/api/shop/goods/sku`, //商品规格
	postNowBuy: `${appConfig.baseUrl}/api/shop/goods/buy`, //立即购买
	postSeckillBuy: `${appConfig.baseUrl}/api/shop/goods/seckill`, //立即购买
	postSeckillCancel: `${appConfig.baseUrl}/api/shop/goods/seckillCancel`, //立即购买
	postCreateOrder: `${appConfig.baseUrl}/api/shop/goods/order`, //创建订单
	postPayFormOrder: `${appConfig.baseUrl}/api/shop/order/pay`, //立即支付
	postPayOrder: `${appConfig.baseUrl}/api/shop/pay`, //支付订单
	
	getDefaultAddress: `${appConfig.baseUrl}/api/shop/addr/get`, //获取默认地址
	getAddressList: `${appConfig.baseUrl}/api/shop/addr`, //我的地址列表
	postAddAddress: `${appConfig.baseUrl}/api/shop/addr/add`, //添加地址
	postEditAddress: `${appConfig.baseUrl}/api/shop/addr/edit`, //更改地址
	postDeleteAddress: `${appConfig.baseUrl}/api/shop/addr/remove`, //删除地址
	getAddressInfo: `${appConfig.baseUrl}/api/shop/addr/get`, //根据id获取地址


	postAddCart: `${appConfig.baseUrl}/api/shop/cart/add`, //添加购物车
	getCartList: `${appConfig.baseUrl}/api/shop/cart`, //购物车列表
	postUpdateCart: `${appConfig.baseUrl}/api/shop/cart/edit`, //更新购物车
	postSettlementCart: `${appConfig.baseUrl}/api/shop/goods/buy-cart`, //购物车结算
	postDeteleCart: `${appConfig.baseUrl}/api/shop/cart/remove`, //购物车删除
	
	getOrderNum:`${appConfig.baseUrl}/api/shop/order-status`,
	getOrderList: `${appConfig.baseUrl}/api/shop/order`, //订单列表
	getOrderDetail: `${appConfig.baseUrl}/api/shop/order/detail`, //订单详情
	postConfirmOrder: `${appConfig.baseUrl}/api/shop/order/confirm`, //确认收货
	postCancelOrder: `${appConfig.baseUrl}/api/shop/order/cancel`, //取消订单
	postDeleteOrder: `${appConfig.baseUrl}/api/shop/order/remove`, //删除订单
	
	
	getMyComment: `${appConfig.baseUrl}/api/user/comment`, //评价管理
	getGoodsComment: `${appConfig.baseUrl}/api/shop/comment`, //商品评论列表
	postAddGoodsComment: `${appConfig.baseUrl}/api/shop/addComment`, //商品添加评论
	
	
	getBarterList: `${appConfig.baseUrl}/api/shop/barterList`, //易货商品
	getBarterCategory: `${appConfig.baseUrl}/api/shop/barterCate`, //易货商品
	postBarterAdd: `${appConfig.baseUrl}/api/shop/barterAdd`, //易货商品
	postDeleteBarter: `${appConfig.baseUrl}/api/shop/barterDel`, //删除易货商品
	
	
	getMyInfo: `${appConfig.baseUrl}/api/user/index`, //我的资料
	getUserRanks: `${appConfig.baseUrl}/api/user/ranks`, //个人信息
	getUserInfo: `${appConfig.baseUrl}/api/user/info`, //个人信息
	getBaseInfo: `${appConfig.baseUrl}/api/user/profile`, //基本资料
	editInfo: `${appConfig.baseUrl}/api/user/profile-edit`, //修改资料
	getWalletInfo: `${appConfig.baseUrl}/api/user/wallet`, //会员钱包
	getPayType:`${appConfig.baseUrl}/api/user/pay-card`,
	bindPayInfo:`${appConfig.baseUrl}/api/user/bind-pay`,
	getAccountFlow: `${appConfig.baseUrl}/api/user/account/flow`, //财务流水
	getTeamUsers: `${appConfig.baseUrl}/api/user/team-users`, //我的团队
	getMyTeam: `${appConfig.baseUrl}/api/user/team`, //我的团队
	postUpdatePwd: `${appConfig.baseUrl}/api/user/edit-pwd`, //修改登录密码安全密码
	postSaveHeadPic: `${appConfig.baseUrl}/api/user/edit-avatar`, //更改头像
	getNameStatus: `${appConfig.baseUrl}/api/user/is-name`, //实名状态
	postApplyName: `${appConfig.baseUrl}/api/user/apply-name`, //提交实名信息
	
	
	
	getRule: `${appConfig.baseUrl}/api/user/account/rule`, //规则
	
	postWdBcApply: `${appConfig.baseUrl}/api/user/account/wd-bc`, //提现（场外）
	postWdApply: `${appConfig.baseUrl}/api/user/account/wd`, //提现
	getWdRecord: `${appConfig.baseUrl}/api/user/account/wd-record`, //提现记录
	
	postRgApply: `${appConfig.baseUrl}/api/user/account/rg`, //充值
	getRgRecord: `${appConfig.baseUrl}/api/user/account/rg-record`, //充值记录
	
	
	postTfApply: `${appConfig.baseUrl}/api/user/account/tf`, //转账
	getTfRecord: `${appConfig.baseUrl}/api/user/account/tf-record`, //转账记录
	
	getScanInfo: `${appConfig.baseUrl}/api/user/account/scanInfo`, //收款码
	postScanPay: `${appConfig.baseUrl}/api/user/account/scanPay`, //扫码支付
	getScanList: `${appConfig.baseUrl}/api/user/account/scanList`, //扫码支付记录
	
	getAdSense:`${appConfig.baseUrl}/api/user/ad-sense`,//广告

	getRanking: `${appConfig.baseUrl}/api/user/ranking`, //光荣榜
	getRankDetail: `${appConfig.baseUrl}/api/user/rankDetail`, //光荣榜详情
	
	getNoticeList:`${appConfig.baseUrl}/api/user/notice`,//公告（废弃）
	getNotice: `${appConfig.baseUrl}/api/user/notice`, //公告
	getNoticeDetail: `${appConfig.baseUrl}/api/user/notice-detail`, //公告详情
	postFeedback: `${appConfig.baseUrl}/api/user/feedback`, //技术咨询
	getCompany: `${appConfig.baseUrl}/api/user/company`, //生态地图
	
	getArticleCate: `${appConfig.baseUrl}/api/user/article-cate`, //文章分类
	getArticle: `${appConfig.baseUrl}/api/user/article`, //新闻
	getArticleDetail: `${appConfig.baseUrl}/api/user/article-detail`, //文章详情
	getVideo: `${appConfig.baseUrl}/api/user/video`, //视频（废弃）
	
	
	getCourseCate: `${appConfig.baseUrl}/api/course/cate`, //课程分类
	getCourseList: `${appConfig.baseUrl}/api/course/list`, //课程列表
	getCourseDetail: `${appConfig.baseUrl}/api/course/detail`, //课程分类
	

	sign:`${appConfig.baseUrl}/api/user-sign`,
	
}