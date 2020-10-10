<template>
	<view class="page">
		<view class="container">
			<view id="scroll-nav" class="scroll-nav">
				<view class="nav-bar">
					<scroll-view
						class="nav-bar__scroll"
						:scroll-top="leftScrollTop"
						scroll-y
						scroll-with-animation
					>
						<view id="nav-bar__list" class="nav-bar__list">
							<block v-for="(item, index) of navList" :key="index">
								<view
									:class="[
										'nav-bar__item',
										currentIndex === index ? 'nav-bar__item--active' : ''
									]"
									@click="handleClick(index)"
								>
									<text class="nav-bar__text">{{ item }}</text>
								</view>
							</block>
						</view>
					</scroll-view>
				</view>
			
				<view class="scroll-content">
					<scroll-view
						class="scroll-content__scroll"
						:scroll-top="rightScrollTop"
						scroll-y
						scroll-with-animation
						@scroll="handleScroll"
					>
						<view id="category-list" class="category-list">
							<view class="category">
								<view class="category__title">手机</view>
								<view class="product-group">
									<view class="product">
										<image class="product__img" src="/static/images/cate_07.png"></image>
										<text class="product__text">10X 4G</text>
									</view>
									<view class="product">
										<image class="product__img" src="/static/images/cate_07.png"></image>
										<text class="product__text">10X 4G</text>
									</view>
									<view class="product">
										<image class="product__img" src="/static/images/cate_07.png"></image>
										<text class="product__text">10X 4G</text>
									</view>
									<view class="product">
										<image class="product__img" src="/static/images/cate_07.png"></image>
										<text class="product__text">10X 4G</text>
									</view>
								</view>
							</view>
							<view class="category">
								<view class="category__title">众筹</view>
								<view class="product-group">
									<view class="product">
										<image class="product__img" src="/static/images/cate_07.png"></image>
										<text class="product__text">10X 4G</text>
									</view>
									<view class="product">
										<image class="product__img" src="/static/images/cate_07.png"></image>
										<text class="product__text">10X 4G</text>
									</view>
									<view class="product">
										<image class="product__img" src="/static/images/cate_07.png"></image>
										<text class="product__text">10X 4G</text>
									</view>
									<view class="product">
										<image class="product__img" src="/static/images/cate_07.png"></image>
										<text class="product__text">10X 4G</text>
									</view>
								</view>
							</view>
							<view class="category">
								<view class="category__title">小米手机</view>
								<view class="product-group">
									<view class="product">
										<image class="product__img" src="/static/images/cate_07.png"></image>
										<text class="product__text">10X 4G</text>
									</view>
									<view class="product">
										<image class="product__img" src="/static/images/cate_07.png"></image>
										<text class="product__text">10X 4G</text>
									</view>
									<view class="product">
										<image class="product__img" src="/static/images/cate_07.png"></image>
										<text class="product__text">10X 4G</text>
									</view>
									<view class="product">
										<image class="product__img" src="/static/images/cate_07.png"></image>
										<text class="product__text">10X 4G</text>
									</view>
								</view>
							</view>
							<view class="category">
								<view class="category__title">黑鲨</view>
								<view class="product-group">
									<view class="product">
										<image class="product__img" src="/static/images/cate_07.png"></image>
										<text class="product__text">10X 4G</text>
									</view>
									<view class="product">
										<image class="product__img" src="/static/images/cate_07.png"></image>
										<text class="product__text">10X 4G</text>
									</view>
									<view class="product">
										<image class="product__img" src="/static/images/cate_07.png"></image>
										<text class="product__text">10X 4G</text>
									</view>
									<view class="product">
										<image class="product__img" src="/static/images/cate_07.png"></image>
										<text class="product__text">10X 4G</text>
									</view>
									<view class="product">
										<image class="product__img" src="/static/images/cate_07.png"></image>
										<text class="product__text">10X 4G</text>
									</view>
									<view class="product">
										<image class="product__img" src="/static/images/cate_07.png"></image>
										<text class="product__text">10X 4G</text>
									</view>
									<view class="product">
										<image class="product__img" src="/static/images/cate_07.png"></image>
										<text class="product__text">10X 4G</text>
									</view>
									<view class="product">
										<image class="product__img" src="/static/images/cate_07.png"></image>
										<text class="product__text">10X 4G</text>
									</view>
								</view>
							</view>
							<view class="category">
								<view class="category__title">5G合约</view>
								<view class="product-group">
									<view class="product">
										<image class="product__img" src="/static/images/cate_07.png"></image>
										<text class="product__text">10X 4G</text>
									</view>
									<view class="product">
										<image class="product__img" src="/static/images/cate_07.png"></image>
										<text class="product__text">10X 4G</text>
									</view>
									<view class="product">
										<image class="product__img" src="/static/images/cate_07.png"></image>
										<text class="product__text">10X 4G</text>
									</view>
									<view class="product">
										<image class="product__img" src="/static/images/cate_07.png"></image>
										<text class="product__text">10X 4G</text>
									</view>
									<view class="product">
										<image class="product__img" src="/static/images/cate_07.png"></image>
										<text class="product__text">10X 4G</text>
									</view>
									<view class="product">
										<image class="product__img" src="/static/images/cate_07.png"></image>
										<text class="product__text">10X 4G</text>
									</view>
									<view class="product">
										<image class="product__img" src="/static/images/cate_07.png"></image>
										<text class="product__text">10X 4G</text>
									</view>
								</view>
							</view>
							<view class="category">
								<view class="category__title">手机配件</view>
								<view class="product-group">
									<view class="product">
										<image class="product__img" src="/static/images/cate_07.png"></image>
										<text class="product__text">10X 4G</text>
									</view>
									<view class="product">
										<image class="product__img" src="/static/images/cate_07.png"></image>
										<text class="product__text">10X 4G</text>
									</view>
									<view class="product">
										<image class="product__img" src="/static/images/cate_07.png"></image>
										<text class="product__text">10X 4G</text>
									</view>
									<view class="product">
										<image class="product__img" src="/static/images/cate_07.png"></image>
										<text class="product__text">10X 4G</text>
									</view>
								</view>
							</view>
							<view class="category">
								<view class="category__title">电视</view>
								<view class="product-group">
									<view class="product">
										<image class="product__img" src="/static/images/cate_07.png"></image>
										<text class="product__text">10X 4G</text>
									</view>
									<view class="product">
										<image class="product__img" src="/static/images/cate_07.png"></image>
										<text class="product__text">10X 4G</text>
									</view>
									<view class="product">
										<image class="product__img" src="/static/images/cate_07.png"></image>
										<text class="product__text">10X 4G</text>
									</view>
									<view class="product">
										<image class="product__img" src="/static/images/cate_07.png"></image>
										<text class="product__text">10X 4G</text>
									</view>
								</view>
							</view>
						</view>
					</scroll-view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'ClassPage',
		data () {
			return {
				currentIndex: 0,
				viewHeight: 0,
				midViewHeight: 0,
				navListHeight: 0,
				navItemHeight: 0,
				leftScrollMin: 0,
				leftScrollMax: 0,
				leftScrollTop: 0,
				contentHeight: 0,
				contentOffsetList: [],
				rightScrollMin: 0,
				rightScrollMax: 0,
				rightScrollTop: 0,
				navList: [
					'新品', '众筹', '小米手机', 'Redmi', '黑鲨', '5G合约', '手机配件', '电视',
					'大家电', '电脑办公', '小爱智能', '路由器', '生活电器', '厨房电器', '智能穿戴',
					'智能家居', '车载出行', '个护健康', '数码配件', '日用百货', '有品精选', '米粉卡'
				]
			}
		},
		onReady () {
			const query = uni.createSelectorQuery().in(this)
			query.select('#scroll-nav').boundingClientRect(({ height }) => {
				this.viewHeight = Math.round(height)
				this.midViewHeight = this.viewHeight / 2
			}).exec()
			query.select('#nav-bar__list').boundingClientRect(({ height }) => {
				this.navListHeight = Math.round(height)
				this.navItemHeight = Math.round(height / this.navList.length)
				this.leftScrollMax = this.navListHeight - this.viewHeight
			}).exec()
			query.select('#category-list').boundingClientRect(({ height }) => {
				this.contentHeight = Math.round(height)
				this.rightScrollMax = this.contentHeight - this.viewHeight
			})
			query.selectAll('.category').boundingClientRect(nodeList => {
				this.contentOffsetList = nodeList.map(({ top }) => Math.round(top))
			}).exec()
		},
		methods: {
			handleClick (index) {
				this.currentIndex = index
				this.leftScrollTo(index)
				this.rightScrollTo(index)
			},
			handleScroll (e) {
				const scrollTop = Math.round(e.detail.scrollTop)
				if (scrollTop >= this.rightScrollMax) {
					return
				}
				const currentIndex = this.contentOffsetList.findIndex(item => scrollTop < item)
				this.currentIndex = Math.max(currentIndex - 1, 0)
				this.leftScrollTo(this.currentIndex)
			},
			leftScrollTo (index) {
				// 设置导航滚动
				let offsetTop = this.navItemHeight * index + this.navItemHeight / 2 - this.midViewHeight
				const min = this.leftScrollMin
				const max = this.leftScrollMax
				offsetTop = offsetTop < min ? min : offsetTop > max ? max : offsetTop
				this.leftScrollTop = offsetTop
			},
			rightScrollTo (index) {
				// 滚动内容越界判断
				let rightScrollTop = index >= this.contentOffsetList.length ? this.rightScrollMax : this.contentOffsetList[index]
				this.rightScrollTop = rightScrollTop
			}
		}
	}
</script>

<style lang="scss" scoped>
	.page {
		display: flex;
		height: 100%;
	}

	.scroll-nav {
		border-top: 1rpx solid #e7eaea;
		display: flex;
		width: 100%;
		height: 100%;
		overflow: hidden;
	}

	.nav-bar {
		border-right: 1rpx solid #e7eaea;
		width: 160rpx;
		&__scroll {
			height: 100%;
		}
		&__item {
			display: flex;
			align-items: center;
			height: 96rpx;
			border-bottom: 1rpx solid #e7eaea;
			&--active {
				color: #f45f00;
				.nav-bar__text {
					border-color: #fe6d05;
				}
			}
			&:last-child {
				border: none;
			}
		}
		&__text {
			display: block;
			padding: 16rpx 0;
			width: 100%;
			font-size: 28rpx;
			text-align: center;
			border-left: 6rpx solid transparent;
		}
	}

	.scroll-content {
		flex: 1;
		overflow: hidden;
		&__scroll {
			height: 100%;
		}
	}

	.category {
		&-list {
			padding: 0 34rpx;
		}
		&__title {
			padding: 20rpx 0;
			font-size: 28rpx;
			text-align: center;
		}
	}

	.product {
		flex-basis: 33.3333%;
		padding: 20rpx;
		&-group {
			display: flex;
			flex-wrap: wrap;
		}
		&__img {
			display: block;
			margin: 0 auto 26rpx;
			width: 106rpx;
			height: 106rpx;
		}
		&__text {
			display: block;
			text-align: center;
		}
	}
</style>
