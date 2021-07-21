const BASEURL = "https://api-hmugo-web.itheima.net/api/public/v1";
export function http(option){
	return new Promise((resolve,reject)=>{
		uni.showLoading({
			title: "玩命加载中...."
		})
		
		uni.request({
			url: BASEURL + option.url,
			data:option.data || {},
			method:option.method || 'get',
			success: (res) => {
				if (res.statusCode != 200) {
					uni.showToast({
						title: "接口请求失败",
						icon: "none"
					})
				} else {
					console.log(res.data.message);
					resolve(res.data.message);
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
	});
}