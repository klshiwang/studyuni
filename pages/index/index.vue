<template>

	<view class="main">
		<!-- banner -->
		<swiper class="banner" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="(item,index) in bannerList" :key="index">
				<image :src="item.image_src" mode="aspectFill"></image>
			</swiper-item>
		</swiper>

		<!-- nav -->
		<view class="nav">
			<view v-for="(item,index) in navList" :key="index" class="nav-item">
				<navigator url="/pages/category/category" hover-class="navigator-hover" open-type="switchTab">
				    <view class="yuan">
						<text class="iconfont" :class="item.icon"></text>
					</view>
					<text>{{item.title}}</text>           
				</navigator>
				
			</view>
		</view>
		<!-- 一楼 -->
		11111
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				lou1:[],
				bannerList: [],
				navList: [{
						id: 1,
						title: "京西超市",
						icon: "icon-home1",
						url: ""
					},
					{
						id: 2,
						title: "联系我们",
						icon: "icon-home2",
						url: ""
					}, {
						id: 3,
						title: "社区图片",
						icon: "icon-home3",
						url: ""
					}, {
						id: 4,
						title: "学习视频",
						icon: "icon-home4",
						url: ""
					}
				]
			}
		},

		onLoad() {
			this.getBannerList();
			this.getLou1List();
		},

		mounted() {
			// console.log(456)
		},
		methods: {
			getBannerList() {
				uni.showLoading({
					title: "玩命加载中...."
				})

				uni.request({
					url: this.baseUrl + "/home/swiperdata",
					success: (res) => {
						if (res.statusCode != 200) {
							uni.showToast({
								title: "接口请求失败",
								icon: "none"
							})
						} else {
							console.log(res.data.message);
							this.bannerList = res.data.message;
						}
					},
					fail: (err) => {
						uni.showTabBar({
							title: "网络请求失败",
							icon: "none"
						})
						console.log(err);
					},
					complete: () => {
						uni.hideLoading();
					}

				})


			},
			async getLou1List(){
				let data =  await this.$http({url:"/home/floordata"});
				console.log(data)
				this.lou1 = data;
			}
			
		}
	}
</script>

<style lang="scss">
	

	.banner {
		width: 100%;
		height: 300rpx;

		image {
			width: 100%;
			height: 100%;
		}
	}

	.nav {
		display: flex;
		justify-content: space-around;
		margin-top: 20rpx;

		.yuan {
			width: 120rpx;
			height: 120rpx;
			border-radius: 50%;
			background-color: #efefef;
			margin-bottom: 10rpx;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
	.iconfont{
		font-size: 60rpx;
	}
	.icon-home1::after{
		content: "\e677";
	}
	.icon-home2::after{
		content: "\e70c";
	}
	.icon-home3::after{
		content: "\e604";
	}
	.icon-home4::after{
		content: "\e606";
	}
</style>
