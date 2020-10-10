<template>
	<view class="page">
		<view class="container">
			<scroll-view class="page-scroll" scroll-y>
				<view class="page-content">
					<m-card title="热门搜索">
						<image class="m-card__img" src="/static/images/search-banner.png"></image>
					</m-card>

					<view class="tag-list">
						<m-tag type="danger">领券中心</m-tag>
						<m-tag type="primary">Redmi K20</m-tag>
						<m-tag type="success">RedmiBook 14</m-tag>
						<m-tag type="danger">智能积木 越野四驱车</m-tag>
						<m-tag type="danger">手环 腕带</m-tag>
					</view>

					<m-card title="常用分类" style="margin-bottom: 20rpx;">
						<view class="tag-list">
							<m-tag>手机</m-tag>
							<m-tag>音响</m-tag>
							<m-tag>手表</m-tag>
						</view>
					</m-card>

					<m-card title="搜索记录" style="flex: 1;">
						<view class="history-list">
							<block v-for="(item, index) of 10" :key="index">
								<view class="history" @longpress="handleLongpress(index)">小米</view>
							</block>
						</view>
					</m-card>

					<m-button block @click="clearHistory">清空搜索记录</m-button>
				</view>
			</scroll-view>
		</view>

		<!-- <m-dialog></m-dialog> -->
	</view>
</template>

<script>
	export default {
		name: 'SearchPage',
		onNavigationBarButtonTap({ index }) {
			if (index === 0) {
				uni.navigateTo({ url: '/pages/search-list/search-list' })
			}
		},
		methods: {
			handleLongpress (index) {
				uni.showModal({ title: '是否删除所选记录？' })
			},
			clearHistory () {
				uni.showModal({ title: '是否删除所有记录？' })
			}
		}
	}
</script>

<style lang="scss" scoped>
	.page {
		height: 100%;
		background-color: #f7fafa;
		&-scroll {
			height: 100%;
		}
	}

	.container {
		height: 100%;
	}

	.m-card {
		&__img {
			display: block;
			width: 100%;
			height: 212rpx;
		}
	}

	.tag-list {
		padding: 34rpx 34rpx 24rpx 34rpx;
		background-color: #fff;
	}

	.m-tag {
		margin: 0 10rpx 10rpx 0;
	}

	.history {
		display: flex;
		align-items: center;
		padding: 0 30rpx;
		height: 90rpx;
		font-size: 24rpx;
		border-bottom: 1px solid  #e7eaea;
		&:active {
			background-color: #fafafa;
		}
	}

	.m-button {
		border: none;
	}
</style>
