<template>
	<view class="home">
		<swiper indicator-dots autoplay circular>
			<swiper-item v-for="item in swiper" :key="item.id">
				<image :src="item.src"></image>
			</swiper-item>
			
		</swiper>
		
		<!-- 导航区域 -->
	
		<view class="nav">
			<view class="nav-item" v-for="(item,index) in navs" 
			:key="index"
			@click="navItemClick(item.path)"
			>
				<view :class="item.icon"></view>
				<text>{{item.title}}</text>
			</view>
			
			
		</view>
		
		<!-- 推荐商品区 -->
		<view class="hot_goods">
			<view class="tit">推荐商品</view>
			<goodsList @goodsItemClick="goodsDetail" @goodList="getGoodsList" :goodsList="goodsList"></goodsList>
		</view>
		
		
		<!--  -->
	</view>
</template>

<script>
// import { async } from 'regenerator-runtime'
import goodsList from '../../compoents/goodsList.vue'
	export default {
		components:{goodsList},
		data() {
			return {
				swiper:[
					{src:'https://github.com/Crazy-Uncle/imgs/blob/main/swiper1.jpg?raw=true'},
					{src:'https://github.com/Crazy-Uncle/imgs/blob/main/swiper2.jpg?raw=true'},
					{src:'https://github.com/Crazy-Uncle/imgs/blob/main/swiper3.jpg?raw=true'},
					{src:'https://github.com/Crazy-Uncle/imgs/blob/main/swiper4.png?raw=true'},
				],
				navs:[
					{icon:'iconfont icon-ziyuan',
					title:'河马超市',
					path:'/pages/goods/goods',
					},
					{icon:'iconfont icon-guanyuwomen',
					title:'联系我们',
					path:'/pages/contact/contact',
					},
					{icon:'iconfont icon-tupian',
					title:'社区图片',
					path:'/pages/pics/pics',
					},
					{icon:'iconfont icon-ziyuan',
					title:'学习视频',
					path:'/pages/videos/videos',
					}
				],
				
				goodsList:[],
				nativeGoods:[]
			}
		},
		onLoad() {
			// this.getSwiper()
		
		},
		methods: {
			// 获取轮播图的数据
		 //    async getSwiper(){
				
			// 	const res= await this.$myRequest({
			// 		url:'/api/getlunbo'
			// 	})
			// 	// console.log(res);
			// 	this.swiper=res.data.message
			// 	console.log(this.swiper);
			// 	// console.log('获取轮播图数据');
			// },
			// 导航点击处理函数
			navItemClick(url){
				// console.log(url);s
				
				uni.navigateTo({
					url
				})
			},
			
			// 接受商品列表数据
			getGoodsList(data){
				this.goodsList=data
				this.nativeGoods=data
			},
			goodsDetail(val){
				// console.log(val);
			}
					
		},
		onReachBottom() {
			if(this.goodsList.length >=32){
				return uni.showToast({
					title:"没有更多数据了...",
					
				})
			}else{
				this.goodsList = [...this.goodsList,...this.goodsList]
			}
			// console.log('触底了');
			// console.log(...this.goodsList,...this.goodsList);
		},
		onPullDownRefresh() {
			let timer=null

			this.goodsList=this.nativeGoods
			timer=setTimeout(()=>{
				clearTimeout(timer)
				uni.stopPullDownRefresh()
			},2000)
			
			
		}
	}
</script>

<style lang="less">
	.home{
		swiper{
			width: 750rpx;
			height: 380rpx;
			
			image{
				width: 100%;
				height: 100%;
			}
		}
		
		.nav{
			display: flex;
			margin-top: 20rpx;
			.nav-item{
				width: 25%;
				text-align: center;
				
				view{
					width: 120rpx;
					height: 120rpx;
					background-color:  #aa0000;
					border-radius: 60rpx;
					margin: auto;
					line-height: 120rpx;
					color: #fff;
					font-size: 50rpx;
				}
				.icon-tupian{
					font-size: 45rpx;
				}
				text{
					font-size: 30rpx;
				}
			}
		}
	
	
		.hot_goods{
			background-color: #eee;
			overflow: hidden;
			margin-top: 20rpx;
			.tit{
				height: 100rpx;
				line-height: 100rpx;
				color: #aa0000;
				text-align: center;
				letter-spacing: 40rpx;
				background-color: #fff;
				margin: 12rpx 0;
			}
		}
		
		
	
	}
	
	
	
</style>
