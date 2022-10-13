<template>
	<view class="content">
		<view class="block-1">
			<view class="line-1">
				<view class="price">
					<view class="presentPrice">
						￥103.9
					</view>
					<view class="originalPrice">
						￥110.9
					</view>
				</view>
				<view class="share">
					<view class="iconfont icon-share">

					</view>
					<view class="text">
						分享
					</view>
				</view>
			</view>
			<view class="line-2">
				香飘飘奶茶 霸气椰椰奶茶饮料8杯装
			</view>
			<view class="line-3">
				好喝不腻 买就赠随机5袋曼优优
			</view>
			<view class="line-4">
				月销量 9821
			</view>
		</view>
		
		<view class="block-2">
			<view class="line-1">
				<view class="left">
					<view class="">
						
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		onLoad(item) {
			console.log(item, 'dasdasddd');
		}
	}
</script>

<style lang="scss">
	.content {
		.block-1 {
			background: $uni-bg-color;
			padding: 15px 0 15px 15px;

			.line-1 {
				display: flex;
				align-items: center;
				justify-content: space-between;
				margin-bottom: 10px;

				.price {
					display: flex;
					align-items: center;

					.presentPrice {
						color: $uni-color-theme;
					}

					.originalPrice {
						margin-left: 10px;
						color: $uni-text-color-grey;
						font-size: $uni-font-size-sm;
					}
				}

				.share {
					width: 55px;
					height: 25px;
					background: #f2f2f2;
					border-radius: 10px 0 0 10px;
					display: flex;
					align-items: center;
					color: $uni-text-color-grey;
				}
			}
			.line-2{
				font-weight: bold;
				margin-bottom: 10px;
			}
			.line-3{
				margin-bottom: 10px;
				font-size: $uni-font-size-base;
			}
			.line-4{
				font-size: $uni-font-size-sm;
				color: $uni-text-color-grey;
			}
		}
	}
</style>
