<template>
	<view id="m-tab" class="m-tab">
		<scroll-view
			:scroll-left="scrollLeft"
			scroll-x
			scroll-with-animation
			class="m-tab__scroll"
		>
			<view class="m-tab__list">
				<slot></slot>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import { findComponentsDownward } from '@/utils'

	export default {
		name: 'MTab',
		model: {
			prop: 'value',
			event: 'click'
		},
		provide () {
			return {
				'MTab': this
			}
		},
		props: {
			value: {
				type: Number,
				required: true
			}
		},
		data () {
			return {
				tabItmes: [],
				viewWidth: 0,
				min: 0,
				max: 0,
				scrollLeft: 0
			}
		},
		computed: {
			isScroll () {
				return this.tabItmes.length > 5
			}
		},
		mounted () {
			this.notify()

			// 获取m-tab宽度
			const query = uni.createSelectorQuery().in(this)
			query.select('#m-tab').boundingClientRect(({ width }) => {
				this.viewWidth = width | 0
				this.max = Math.max((this.viewWidth / 5) * (this.tabItmes.length - 5), 0)
			}).exec()
		},
		watch: {
			value: {
				handler (value) {
					this.scrollTo(value)
				}
			},
			tabItmes () {
				this.scrollTo(this.value)
			}
		},
		methods: {
			notify () {
				this.tabItmes = findComponentsDownward(this, 'MTabItem')
				this.tabItmes.forEach(child => child.updateModel())
			},
			change (value) {
				if (value === this.value) {
					return
				}
				this.$emit('click', value)
			},
			scrollTo(index) {
				const max = this.max
				let offset = (index - 2) * (this.viewWidth / 5)
				offset = offset < 0 ? 0 : offset > max ? max : offset
				// 设置滚动偏移
				this.scrollLeft = offset
			},
		}
	}
</script>

<style lang="scss" scoped>
	.m-tab {
		display: flex;
		width: 100%;
		height: 72rpx;
		border-bottom: 1rpx solid #e7eaea;
		background-color: #fff;
		&__scroll {
			height: 100%;
		}
		&__list {
			display: flex;
			height: 100%;
		}
	}
</style>
