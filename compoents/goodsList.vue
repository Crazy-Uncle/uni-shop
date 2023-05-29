<template>
	<view class="goods-list">
		<view class="goods-item" v-for="(item,index) in goods_list" :key="index" @click="navto">
			<image src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1681726094.73687921.png"></image>
			<view class="price">
				<text>￥{{item.newPrice}}</text>
				<text>￥{{item.oldPrice}}</text>
			</view>
			
			<view class="name">
				<text>{{item.name}}</text>
			</view>
		</view>
		<!-- {{}} -->
		
	</view>
</template>

<script>
	export default{
		props:['goodsList'] ,
		data(){
			return {
				goods_list:[
					{
						newPrice:2199,
						oldPrice:2499,
						name:'华为荣耀(HUAWEI)荣耀6Plus 16G双4G版'
					},
					{
						newPrice:2199,
						oldPrice:2499,
						name:'华为荣耀(HUAWEI)荣耀6Plus 16G双4G版'
					},
					{
						newPrice:2199,
						oldPrice:2499,
						name:'华为荣耀(HUAWEI)荣耀6Plus 16G双4G版'
					},
					{
						newPrice:2199,
						oldPrice:2499,
						name:'华为荣耀(HUAWEI)荣耀6Plus 16G双4G版'
					},
					{
						newPrice:2199,
						oldPrice:2499,
						name:'华为荣耀(HUAWEI)荣耀6Plus 16G双4G版'
					},
					{
						newPrice:2199,
						oldPrice:2499,
						name:'华为荣耀(HUAWEI)荣耀6Plus 16G双4G版'
					}
				]
			}
		},
		methods:{
			reachBottom(){
				this.$emit('goodList',this.goods_list)
			},
			navto(){
				uni.navigateTo({
					url:'/pages/goods-detail/goods-detail'
				})
			}
			
		},
		created() {
			this.reachBottom()
			this.$emit('goods',this.goods_list)
			// this.goods_list=[...this.goodsList]
		},
		watch:{
			goodsList:function(val,oldval){
				this.goods_list=val
				
			}
			
		}
		
		
		
	}
	
	
</script>
	
<style lang="less" scoped>
	.goods-list{
		padding: 0 15rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		.goods-item{
			background-color: #fff;
			width: 355rpx;
			margin: 20rpx 0;
			padding: 15rpx;
			box-sizing: border-box;
			image{
				width: 80%;
				height: 300rpx;
				display: flex;
				margin:  auto;
			}
			
			.price{
				color: #aa0000;
				font-size: 36rpx;
				
				text:nth-child(2){
					color: #ccc;
					font-size: 20rpx;
					margin-left: 14rpx;
					text-decoration: line-through;
				}
			}
			
			.name{
				font-size: 28rpx;
				line-height: 50rpx;
				padding-bottom: 15rpx;
				padding-top: 10rpx;
			}
		}
	}
</style>