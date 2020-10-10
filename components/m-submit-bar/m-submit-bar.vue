<template>
	<view class="m-submit-bar">
		<view class="m-submit-bar__core">
			<slot></slot>
			<view class="m-submit-bar__text">
				<text>合计：</text>
				<text class="m-submit-bar__price">￥30.50</text>
			</view>
			<m-button class="m-submit-bar__button" color="#fd6900" square>提交订单</m-button>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'MSubmitBar'
	}
</script>

<style lang="scss" scoped>
	.m-submit-bar {
		width: 100%;
		&__core {
			display: flex;
			align-items: center;
			padding-left: 45rpx;
			width: 100%;
			height: 100rpx;
			background-color: #fff;
		}
		&__text {
			display: flex;
			align-items: center;
			justify-content: flex-end;
			flex: 1;
			padding-right: 40rpx;
			font-size: 28rpx;
		}
		&__price {
			font-size: 38rpx;
			color: #fd6900;
		}
		&__button {
			display: inline-flex;
			align-items: center;
			justify-content: center;
			width: 300rpx;
			height: 100%;
		}
	}
</style>
