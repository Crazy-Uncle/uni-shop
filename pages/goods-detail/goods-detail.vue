<template>
	<view class="goods_detail">
		<swiper autoplay indicator-dots>
			<swiper-item v-for="item in swipers" :key="item.id">
				<image :src="item.path"></image>
			</swiper-item>
		</swiper>
		
		<view class="box1">
			
			<view class="price">
				<text>￥8000</text>
				<text>￥9200</text>
			</view>
			
			<view class="text">
				【新品】HUAWEI P60 256GB 羽砂黑 鸿蒙手机
			</view>
		</view>
		
		<view class="line"></view>
		
		<view class="box2">
			<view>商品编码：2601010424805</view>
			<view>库存：200</view>
		</view>
		
		<view class="line"></view>
		
		<view class="box3">
			<view class="tit">详情介绍</view>
			<view class="content" v-for="(item,index) in detail" :key="index">
				<image :src="item.src" ></image>
			</view>
		</view>
		
		
		<view class="goods-carts">
			<uni-goods-nav :options="options" 
			:fill="true" :button-group="buttonGroup" 
			@click="onClick"
			@buttonClick="buttonClick" />
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				swipers:[
					{path:'https://raw.githubusercontent.com/Crazy-Uncle/imgs/47a1eca54de317bd4608a12d99b4768e10080bf6/phone01.png',id:1},
					{path:'https://github.com/Crazy-Uncle/imgs/blob/main/phone02.png?raw=true',id:2},
					{path:'https://github.com/Crazy-Uncle/imgs/blob/main/phone03.png?raw=true',id:3},
					{path:'https://github.com/Crazy-Uncle/imgs/blob/main/phone04.png?raw=true',id:4},
				],
				detail:[
					{src:'https://github.com/Crazy-Uncle/imgs/blob/main/%E8%AF%A6%E6%83%851.png?raw=true'},
					{src:'https://github.com/Crazy-Uncle/imgs/blob/main/%E8%AF%A6%E6%83%852.png?raw=true'},
					{src:'https://github.com/Crazy-Uncle/imgs/blob/main/%E8%AF%A6%E6%83%853.png?raw=true.png'},
					{src:'https://github.com/Crazy-Uncle/imgs/blob/main/%E8%AF%A6%E6%83%854.png?raw=true'},
					{src:'https://github.com/Crazy-Uncle/imgs/blob/main/%E8%AF%A6%E6%83%855.png?raw=true'},
					{src:'https://github.com/Crazy-Uncle/imgs/blob/main/%E8%AF%A6%E6%83%856.png?raw=true'},
				],
				options: [{
						icon: 'chat',
						text: '客服'
					}, {
						icon: 'shop',
						text: '店铺',
						info: 2,
						infoBackgroundColor: '#007aff',
						infoColor: "#f5f5f5"
					}, {
						icon: 'cart',
						text: '购物车',
						info: 2
					}],
					
					
					buttonGroup: [{
							text: '加入购物车',
							backgroundColor: 'linear-gradient(90deg, #FFCD1E, #FF8A18)',
							color: '#fff'
						},
						{
							text: '立即购买',
							backgroundColor: 'linear-gradient(90deg, #FE6035, #EF1224)',
							color: '#fff'
						}
					],
					customButtonGroup: [{
							text: '加入购物车',
							backgroundColor: 'linear-gradient(90deg, #1E83FF, #0053B8)',
							color: '#fff'
						},
						{
							text: '立即购买',
							backgroundColor: 'linear-gradient(90deg, #60F3FF, #088FEB)',
							color: '#fff'
						}
					],
					customButtonGroup1: [{
						text: '立即购买',
						backgroundColor: 'linear-gradient(90deg, #FE6035, #EF1224)',
						color: '#fff'
					}]
							
			}
		},
		methods: {
			onClick(e) {
			uni.showToast({
				title: `点击${e.content.text}`,
				icon: 'none'
			})
		},
		buttonClick(e) {
			console.log(e)
			this.options[2].info++
		}
	},
	}
	
</script>

<style lang="less" scoped>
	.example-body {
			padding: 0;
			/* #ifndef APP-NVUE */
			display: block;
			/* #endif */
		}
	
		.goods-carts {
			/* #ifndef APP-NVUE */
			display: flex;
			/* #endif */
			flex-direction: column;
			position: fixed;
			left: 0;
			right: 0;
			/* #ifdef H5 */
			left: var(--window-left);
			right: var(--window-right);
			/* #endif */
			bottom: 0;
		}
	
	.goods_detail{
		swiper{
			height: 700rpx;
			image{
				width: 100%;
				height: 100%;
			}
		}
		
		.box1{
			padding: 20rpx;
		
			.price{
				font-size: 35rpx;
				color: #aa0000;
					line-height: 60rpx;
				text:nth-child(2){
					color: #eee;
					font-size: 28rpx;
					text-decoration: line-through;
				}
			}
			.text{
				font-size: 35rpx;
				// font-weight: 700;
			}
		}
		
		.line{
			height: 15rpx;
			width: 750rpx;
			background-color: #eee;
		}
		
		.box2{
			padding: 0 20rpx;
			font-size: 32rpx;
			line-height: 70rpx;
		}
		
		.box3{
			.tit{
				font-size: 32rpx;
				padding-left: 20rpx;
				border-bottom: 1px solid #eee;
				line-height: 70rpx;
			}
			
			.content{
				// padding-left: 20rpx;      
					   image{
						   width: 750rpx;
						   // height: auto;
					   }
			}
		}
		
	}
</style>
