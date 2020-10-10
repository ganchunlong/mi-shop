<template>
	<view class="page">
		<view class="m-tab">
			<view class="m-tab__item m-tab__item--active">全部</view>
			<view class="m-tab__item">待付款</view>
			<view class="m-tab__item">待收货</view>
			<view class="m-tab__item">待评价</view>
		</view>

		<view class="container">
			<view class="page-content">
				<block v-for="item of 3" :key="item">
					<view class="order">
						<view class="order__header">
							<view class="order__time">2020-07-04 10:20</view>
							<view class="order__status">已发货</view>
						</view>
						<view class="order__content">
							<m-goods-group>
								<block v-for="item of 3" :key="item">
									<m-goods></m-goods>
								</block>
							</m-goods-group>
						</view>
						<view class="order__footer">
							<view class="order__info">共3件商品，合计：￥300.00</view>
							<m-button size="small">查看物流</m-button>
							<m-button size="small">确认收货</m-button>
						</view>
					</view>
				</block>
				
				<view class="section">
					<view class="section__title">猜你喜欢</view>
					<m-divider>实时推荐你的爱</m-divider>
					<view class="goods-list">
						<block v-for="item of 10" :key="item">
							<m-goods-card
								thumb="/static/images/3.jpg"
								title="小米空调"
								desc="1.5匹变频"
								nowPrice="2199"
								originPrice="2699"></m-goods-card>
						</block>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'OrderPage'
	}
</script>

<style lang="scss" scoped>
	.page {
		background-color: #f7fafa;
		.m-tab {
			display: flex;
			height: 72rpx;
			line-height: 72rpx;
			background-color: #fff;
			&__item {
				flex: 1;
				text-align: center;
				font-size: 28rpx;
				border-bottom: 1rpx solid;
				border-color:  #e7eaea;
				color: #a1a1a1;
				&--active {
					border-color: #fe6d05;
					color: #fe6d05;
				}
			}
		}
		.order {
			margin-bottom: 20rpx;
			background-color: #fff;
			&:first-child {
				margin-top: 20rpx;
			}
			&__header {
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 0 20rpx;
				height: 90rpx;
				border-bottom: 1rpx solid #e7eaea;
			}
			&__time {
				font-size: 26rpx;
				color: #a1a1a1;
			}
			&__status {
				font-size: 28rpx;
				color: #fe6d05;
			}
			&__footer {
				border-top: 1rpx solid #e7eaea;
				padding: 20rpx;
				text-align: right;
				.m-button {
					margin-left: 18rpx;
				}
			}
			&__info {
				margin-bottom: 20rpx;
				font-size: 28rpx;
			}
		}
		.section {
			&__title {
				padding: 32rpx 0;
				font-size: 30rpx;
				font-weight: bold;
				text-align: center;
				color: #fb6a00;
			}
			.m-divider {
				margin-bottom: 40rpx;
			}
			.m-goods-card {
				margin-top: 10rpx;
				margin-left: 10rpx;
			}
		}
	}
</style>
