<template>
	<view class="load-more">
		<!-- #ifdef APP-PLUS-NVUE -->

		<!-- #endif -->

		<!-- #ifndef APP-PLUS-NVUE -->
		<text v-show="status === 'pending'" class="load-more__loading"></text>
		<!-- #endif -->
		<text class="load-more__text">{{ status === 'pending' ? '正在加载...' : (status === 'loadmore' ? '点击或上拉加载更多' : '没有更多了') }}</text>
	</view>
</template>

<script>
	export default {
		name: 'MLoadMore',
		props: {
			status: {
				type: String,
				default: 'pending' // pending 加载中，loadmore 加载前，nomore 加载后
			}
		}
	}
</script>

<style lang="scss" scoped>
	.load-more {
		/* #ifndef APP-PLUS-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		align-items: center;
		justify-content: center;
		height: 88rpx;
		&__loading {
			/* #ifndef APP-PLUS-NVUE */
			display: inline-block;
			/* #endif */
			width: 28rpx;
			height: 28rpx;
			border-radius: 50%;
			border-style: solid;
			border-width: 2rpx;
			border-color: #ff6700;
			border-right-color: transparent;
			/* #ifndef APP-PLUS-NVUE */
			animation: m-circle 1s linear infinite;
			/* #endif */
		}
		&__text {
			margin-left: 10rpx;
			font-size: 22rpx;
		}
	}

	/* #ifndef APP-PLUS-NVUE */
	@keyframes m-circle {
		0% {
			transform: rotate(0);
		}
		100% {
			transform: rotate(360deg);
		}
	}
	/* #endif */
</style>
