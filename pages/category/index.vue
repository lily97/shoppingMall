<template>
	<view class="content">

		<view class="search">
			<u-search placeholder="日照香炉生紫烟" :showAction="false" v-model="keyword" @search="search"></u-search>
		</view>

		<view class="commodity">
			<view class="menu">
				<scroll-view scroll-y="true">
					<view :class="selectId==item.id?'each selected':'each'" v-for="(item,index) in menuList"
						@tap.stop="swichMenu(item.id)">
						<view class="left">
						</view>
						<view class="right">
							{{item.title}}
						</view>
					</view>
				</scroll-view>
			</view>

			<view class="list">
				<view class="every" v-for="(item,index) in 9" @tap="toDetails(item)">
					<u-image src="/static/img/tab-01.png" width="137px" height="160px" class="commImage"></u-image>
					<view class="name">
						香飘飘奶茶
					</view>
					<view class="desc">
						一年卖出三亿多杯
					</view>
					<view class="buy">
						<view class="price">
							￥134
						</view>
						<view class="iconfont icon-my">

						</view>
					</view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	import {
		log
	} from 'util';
	import {
		getAllCategory
	} from '../../api/index.js'
	export default {
		data() {
			return {
				menuList: [],
				keyword: '',
				selectId: '',
			}
		},
		onLoad() {
			this.getAllCategory();
		},
		methods: {
			swichMenu(id) {
				this.selectId = id
			},
			search() {
				console.log(this.keyword);
			},

			getAllCategory() {
				getAllCategory().then(res => {
					this.menuList = res.list;
					this.selectId = res.list[0].id;
					console.log('resssss', res);

				})
			},
			toDetails(item) {
				uni.navigateTo({
					url: '/pages_commodity/details/index?value=' + item
				})
			}
		}
	}
</script>

<style lang="scss">
	.content {
		height: calc(100vh - 104px); // 计算去掉头部和底部tabbar之后的高度

		// display: flex;
		// flex-direction: column;
		// align-items: center;
		// justify-content: center;
		.search {
			padding: 10px;
			background: $uni-bg-color;
		}

		.commodity {
			display: flex;

			.menu {
				min-width: 110px;
				height: calc(100vh - 158px);
				background: $uni-bg-color;

				.each {
					height: 50px;
					display: flex;
					align-items: center;

					.left {
						height: 30px;
						width: 4px;
						background: $uni-bg-color;
					}

					.right {
						color: black;
						margin-left: 20px;
					}
				}

				.selected {
					color: $uni-color-theme;
					background: #f2f2f2;

					.left {
						background: $uni-color-theme;
					}

					.right {
						color: $uni-color-theme;
					}
				}
			}

			.list {
				height: calc(100vh - 158px);
				padding: 10px;
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;
				overflow-y: auto;

				.every {
					width: 137px;
					height: 230px;
					margin-bottom: 10px;
					border-radius: 5px;
					background: $uni-bg-color;

					.name {
						padding: 0 10px;
						font-size: $uni-font-size-base;
					}

					.desc {
						padding: 0 10px;
						margin: 5px 0;
						color: $uni-text-color-grey;
						font-size: $uni-font-size-sm;
					}

					.buy {
						padding: 0 10px;
						display: flex;
						align-items: center;
						justify-content: space-between;
						.price{
							color: #ff0000;
						}

					}

					.commImage {
						width: 130px;
						height: 160px;
					}
				}

				.every:last-child {
					margin-bottom: 20px;
				}
			}
		}
	}
</style>
