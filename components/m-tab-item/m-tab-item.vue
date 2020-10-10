<template>
	<view :style="style" class="m-tab-item" @click="handleClick">
		<text
			:class="[
				'm-tab-item__text',
				{
					'm-tab-item__text--active': isActive
				}
			]"
		>
			<slot></slot>
		</text>
	</view>
</template>

<script>
	export default {
		name: 'MTabItem',
		inject: ['MTab'],
		data () {
			return {
				value: null
			}
		},
		computed: {
			isActive () {
				if (this.MTab) {
					return this.MTab.value === this.value
				}
				return false
			},
			style () {
				let style = {}
				if (this.MTab && this.MTab.isScroll) {
					Object.assign(style, {
						flex: '0 0 20%'
					})
				}
				return style
			}
		},
		beforeDestroy () {
			this.MTab.notify()
		},
		methods: {
			handleClick () {
				this.MTab.change(this.value)
			},
			updateModel () {
				this.value = this.MTab.tabItmes.indexOf(this)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.m-tab-item {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0 12rpx;
		flex: 1;
		&__text {
			border-bottom: 4rpx solid transparent;
			padding: 2rpx 0;
			font-size: 28rpx;
			color: #616161;
			&--active {
				color: #f36e00;
				border-color: #de610e;
			}
		}
	}
</style>
