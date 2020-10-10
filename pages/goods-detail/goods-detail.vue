<template>
	<view class="page">
		<view class="container">
			<view class="page-content">
				<swiper
					class="swiper"
					indicator-dots
					autoplay
					circular
					indicator-active-color="#fff"
				>
					<block v-for="(item, index) of swiperImages" :key="index">
						<swiper-item
							class="swiper__item"
							@click="previewImage(index)">
							<image class="swiper__img" :src="item"></image>
						</swiper-item>
					</block>
				</swiper>

				<view class="goods-detail">
					<text class="goods-detail__name">小米MIX3 6GB+128GB</text>
					<text class="goods-detail__desc">磁动力滑盖全面屏 / 前后旗舰AI双摄 / 四曲面彩色陶瓷机身 / 高效10W无线充电 / 4000W柔光照亮你的美</text>
					<text class="goods-detail__price">￥3299</text>
					<view class="goods-config">
						<scroll-view scroll-x class="goods-config__scroll">
							<view class="goods-config__list">
								<view class="goods-config__item" v-for="item of 6" :key="item">
									<text class="iconfont icon-cameraaddfill"></text>
									<text class="goods-config__name">相机</text>
									<text class="goods-config__text">4000W柔光</text>
								</view>
							</view>
						</scroll-view>
					</view>
				</view>

				<view class="section">
					<view class="cell">
						<view class="cell-item" @click="paramPopup = true">
							<text class="cell__title">已选</text>
							<text>火焰红64GB标配</text>
							<text class="cell__icon iconfont icon-right"></text>
						</view>
						<view class="cell-item" @click="addressPopup = true">
							<text class="cell__title">配送</text>
							<text>北京东城区</text>
							<text>有现货</text>
							<text class="cell__icon iconfont icon-right"></text>
						</view>
						<view class="cell-item" @click="servicePopup = true">
							<view class="cell-mark">
								<text class="cell-mark__icon iconfont icon-roundcheckfill"></text>
								<text>小米自营</text>
							</view>
							<view class="cell-mark">
								<text class="cell-mark__icon iconfont icon-roundcheckfill"></text>
								<text>小米发货</text>
							</view>
							<view class="cell-mark">
								<text class="cell-mark__icon iconfont icon-roundcheckfill"></text>
								<text>七天无理由退货</text>
							</view>
							<text class="cell__icon iconfont icon-right"></text>
						</view>
					</view>
				</view>

				<view class="section">
					<scroll-view scroll-x class="section__scroll">
						<view class="comment-list">
							<comment v-for="item of 10" :key="item"></comment>
						</view>
					</scroll-view>

					<m-button class="load-comment" block>
						更多评论
						<text class="load-comment__icon iconfont icon-right"></text>
					</m-button>
				</view>

				<view class="goods-tpl">
					<view class="goods-tpl__item">
						<image class="goods-tpl__img" src="/static/images/goods_detail_1.jpg" mode="widthFix"></image>
					</view>
					<view class="goods-tpl__item">
						<image class="goods-tpl__img" src="/static/images/goods_detail_2.jpg" mode="widthFix"></image>
					</view>
					<view class="goods-tpl__item">
						<image class="goods-tpl__img" src="/static/images/goods_detail_3.jpg" mode="widthFix"></image>
					</view>
					<view class="goods-tpl__item">
						<image class="goods-tpl__img" src="/static/images/goods_detail_4.jpg" mode="widthFix"></image>
					</view>
					<view class="goods-tpl__item">
						<image class="goods-tpl__img" src="/static/images/goods_detail_5.jpg" mode="widthFix"></image>
					</view>
					<view class="goods-tpl__item">
						<image class="goods-tpl__img" src="/static/images/goods_detail_6.jpg" mode="widthFix"></image>
					</view>
					<view class="goods-tpl__item">
						<image class="goods-tpl__img" src="/static/images/goods_detail_7.jpg" mode="widthFix"></image>
					</view>
					<view class="goods-tpl__item">
						<image class="goods-tpl__img" src="/static/images/goods_detail_8.jpg" mode="widthFix"></image>
					</view>
					<view class="goods-tpl__item">
						<image class="goods-tpl__img" src="/static/images/goods_detail_9.jpg" mode="widthFix"></image>
					</view>
					<view class="goods-tpl__item">
						<image class="goods-tpl__img" src="/static/images/goods_detail_10.jpg" mode="widthFix"></image>
					</view>
					<view class="goods-tpl__item">
						<image class="goods-tpl__img" src="/static/images/goods_detail_11.jpg" mode="widthFix"></image>
					</view>
					<view class="goods-tpl__item">
						<image class="goods-tpl__img" src="/static/images/goods_detail_12.jpg" mode="widthFix"></image>
					</view>
				</view>

				<m-goods-action></m-goods-action>
			</view>
		</view>

 		<m-popup :visible.sync="paramPopup" height="518">
			<view class="m-sku">
				<view class="m-sku__header">
					<view class="m-sku-goods">
						<image class="m-sku-goods__img" src="/static/images/7.jpg"></image>
						<view class="m-sku-goods-info">
							<text class="m-sku-goods-info__name">小米MIX3</text>
							<text class="m-sku-goods-info__price">￥3369</text>
							<text class="m-sku-goods-info__desc">火焰红 64GB 标配</text>
						</view>
					</view>
				</view>
				<view class="m-sku__body">
					<m-form>
						<m-form-item label="颜色">
							<m-radio-group v-model="skuData.color">
								<m-radio-button :label="0">火焰红</m-radio-button>
								<m-radio-button :label="1">炭黑</m-radio-button>
								<m-radio-button :label="2">冰川蓝</m-radio-button>
							</m-radio-group>
						</m-form-item>
						<m-form-item label="容量">
							<m-radio-group v-model="skuData.storages">
								<m-radio-button :label="0">64GB</m-radio-button>
								<m-radio-button :label="1">128GB</m-radio-button>
							</m-radio-group>
						</m-form-item>
						<m-form-item label="套餐">
							<m-radio-group v-model="skuData.service">
								<m-radio-button :label="0">标配</m-radio-button>
								<m-radio-button :label="1">套餐一</m-radio-button>
								<m-radio-button :label="2">套餐二</m-radio-button>
							</m-radio-group>
						</m-form-item>
						<m-form-item class="m-form-item--inline" label="购买数量">
							<m-input-number :min="0" v-model="skuData.num"></m-input-number>
						</m-form-item>
						<m-button class="m-popup__button" color="#fd6900" block square>加入购物车</m-button>
					</m-form>
				</view>
			</view>
		</m-popup>

		<m-popup :visible.sync="addressPopup" height="518">
			<view class="m-popup__title">收获地址</view>
			<view class="address">
				<view class="address__item">
					<view class="address__title">
						<text class="address__icon iconfont icon-location"></text>
						<text>王花花</text>
					</view>
					<view class="address__text">广东省深圳市宝安区石岩街道</view>
				</view>
			</view>
			<m-button class="m-popup__button" color="#fd6900" block square>选择新地址</m-button>
		</m-popup>

		<m-popup :visible.sync="servicePopup" height="518">
			<view class="m-popup__title">服务说明</view>
			<view class="service">
				<view class="service__item">
					<view class="service__title">
						<text class="service__icon iconfont icon-roundcheckfill"></text>
						<text>小米发货</text>
					</view>
					<view class="service__text">由小米发货</view>
					<view class="service__text">由小米发货</view>
				</view>
				<view class="service__item">
					<view class="service__title">
						<text class="service__icon iconfont icon-roundcheckfill"></text>
						<text>运费说明</text>
					</view>
					<view class="service__text">不管满多少都不包邮</view>
				</view>
				<view class="service__item">
					<view class="service__title">
						<text class="service__icon iconfont icon-roundcheckfill"></text>
						<text>七天无理由退货</text>
					</view>
				</view>
			</view>
			<m-button class="m-popup__button" color="#fd6900" block square>确定</m-button>
		</m-popup>
	</view>
</template>

<script>
	import Comment from './components/comment.vue'

	export default {
		name: 'GoodsDetailPage',
		components: {
			Comment
		},
		data () {
			return {
				swiperImages: ['/static/images/7.jpg', '/static/images/8.jpg', '/static/images/9.jpg'],
				paramPopup: false,
				addressPopup: false,
				servicePopup: false,
				skuData: {
					color: '',
					storages: '',
					service: '',
					num: 1
				}
			}
		},
		methods: {
			previewImage(index) {
				uni.previewImage({
					urls: this.swiperImages,
					current: index,
					indicator: 'number'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.page {
		padding-bottom: 100rpx;
	}

	.swiper {
		height: 700rpx;
		&__img {
			display: block;
			width: 100%;
			height: 100%;
		}
	}

	.goods-detail {
		padding: 20rpx;
		&__name {
			display: block;
			margin-bottom: 20rpx;
			font-size: 36rpx;
		}
		&__desc {
			display: -webkit-box;
			-webkit-line-clamp: 2;
			overflow: hidden;
			text-overflow: ellipsis;
			-webkit-box-orient: vertical;
			margin-bottom: 34rpx;
			font-size: 24rpx;
			color: #b8b8b8;
		}
		&__price {
			display: block;
			margin-bottom: 20rpx;
			font-size: 44rpx;
			color: #fb5e00;
		}
	}

	.goods-config {
		&__scroll {
			width: 100%;
			overflow: hidden;
		}
		&__list {
			white-space: nowrap;
		}
		&__item {
			display: inline-flex;
			flex-direction: column;
			align-items: center;
			padding: 20rpx;
		}
		&__text {
			color: #b4b4b4;
		}
	}

	.section {
		margin-bottom: 40rpx;
		padding: 0 20rpx;
	}

	.cell {
		border: 1px solid #ebeef5;
		border-radius: 8rpx;
		background-color: #fff;
		&-item {
			position: relative;
			display: flex;
			align-items: center;
			padding: 30rpx 32rpx;
			font-size: 26rpx;
			color: #5d6972;
			border-bottom: 1rpx solid #ebeef5;
			&:last-child {
				border: none;
			}
		}
		&__title {
			margin-right: 18rpx;
			font-size: 30rpx;
			color: #727370;
		}
		&__icon {
			position: absolute;
			top: 50%;
			right: 32rpx;
			transform: translateY(-50%);
			font-size: 30rpx;
			color: #b5b5b5;
		}
		&-mark {
			display: inline-flex;
			align-items: center;
			margin-right: 14rpx;
			&__icon {
				margin-right: 6rpx;
				color: #f05301;
			}
		}
	}

	.comment {
		margin-right: 20rpx;
		&-scroll {
			margin-bottom: 6rpx;
			width: 100%;
			overflow: hidden;
		}
		&-list {
			display: flex;
		}
		&:last-child {
			margin-right: 0;
		}
	}

	.load-comment {
		border: none;
		color: #046fec;
		&__icon {
			line-height: 1;
			font-size: 30rpx;
		}
	}
	
	.goods-tpl {
		&__img {
			display: block;
			width: 100%;
		}
	}

	.m-popup {
		position: fixed;
		&__title {
			padding: 30rpx 0;
			font-size: 30rpx;
			font-weight: bold;
			text-align: center;
			border-bottom: 1rpx solid #ebeef5;
		}
		&__button {
			position: absolute;
			right: 0;
			bottom: 0;
			left: 0;
		}
	}

	.m-sku {
		&__header {
			padding: 30rpx;
		}
		&-goods {
			display: flex;
			&-info {
				flex: 1;
				display: flex;
				flex-direction: column;
				&__name {
					font-size: 34rpx;
				}
				&__price {
					font-size: 28rpx;
					color: #ff6701;
				}
			}
			&__img {
				display: block;
				margin-right: 20rpx;
				width: 204rpx;
				height: 204rpx;
			}
		}
	}

	/deep/ .m-form {
		padding: 0 30rpx;
		&-item {
			&__label {
				margin-bottom: 20rpx;
				font-size: 30rpx;
			}
			&--inline {
				display: flex;
				align-items: center;
				justify-content: space-between;
			}
		}
	}

	.m-radio-group {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-gap: 40rpx;
	}

	.address {
		&__item {
			padding: 32rpx 48rpx;
			border-bottom: 1rpx solid #ebeef5;
		}
		&__title {
			margin-bottom: 10rpx;
			font-size: 28rpx;
			font-weight: bold;
		}
		&__icon {
			margin-right: 6rpx;
			font-size: 30rpx;
		}
		&__text {
			color: #b9b9b9;
		}
	}

	.service {
		padding: 0 30rpx;
		&__item {
			padding: 20rpx 0;
		}
		&__title {
			margin-bottom: 10rpx;
			font-size: 28rpx;
		}
		&__icon {
			margin-right: 6rpx;
			font-size: 30rpx;
			color: #fa6901;
		}
		&__text {
			margin-bottom: 10rpx;
			padding: 0 35rpx;
			color: #b9b9b9;
			&:last-child {
				margin-bottom: 0;
			}
		}
	}

	.m-goods-action {
		position: fixed;
		right: 0;
		bottom: 0;
		left: 0;
	}
</style>
