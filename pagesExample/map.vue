<template>
	<view class="content">
		<map @tap="getMapLocation" class="height-100vh" style="width: 100%;" :latitude="latitude" :longitude="longitude"
			:markers="covers">
		</map>
		<button type="default" @click="getCurrentLocation()">获取当前位置</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				longitude: 116.39742,
				latitude: 39.909,
				covers: [], //存放标记点数组
			}
		},
		onLoad() {

		},
		methods: {
			// 通过自带的方法获取到当前的经纬度，调用方法获取到地址获取到地址的中文信息
			getCurrentLocation() {
				let that = this //在uniapp中要定义一下this才能使用
				uni.getLocation({
					type: 'gcj02',
					isHighAccuracy: true, // 开启高精度定位
					accuracy: 'best',
					// altitude:true , // 获取高度信息
					success: function(res) {
						console.log(res, '312312312312')
						that.longitude = res.longitude;
						that.latitude = res.latitude;
						that.openMap();
						// that.loAcquire(that.longitude, that.latitude)
					},
					// complete((com)=>{
					// 	console.log(com,'123123123123')
					// })
				});
			},

			openMap() {
				uni.chooseLocation({
					success: function(res) {
						console.log('位置名称：' + res.name);
						console.log('详细地址：' + res.address);
						console.log('纬度：' + res.latitude);
						console.log('经度：' + res.longitude);
					}
				});

			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>
