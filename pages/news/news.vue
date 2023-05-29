<template>
	<view class="news">
		<view class="news_item" v-for="item in 10" @click="infoDetail">
			<image src="https://github.com/Crazy-Uncle/imgs/blob/main/%E6%88%B7%E5%9E%8B%E8%AE%BE%E8%AE%A1.jpg?raw=true"></image>
			<view class="right">
				<view class="tit">
					1季度多家房企利润跌幅超50%去库存促销战打响
				</view>
				
				<view class="info">
					<text>发表时间：2023-5-04</text>
					<text>浏览：100</text>
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			infoDetail(){
				uni.navigateTo({
					url:'/pages/news-detail/news-detail'
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.news{
		.news_item{
			display: flex;
			padding: 10rpx 20rpx;
			border-bottom: 1px solid #aa0000;
			image{
				width: 200rpx;
				height: 150rpx;
				min-width: 200rpx;
				max-width: 200rpx;
			}
			.right{
				margin-left: 15rpx;
				display: flex;
				flex-direction: column;
				.tit{
					font-size: 30rpx;
				}
			
			.info{
				font-size: 24rpx;
			}
			}
		}
	}
</style>
