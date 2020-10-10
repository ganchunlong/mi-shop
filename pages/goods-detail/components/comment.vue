<template>
	<view class="comment">
		<view class="comment__header">
			<view class="user">
				<image class="user__avatar" src="/static/images/avatar.jpg"></image>
				<view class="user-info">
					<text class="user-info__nickname">王花花</text>
					<text class="time">2020-06-04</text>
				</view>
			</view>
			<view class="start">
				<text class="iconfont icon-appreciate"></text>
				<text>164</text>
			</view>
		</view>
		<view class="comment__body">
			<text class="comment__text">4000W柔光照亮你的美</text>
			<view class="comment__imgs">
				<image class="comment__img" src="/static/images/cate_06.png"></image>
				<image class="comment__img" src="/static/images/cate_06.png"></image>
				<image class="comment__img" src="/static/images/cate_06.png"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'Comment'
	}
</script>

<style lang="scss" scoped>
	.comment {
		display: inline-block;
		padding: 30rpx 20rpx;
		width: 620rpx;
		border-radius: 8rpx;
		border: 1px solid #ebeef5;
		background-color: #fff;
		&__header {
			position: relative;
		}
		&__text {
			display: block;
			font-size: 28rpx;
			margin: 10rpx 0;
			text-overflow: ellipsis;
			white-space: nowrap;
			overflow: hidden;
		}
		&__imgs {
			display: flex;
			justify-content: space-between;
		}
		&__img {
			display: block;
			width: 176rpx;
			height: 176rpx;
			border-radius: 4rpx;
		}
	}
	
	.user {
		display: flex;
		align-items: center;
		&__avatar {
			display: block;
			margin-right: 20rpx;
			border-radius: 50%;
			width: 70rpx;
			height: 70rpx;
		}
		&-info {
			display: flex;
			flex-direction: column;
		}
	}

	.start {
		position: absolute;
		top: 50%;
		right: 20rpx;
		transform: translateY(-50%);
		padding: 10rpx;
		color: #a5a5a5;
	}
</style>
