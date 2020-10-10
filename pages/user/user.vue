<template>
	<view class="page">
		<view class="container">
			<view class="page-content">
				<view class="user">
					<image class="user__bg" src="/static/images/bg.jpg"></image>
					<view class="user-info">
						<image class="user-info__avatar" src="/static/images/userpic.png" @click="toUserData"></image>
						<text class="user-info__nickname">测试昵称</text>
					</view>

					<view class="user__message">
						<text class="iconfont icon-mark"></text>
					</view>

					<view class="user__integral">
						<text class="iconfont icon-upstage"></text>
						<text>会员积分99分</text>
					</view>
				</view>

				<m-cell title="我的订单" is-link url="/pages/order/order"></m-cell>

				<m-grid col="4">
					<m-grid-item>
						<text class="m-grid__icon iconfont icon-pay"></text>
						<text class="m-grid__text">待付款</text>
					</m-grid-item>
					<m-grid-item>
						<text class="m-grid__icon iconfont icon-deliver"></text>
						<text class="m-grid__text">待收货</text>
					</m-grid-item>
					<m-grid-item>
						<text class="m-grid__icon iconfont icon-comment"></text>
						<text class="m-grid__text">待评价</text>
					</m-grid-item>
					<m-grid-item>
						<text class="m-grid__icon iconfont icon-repair"></text>
						<text class="m-grid__text">退换修</text>
					</m-grid-item>
				</m-grid>

				<view class="banner">
					<image class="banner__img" src="/static/images/1.jpg"></image>
				</view>

				<m-cell-group>
					<m-cell is-link>
						<template slot="title">
							<image class="m-cell__icon" src="/static/icons/i-vip.png"></image>
							<text>小米会员</text>
						</template>
					</m-cell>
					<m-cell is-link>
						<template slot="title">
							<image class="m-cell__icon" src="/static/icons/i-pay.png"></image>
							<text>我的优惠</text>
						</template>
					</m-cell>
					<m-cell is-link>
						<template slot="title">
							<image class="m-cell__icon" src="/static/icons/i-service.png"></image>
							<text>服务中心</text>
						</template>
					</m-cell>
					<m-cell is-link>
						<template slot="title">
							<image class="m-cell__icon" src="/static/icons/i-shop.png"></image>
							<text>小米之家</text>
						</template>
					</m-cell>
					<m-cell is-link url="/pages/test/test">
						<template slot="title">
							<image class="m-cell__icon" src="/static/icons/i-f_code.png"></image>
							<text>我的F码</text>
						</template>
					</m-cell>
				</m-cell-group>

				<m-cell-group>
					<m-cell is-link url="/pages/setting/setting">
						<template slot="title">
							<image class="m-cell__icon" src="/static/icons/i-setting.png"></image>
							<text>更多设置</text>
						</template>
					</m-cell>
				</m-cell-group>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'UserPage',
		methods: {
			toUserData () {
				uni.navigateTo({ url: '/pages/user-data/user-data' })
			}
		}
	}
</script>

<style lang="scss" scoped>
	.page {
		background-color: #f5f5f5;
		&-content {
			margin-bottom: 100rpx;
		}
	}

	.container {
		overflow: hidden;
	}

	.user {
		position: relative;
		height: 320rpx;
		&__bg {
			position: absolute;
			width: 100%;
			height: 100%;
		}
		&-info {
			position: absolute;
			top: 50%;
			left: 50rpx;
			transform: translateY(-50%);
			display: flex;
			align-items: center;
			&__avatar {
				border-radius: 50%;
				margin-right: 24rpx;
				border: 4rpx solid #fff;
				width: 132rpx;
				height: 132rpx;
			}
			&__nickname {
				font-size: 28rpx;
				color: #fff;
			}
		}
		&__message {
			position: absolute;
			top: 74rpx;
			right: 0;
			color: #fff;
			padding: 20rpx;
			line-height: 1;
		}
		&__integral {
			position: absolute;
			right: 0;
			bottom: 50rpx;
			display: flex;
			align-items: center;
			padding: 14rpx 24rpx;
			border-top-left-radius: 32rpx;
			border-bottom-left-radius: 32rpx;
			color: #c64500;
			background-color: #ffd53e;
		}
	}

	.icon-mark {
		font-size: 60rpx;
	}

	.icon-upstage {
		margin-right: 10rpx;
	}

	.m-grid {
		margin-bottom: 20rpx;
		&-item {
			padding: 18rpx 12rpx;
			color: #555;
		}
		&__icon {
			margin-bottom: 4rpx;
			font-size: 52rpx;
		}
		&__text {
			font-size: 24rpx;
		}
	}

	.banner {
		&__img {
			display: block;
			width: 100%;
			height: 292rpx;
		}
	}

	.m-cell {
		&-group {
			margin-bottom: 20rpx;
			&:last-child {
				margin-bottom: 0;
			}
		}
		&__icon {
			margin-right: 16rpx;
			width: 40rpx;
			height: 40rpx;
			vertical-align: top;
		}
	}
</style>
