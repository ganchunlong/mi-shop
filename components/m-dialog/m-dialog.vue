<template>
	<view class="m-dialog">
		<m-overlay :visible="visibleSync" ></m-overlay>
		<view class="m-dialog__content">
			<view class="m-dialog__title">弹出框</view>
			<view class="m-dialog__message">代码是写给人看的，只是偶尔让机器执行一下。</view>
			<view class="m-dialog__button-group">
				<view class="m-dialog__button m-dialog__button--cancel">取消</view>
				<view class="m-dialog__button m-dialog__button--confirm">确认</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'MDialog',
		props: {
			title: String,
			message: String
		},
		data () {
			return {
				visibleSync: true
			}
		}
	}
</script>

<style lang="scss" scoped>
	.m-dialog {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		&__content {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			border-radius: 20rpx;
			width: 600rpx;
			background-color: #fff;
			overflow: hidden;
			z-index: 997;
		}
		&__title {
			padding: 30rpx 0;
			font-size: 32rpx;
			text-align: center;
		}
		&__message {
			margin-bottom: 46rpx;
			text-align: center;
			color: #646566;
		}
		&__button-group {
			display: flex;
			border-top: 1rpx solid  #f1f1f1;
		}
		&__button {
			flex: 1;
			padding: 26rpx 0;
			text-align: center;
			border-right: 1rpx solid  #f1f1f1;
			&:last-child {
				border-right: none;
			}
			&:active {
				background-color: #fafafa;
			}
			&--confirm {
				color: #f40;
			}
		}
	}
</style>
