<template>
	<view class="page">
		<view class="container">
			<view class="address-list">
				<block v-for="item of 10" :key="item">
					<view class="address">
						<text class="address__name">王花花</text>
						<text class="address__tel">152*****7021</text>
						<text class="address__mark">[默认]</text>
						<view>广东省深圳市南山区</view>
						<view>XXX街道</view>
						<text class="address__icon iconfont icon-right"></text>
					</view>
				</block>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'AddressList',
		onNavigationBarButtonTap ({ index }) {
			if (index === 0) {
				uni.navigateTo({ url: '../address-operate/address-operate' })
			}
		}
	}
</script>

<style lang="scss" scoped>
	.address {
		position: relative;
		padding: 30rpx;
		border-bottom: 1rpx solid #e3e3e3;
		font-size: 26rpx;
		line-height: 50rpx;
		color: #868686;
		&__name {
			font-size: 28rpx;
			color: #db4b00;
		}
		&__tel {
			margin: 0 10rpx;
			color: #556065;
		}
		&__mark {
			color: #db4b00;
		}
		&__icon {
			position: absolute;
			top: 50%;
			right: 30rpx;
			transform: translateY(-50%);
		}
	}
</style>
