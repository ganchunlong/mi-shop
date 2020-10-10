<template>
	<view class="page">
		<m-nav-bar :right-text="isEdit ? '完成' : '编辑'" @button-click="handleClick">购物车</m-nav-bar>

		<view class="container">
			<scroll-view scroll-y class="page-scroll">
				<view class="page-content">
					<m-goods-group>
						<block v-for="item of 3" :key="item">
							<m-goods>
								<m-checkbox slot="checkbox"></m-checkbox>
							</m-goods>
						</block>
					</m-goods-group>

					<view class="section">
						<view class="section__title">为你推荐</view>
						<m-divider>买的人还买了</m-divider>
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
			</scroll-view>
		</view>

		<m-submit-bar>
			<m-checkbox></m-checkbox>
		</m-submit-bar>
	</view>
</template>

<script>
	export default {
		name: 'CartPage',
		data () {
			return {
				isEdit: false
			}
		},
		methods: {
			handleClick (type) {
				if (type === 'right') {
					this.isEdit = !this.isEdit
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.page {
		display: flex;
		flex-direction: column;
		height: 100%;
		background-color: #f7fafa;
		&-scroll {
			height: 100%;
		}
		&-content {
			padding-bottom: 110rpx;
		}
	}

	.container {
		flex: 1;
		overflow: hidden;
	}

	.section {
		&__title {
			padding: 32rpx 0;
			font-size: 30rpx;
			font-weight: bold;
			text-align: center;
			color: #fb6a00;
		}
	}

	.m-divider {
		margin-bottom: 40rpx;
	}

	.m-goods-card {
		margin-top: 10rpx;
		margin-left: 10rpx;
	}

	.m-submit-bar {
		position: absolute;
		bottom: 0;
	}
</style>
