<template>
	<view class="contact">
		<image class="img" src="https://github.com/Crazy-Uncle/imgs/blob/main/Snipaste_2023-05-03_11-10-26.png?raw=true"></image>
		
		<view class="info">
			<view @click="phone">联系电话：19113250241（点击拨打）</view>
			<view>地址：四川省成都市金堂县西南交通大学希望学院</view>
		</view>
		
		<!-- 地图 -->
		<map class="map" :longitude="longitude" 
		:latitude="latitude"
		:markers="marker"
		:scale="scale"
		></map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				longitude:104.464191,
				latitude:30.852438,
				scale:13,
				marker:[
					{
						id:1,
						longitude:104.464798,
						latitude:30.852438,
						iconPath:'../../static/icon/学校.png',
						width:30,
						height:30
					}
				]
				
			}
		},
		methods: {
			phone(){
				uni.makePhoneCall({
					phoneNumber:'19113250241',
					fail:(err)=> {
						console.log(err);
					}
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.contact{
		.img{
			width: 750rpx;
			height: 320rpx;
		}
		.info{
			padding: 10rpx 20rpx;
			font-size: 30rpx;
			view{
				line-height: 50rpx;
				border-bottom: 1px solid #eee;
			}
		}
		
		.map{
			width: 750rpx;
			height: 750rpx;
		}
	}
</style>
