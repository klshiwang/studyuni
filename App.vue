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

<style >
	/*每个页面公共css */
	
	@font-face {
		font-family: 'iconfont';
		/* Project id 2001065 */
		src:
			url('https://at.alicdn.com/t/font_2001065_oj0ywcvwyq.woff2?t=1626850283065') format('woff2'),
			url('https://at.alicdn.com/t/font_2001065_oj0ywcvwyq.woff?t=1626850283065') format('woff'),
			url('https://at.alicdn.com/t/font_2001065_oj0ywcvwyq.ttf?t=1626850283065') format('truetype');
	}
	
	.iconfont{
	    font-family:"iconfont" !important;
	    font-size:32rpx;font-style:normal;
	    -webkit-font-smoothing: antialiased;
	    /* -webkit-text-stroke-width: 0.2rpx; */
	    -moz-osx-font-smoothing: grayscale;
	}
	
	body{
		font-size: 30rpx;
	}
</style>
