<template>
	<view class="page">
		<image class="abs-img" src="/static/images/abs.jpg" mode="aspectFill"></image>
		<view class="tool-box">
			<view class="audio-button iconfont icon-notification"></view>
			<view class="jump-button" @click="jump">跳过 {{ countTime }}</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'Abs',
		data () {
			return {
				countTime: 5,
				timer: null
			}
		},
		onReady () {
			this.init()
		},
		onHide () {
			this.clearTime()
		},
		methods: {
			init () {
				this.timer = setInterval(() => {
					this.countTime--
					if (this.countTime <= 0) {
						this.clearTime()
						this.toIndex()
					}
				}, 1000)
			},
			jump () {
				this.clearTime()
				setTimeout(() => {
					this.toIndex()
				}, 1000)
			},
			clearTime () {
				clearInterval(this.timer)
				this.timer = null
			},
			toIndex () {
				uni.reLaunch({ url: '../index/index' })
			}
		}
	}
</script>

<style lang="scss" scoped>
	.page {
		position: relative;
		height: 100%;
	}

	.abs-img {
		display: block;
		width: 100%;
		height: 100%;
	}

	.tool-box {
		position: absolute;
		top: 100rpx;
		right: 30rpx;
		display: flex;
		align-items: center;
	}

	.jump-button {
		margin-right: 16rpx;
		border-radius: 30rpx;
		padding: 8rpx 22rpx;
		font-size: 26rpx;
		color: #fff;
		background: rgba(0, 0, 0, .4);
	}

	.audio-button {
		margin-right: 16rpx;
		border-radius: 50%;
		padding: 11rpx 13rpx;
		font-size: 30rpx;
		color: #fff;
		background: rgba(0, 0, 0, .4);
	}

	.count-time {
		border-radius: 50%;
		padding: 8rpx 20rpx;
		font-size: 26rpx;
		color: #fff;
		background: rgba(0, 0, 0, .4);
	}
</style>
