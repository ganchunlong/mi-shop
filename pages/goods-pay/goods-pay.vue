<template>
	<view class="page">
		<view class="container">
			<view class="address">
				<text class="address__name">王花花</text>
				<text class="address__tel">152*****7021</text>
				<text class="address__mark">默认</text>
				<view>广东省深圳市南山区XXX街道</view>
				<text class="address__icon iconfont icon-right"></text>
			</view>

			<view class="bg-padding"></view>

			<m-cell-group>
				<m-cell class="m-cell--radius" value="共三件" is-link>
					<template slot="title">
						<image class="m-cell__img" src="/static/images/7.jpg"></image>
						<image class="m-cell__img" src="/static/images/7.jpg"></image>
						<image class="m-cell__img" src="/static/images/7.jpg"></image>
					</template>
				</m-cell>
				<m-cell title="商品总价" value="￥20.00"></m-cell>
				<m-cell title="运费" value="包邮"></m-cell>
				<m-cell title="优惠券" value="无可用" is-link></m-cell>
				<m-cell title="小计" value="￥20.00"></m-cell>
			</m-cell-group>

			<m-cell-group>
				<m-cell title="发票" value="电子发票-个人" is-link></m-cell>
			</m-cell-group>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'GoodsPayPage'
	}
</script>

<style lang="scss" scoped>
	.page {
		min-height: 100%;
		background-color: #efefec;
		.container {
			overflow: hidden;
		}
		.bg-padding {
			width: 100%;
			height: 20rpx;
			background-color: #fd6900;
		}
		.address {
			position: relative;
			padding: 60rpx 30rpx;
			font-size: 26rpx;
			line-height: 50rpx;
			color: #fff;
			background-color: #fd6900;
			&__name {
				font-size: 28rpx;
				font-weight: bold;
			}
			&__tel {
				margin: 0 10rpx;
				font-weight: bold;
			}
			&__mark {
				padding: 4rpx 20rpx;
				border: 2rpx solid #fff;
				border-radius: 6rpx;
			}
			&__icon {
				position: absolute;
				top: 50%;
				right: 30rpx;
				transform: translateY(-50%);
			}
		}
		.m-cell-group {
			position: relative;
			top: -20rpx;
			margin-bottom: 20rpx;
		}
		.m-cell {
			&__img {
				margin-right: 10rpx;
				width: 100rpx;
				height: 100rpx;
			}
			&--radius {
				border-top-left-radius: 20rpx;
				border-top-right-radius: 20rpx;
			}
		}
	}
</style>
