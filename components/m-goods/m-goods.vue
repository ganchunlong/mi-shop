<template>
	<view class="m-goods">
		<slot name="checkbox"></slot>
		<image class="m-goods__img" src="/static/images/5.jpg"></image>
		<view class="m-goods__info">
			<view class="m-goods__name">真无线蓝牙耳机</view>
			<view class="m-goods__value">雅致简约 / 分体式入耳 / 收纳盒充电 / 蓝牙5.0 / 触控操作</view>
			<view class="m-goods__price">￥199</view>
			<view class="m-goods__label">1348条评论 98%满意</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'MGoods',
		props: {
			image: String,
			name: {
				type: String,
				default: '商品名称'
			},
			value: {
				type: String,
				default: '商品信息'
			},
			price: {
				type: [String, Number],
				default: '999'
			},
			label: {
				type: String,
				default: '描述信息'
			}
		}
	}
</script>

<style lang="scss" scoped>
	.m-goods {
		display: flex;
		align-items: center;
		padding: 0 20rpx;
		height: 270rpx;
		border-bottom: 1rpx solid #e7eaea;
		background-color: #fff;
		&__img {
			display: block;
			margin-right: 30rpx;
			border-radius: 4rpx;
			width: 220rpx;
			height: 220rpx;
		}
		&__info {
			flex: 1;
		}
		&__name {
			margin-bottom: 12rpx;
			font-size: 32rpx;
			font-weight: bold;
		}
		&__value {
			margin-bottom: 8rpx;
			display: -webkit-box;
			-webkit-line-clamp: 2;
			overflow: hidden;
			text-overflow: ellipsis;
			-webkit-box-orient: vertical;
			color: #6e797e;
		}
		&__price {
			margin-bottom: 8rpx;
			font-size: 32rpx;
			color: #ff6d00;
		}
		&__label {
			color: #6e797e;
		}
		&:last-child {
			border-bottom: none;
		}
	}

	/deep/ .m-checkbox {
		margin-right: 20rpx;
	}
</style>
