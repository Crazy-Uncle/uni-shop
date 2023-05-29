<template>
	<view class="pics">
		<scroll-view class="left" scroll-y>
			<view v-for="(item,index) in arr" 
			:key="index"
			:class="index==actives?'active':''"
			@click="activeClick(index)"
			>
			{{item.name}}</view>
		</scroll-view>
		
		<scroll-view class="right" scroll-y>
			<view class="item" >
				<image @click="preview(actives)" :src="arr[actives].path"  ></image>
				<text user-select>{{arr[actives].text}}</text>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				arr:[
					{name:'摄影设计',text:'4月18日上午，第二十六届河北省摄影艺术展览在邢台市宁晋县童泰婴幼儿服饰有限公司隆重开幕！',path:'https://github.com/Crazy-Uncle/imgs/blob/main/%E6%91%84%E5%BD%B1.jpeg?raw=true'},
					{name:'明星美女',text:'新浪娱乐讯 5月3日，王一栩在微博晒出和虞书欣[微博]、吴宣仪聚餐的照片，“开心快乐每一天，假期的尾巴，和妹妹们忙里偷闲的晚餐。”照片中，吴宣仪拖着下巴耍酷，虞书欣戴着墨镜微笑，让广大网友直呼羡慕。',path:'https://github.com/Crazy-Uncle/imgs/blob/main/%E6%98%8E%E6%98%9F%E7%BE%8E%E5%A5%B3.jpg?raw=true'},
					{name:'空间设计',text:'走过日常喧嚣，家，是安放身心的巢居，褪去一身疲惫，让一切回归宁静、纯粹。空间里收藏着一家人的情感记忆，摒除过多干扰、保留大面积开窗，在拥抱日光的居家场域，使天光均匀洒落每一区块，尽享畅意自适的生活光景。',path:'https://github.com/Crazy-Uncle/imgs/blob/main/%E7%A9%BA%E9%97%B4%E8%AE%BE%E8%AE%A1.jpg?raw=true'},
					{name:'家居生活',text:'自然舒适原木风家居设计',path:'https://github.com/Crazy-Uncle/imgs/blob/main/%E5%AE%B6%E5%B1%85%E8%AE%BE%E8%AE%A1.jpg?raw=true'},
					{name:'户型装饰',text:'当小复式遇上高级灰撞色！不同的家居赋予不同的色彩和寓意，是设计师对于美好生活的诠释和尊崇，而自然的色彩是更具温度的时尚美学。',path:'https://github.com/Crazy-Uncle/imgs/blob/main/%E6%88%B7%E5%9E%8B%E8%AE%BE%E8%AE%A1.jpg?raw=true'},
					{name:'广告摄影',text:'日本2022年广告摄影年鉴',path:'https://github.com/Crazy-Uncle/imgs/blob/main/%E5%B9%BF%E5%91%8A%E6%91%84%E5%BD%B1.jpg?raw=true'},
					{name:'摄影学习',text:'2023年4月16日上午，“两岸情”常州·台湾摄影交流33周年庆典暨“彼岸”常州·台湾青年摄影家作品联展在常州西太湖畔刘海粟夏伊乔艺术馆内拉开帷幕。',path:'https://github.com/Crazy-Uncle/imgs/blob/main/%E6%91%84%E5%BD%B1%E5%AD%A6%E4%B9%A0.jpg?raw=true'},
					{name:'摄影器材',text:'2022年9月6日，国产光学老蛙正式发布了FFⅡ 58mm F2.8 CA-Dreamer Macro 2X全画幅微距手动镜头。据悉，该镜头为11组14片光学结构，13片光圈叶片，67mm滤镜接口，最近对焦距离18.3cm，镜身尺寸74mm*117mm，重约548g，预计首发仅售2999。',path:'https://github.com/Crazy-Uncle/imgs/blob/main/%E6%91%84%E5%BD%B1%E5%99%A8%E6%9D%90.png?raw=true'},
					{name:'明星写真',text:'张碧晨浅金色吊带连衣裙性感写真，清新脱俗，宛如仙女下凡。张碧晨身穿浅金色吊带连衣裙，闪闪发光，衬得皮肤更加白皙。',path:'https://github.com/Crazy-Uncle/imgs/blob/main/%E6%98%8E%E6%98%9F%E5%86%99%E7%9C%9F.png?raw=true'},
					{name:'清纯甜美',text:'李智恩有着一身邻家少女的气质，声音干净、透明，十分动容，既有偶像歌手的外表，也有实力歌手的实力。最近。李智恩最新杂志写真曝光，三种不同风格造型的她，美得像仙子一般，可以见得，李知恩的时尚表现力也是超级棒的，一起来欣赏一下吧。',path:'https://github.com/Crazy-Uncle/imgs/blob/main/%E6%B8%85%E7%BA%AF%E7%94%9C%E7%BE%8E.png?raw=true'},
					{name:'古典美女',text:'当王语嫣走出的时候，苗条的身形，披肩的长发，折射的却是一种纯洁而神圣的氛围，一抹精神的浓郁香气。你是否被她清新脱俗所惊艳，梦中的神仙姐姐莫不如是啊！',path:'https://github.com/Crazy-Uncle/imgs/blob/main/%E5%8F%A4%E5%85%B8%E7%BE%8E%E5%A5%B3.png?raw=true'},
					
				],
				actives:0
			}
		},
		methods: {
			activeClick(index){
				this.actives=index
				
				// console.log(index);
			},
			preview(index){
				// console.log(index);
				const urls=[this.arr[index].path]
				const current=this.arr[index].path
				// console.log(urls);
				uni.previewImage({
					current,
					urls:urls
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	page{
		height:100%
	}
	.pics{
		display: flex;
		height: 100%;
		.left{
			width: 200rpx;
			height: 100%;
			border-right: 1px solid #eee;
			
			view{
				height:120rpx ;
				line-height: 120rpx;
				color: #333;
				text-align: center;
				font-size: 30rpx;
				border-top: 1px solid #eee;
			}
			.active{
				background-color: #aa0000;
				color: #fff;
			}
		}
		
		
		.right{
			width: 520rpx;
			height: 100%;
			margin:10rpx auto  ;
			.item{
				// margin: 5px auto;
				
				image{
					// margin: auto;
					text-align: center;
					height: 480rpx;
					border-radius: 5px;
					margin: auto;
				}
				text{
				
					font-size: 30rpx;
					line-height: 60rpx;
				}
			}
		}
	}
</style>
