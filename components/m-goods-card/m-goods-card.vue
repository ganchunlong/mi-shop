<template>
	<view class="m-goods-card">
		<view class="m-goods-card__header">
			<image class="m-goods-card__img" :src="thumb"></image>
		</view>
		<view class="m-goods-card__body">
			<view class="m-goods-card__title">{{ title }}</view>
			<view class="m-goods-card__desc">{{ desc }}</view>
			<view class="m-goods-card__price">
				<text class="price price--now">￥{{ nowPrice }}</text>
				<text class="price price--origin">￥{{ originPrice }}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'MGoodsCard',
		props: {
			thumb: String,
			title: String,
			desc: String,
			nowPrice: String,
			originPrice: String
		}
	}
</script>

<style lang="scss" scoped>
	.m-goods-card {
		display: inline-flex;
		flex-direction: column;
		width: 361rpx;
		height: 526rpx;
		background-color: #fff;
		overflow: hidden;
		&__img {
			display: block;
			width: 361rpx;
			height: 361rpx;
		}
		&__body {
			flex: 1;
			display: flex;
			flex-direction: column;
			justify-content: center;
			padding: 0 20rpx;
		}
		&__title {
			font-size: 28rpx;
		}
		&__desc {
			font-size: 24rpx;
			color: #c0c0c0;
		}
		&__price {
			display: flex;
			align-items: flex-end;
		}
	}

	.price--now {
		margin-right: 16rpx;
		font-size: 28rpx;
		color: #de610e;
	}

	.price--origin {
		text-decoration: line-through;
		font-size: 24rpx;
		color: #c0c0c0;
	}
</style>
