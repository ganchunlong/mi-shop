<template>
	<view class="m-goods-action">
		<view class="m-goods-action-icon">
			<text class="iconfont icon-home"></text>
			<text>首页</text>
			<text class="m-goods-action-dot"></text>
		</view>

		<view class="m-goods-action-icon">
			<text class="iconfont icon-message"></text>
			<text>客服</text>
			<text class="m-goods-action-badge">10</text>
		</view>

		<view class="m-goods-action-icon">
			<text class="iconfont icon-cart"></text>
			<text>购物车</text>
			<text class="m-goods-action-badge">2</text>
		</view>

		<view class="button button--left button--first">加入购物车</view>
		<view class="button button--right button--last">立即购买</view>
	</view>
</template>

<script>
	export default {
		name: 'MGoodsAction'
	}
</script>

<style lang="scss" scoped>
	.m-goods-action {
		display: flex;
		align-items: center;
		padding: 0 20rpx;
		width: 100%;
		height: 110rpx;
		background-color: #fff;
		&-icon {
			position: relative;
			display: flex;
			flex-direction: column;
			justify-content: space-evenly;
			align-items: center;
			min-width: 100rpx;
			height: 100%;
			line-height: 1rpx;
			color: #646566;
			.iconfont {
				font-size: 38rpx;
				margin-bottom: 6rpx;
			}
		}
		&-dot {
			position: absolute;
			top: 12rpx;
			right: 12rpx;
			width: 14rpx;
			height: 14rpx;
			border-radius: 50%;
			background-color: #ee0a24;
		}
		&-badge {
			position: absolute;
			top: 4rpx;
			right: 0;
			min-width: 32rpx;
			border: 1rpx solid #fff;
			border-radius: 38rpx;
			text-align: center;
			font-size: 18rpx;
			color: #fff;
			line-height: 28rpx;
			background-color: #ee0a24;
		}
		.button {
			flex: 1;
			height: 80rpx;
			text-align: center;
			line-height: 80rpx;
			color: #fff;
			border-radius: 40rpx;
			&--left {
				background: linear-gradient(to right, #ffd01e, #ff8917);
			}
			&--right {
				background: linear-gradient(to right, #ff6034, #ee0a24);
			}
			&--first {
				border-radius: 0;
				border-top-left-radius: 40rpx;
				border-bottom-left-radius: 40rpx;
			}
			&--last {
				border-radius: 0;
				border-top-right-radius: 40rpx;
				border-bottom-right-radius: 40rpx;
			}
		}
	}
</style>