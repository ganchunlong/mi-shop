<template>
	<view class="page">
		<m-tab v-model="currentIndex">
			<m-tab-item>推荐</m-tab-item>
			<m-tab-item>手机</m-tab-item>
			<m-tab-item>智能</m-tab-item>
			<m-tab-item>电视</m-tab-item>
			<m-tab-item>笔记本</m-tab-item>
			<m-tab-item>家电</m-tab-item>
			<m-tab-item>生活周边</m-tab-item>
		</m-tab>

		<view class="container">
			<swiper
				class="page-swiper"
				:duration="300"
				:current="currentIndex"
				@change="pageChange"
			>
				<swiper-item>
					<scroll-view
						scroll-y
						class="page-scroll"
					>
						<view class="page-content">
							<swiper
								class="swiper" 
								indicator-dots
								autoplay
								circular
								indicator-active-color="#fff"
							>
								<swiper-item v-for="(item, index) of swiperList" class="swiper__item" :key="index">
									<image class="swiper__img" :src="item.image"></image>
								</swiper-item>
							</swiper>

							<m-grid col="5">
								<m-grid-item v-for="(item, index) of gridList" :key="index">
									<image class="m-grid__img" :src="item.image"></image>
									<view class="m-grid__text">{{ item.text }}</view>
								</m-grid-item>
							</m-grid>
			
							<view class="three-banner">
								<view class="three-banner__item three-banner__item--left">
									<image class="three-banner__img three-banner__img--left" src="/static/images/demo1.jpg"></image>
								</view>
								<view class="three-banner__item three-banner__item--right">
									<image class="three-banner__img three-banner__img--right" src="/static/images/demo2.jpg"></image>
									<image class="three-banner__img three-banner__img--right" src="/static/images/demo3.jpg"></image>
								</view>
							</view>
			
							<m-card title="每日精选">
								<image class="m-card__img" src="/static/images/cate_banner.png"></image>
							</m-card>
			
							<view class="goods-list">
								<block v-for="(item, index) of goodsList" :key="index">
									<m-goods-card
										:thumb="item.image"
										:title="item.title"
										:desc="item.desc"
										:nowPrice="item.n_price"
										:originPrice="item.o_price"
										 @click.native="toGoodsDetail(item.id)"/>
								</block>
							</view>
						</view>
					</scroll-view>
				</swiper-item>

				<swiper-item>手机</swiper-item>
			
				<swiper-item>智能</swiper-item>
			
				<swiper-item>电视</swiper-item>
			
				<swiper-item>笔记本</swiper-item>
			
				<swiper-item>手机</swiper-item>
			
				<swiper-item>手机</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'HomePage',
		data () {
			return {
				currentIndex: 0,
				swiperList: [
					{
						image: '/static/images/1.jpg'
					},
					{
						image: '/static/images/2.jpg'
					}
				],
				gridList: [
					{
						image: '/static/icons/1.png',
						text: '新品分类'
					},
					{
						image: '/static/icons/2.png',
						text: '小米众筹'
					},
					{
						image: '/static/icons/3.png',
						text: '以旧换新'
					},
					{
						image: '/static/icons/4.png',
						text: '1分拼团'
					},
					{
						image: '/static/icons/5.png',
						text: '超值特卖'
					},
					{
						image: '/static/icons/6.png',
						text: '小米秒杀'
					},
					{
						image: '/static/icons/7.png',
						text: '真心想要'
					},
					{
						image: '/static/icons/8.png',
						text: '电视热卖'
					},
					{
						image: '/static/icons/9.png',
						text: '家电热卖'
					},
					{
						image: '/static/icons/10.png',
						text: '米粉卡'
					},
				],
				goodsList: [
					{
						image: '/static/images/3.jpg',
						title: '小米空调',
						desc: '1.5匹变频',
						n_price: '2199',
						o_price: '2699'
					},
					{
						image: '/static/images/3.jpg',
						title: '小米空调',
						desc: '1.5匹变频',
						n_price: '2199',
						o_price: '2699'
					},
					{
						image: '/static/images/3.jpg',
						title: '小米空调',
						desc: '1.5匹变频',
						n_price: '2199',
						o_price: '2699'
					},
					{
						image: '/static/images/3.jpg',
						title: '小米空调',
						desc: '1.5匹变频',
						n_price: '2199',
						o_price: '2699'
					}
				]
			}
		},
		onNavigationBarSearchInputClicked() {
			// 跳转至搜索页面
			uni.navigateTo({ url: '/pages/search/search' })
		},
		methods: {
			pageChange(e) {
				const { current } = e.detail
				this.currentIndex = current
			},
			toGoodsDetail (id) {
				uni.navigateTo({ url: '/pages/goods-detail/goods-detail' })
			}
		}
	}
</script>

<style lang="scss" scoped>
	.page {
		display: flex;
		flex-direction: column;
		height: 100%;
		background-color: #f7fafa;
		&-swiper {
			height: 100%;
		}
		&-scroll {
			height: 100%;
			overflow: hidden;
		}
	}

	.container {
		flex: 1;
	}

	.swiper {
		height: 352rpx;
		background-color: #fff;
		&__img {
			width: 100%;
			height: 100%;
		}
	}

	.m-grid {
		&-item {
			padding: 18rpx 12rpx;
		}
		&__img {
			display: block;
			margin-bottom: 14rpx;
			width: 60rpx;
			height: 60rpx;
		}
		&__text {
			font-size: 24rpx;
		}
	}

	.three-banner {
		display: flex;
		justify-content: space-between;
		margin-bottom: 10rpx;
		height: 530rpx;
		&__item {
			width: 373rpx;
			&--right {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
			}
		}
		&__img {
			display: block;
			width: 100%;
			&--left {
				height: 100%;
			}
			&--right {
				height: 262rpx;
			}
		}
	}

	.m-card {
		&__img {
			display: block;
			width: 100%;
			height: 284rpx;
		}
	}

	.goods-list {
		margin-bottom: 10rpx;
	}

	.m-goods-card {
		margin-top: 10rpx;
		margin-left: 10rpx;
	}
</style>
