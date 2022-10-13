<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import "uview-ui/index.scss";
	@import 'static/css/iconfont.css';
	@import "common/css/common.css";
	uni-page-wrapper{
		// background: $uni-bg-color-grey;
		background: #f2f2f2;
	}
</style>
