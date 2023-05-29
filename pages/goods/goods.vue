<template>
	<view class="goods">
		
			<goodsList @goods='getGoods' ></goodsList>
	</view>

</template>

<script>
	
	import goodsList from '../../compoents/goodsList.vue'
	export default {
		components:{goodsList},
		data() {
			return {
				goods:[]
			}
		},
		methods: {
			getGoods(val){
				// console.log(val);
				this.goods=val
			}
		},
		onReachBottom() {
			// console.log('触底了');
			// this.goods=[...this.goods,...this.goods]
			// console.log(this.goods);
		},
		onLoad() {
			this.getGoods()
		},
		onPullDownRefresh() {
			let timer=null
			// console.log(this);
			
			timer=setTimeout(()=>{
				clearTimeout(timer)
				uni.stopPullDownRefresh()
			},2000)
			
			
		}
	}
</script>

<style lang="less" scoped>
	.goods{
		background-color: #eee;
	}
</style>
