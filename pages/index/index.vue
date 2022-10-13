<template>
	<view class="">
		<u-button type="primary" text="echarts" @tap="toEcharts()"></u-button>
		<u-button type="primary" text="ucharts" @tap="toUcharts()"></u-button>
		<u-button type="primary" text="map" @tap="toMap()"></u-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		onLoad() {

		},

		methods: {
			toEcharts() {
				uni.navigateTo({
					url: '/pagesExample/echarts'
				})
			},
			toUcharts() {
				uni.navigateTo({
					url: '/pagesExample/ucharts'
				})
			},
			toMap() {
				uni.navigateTo({
					url: '/pagesExample/map'
				})
			},
		}
	}
</script>

<style lang="scss">
uni-button{
	margin-bottom: 20px;
}
</style>
