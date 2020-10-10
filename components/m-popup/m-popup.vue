<template>
	<view
		v-show="showSync"
		:class="[
			'm-popup',
			{
				'm-popup--visible': visibleSync
			},
		]"
		@touchmove.stop.prevent
	>
			<m-overlay :visible="visibleSync" @click="close"></m-overlay>

			<view
				:class="[
					'm-popup__content',
					`m-popup__content--${position}`,
					{
						'm-popup__content--visible': visibleSync
					}
				]"
				:style="style"
			>
			<slot></slot>
			<text class="m-popup__close iconfont icon-close" @click="close"></text>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'MPopup',
		props: {
			visible: Boolean,
			position: {
				type: String,
				default: 'bottom'
			},
			width: {
				type: [String, Number],
				default: '100'
			},
			height: {
				type: [String, Number],
				default: '200'
			}
		},
		data () {
			return {
				showSync: false,
				visibleSync: false
			}
		},
		computed: {
			style () {
				let style = {}

				if (this.position) {
					if (['top', 'bottom'].includes(this.position)) {
						style['height'] = `${this.height}px`
					} else {
						style['width'] = `${this.width}px`
					}
				}

				return style
			}
		},
		watch: {
			visible: {
				handler (newVal) {
					this.change(newVal)
				}
			}
		},
		mounted () {
			this.visible && this.change(this.visible)
		},
		methods: {
			close () {
				if (!this.visible) {
					return
				}
				this.$emit('update:visible', false)
			},
			change (status) {
				if (status) {
					this.showSync = true
					// TODO 暂时方案使用setTimeout
					setTimeout(() => {
						this.visibleSync = true
					}, 50)
				} else {
					this.visibleSync = false
					setTimeout(() => {
						this.showSync = false
					}, 300)
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.m-popup {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		&__content {
			display: block;
			position: absolute;
			transition: all .3s ease-in-out 0s;
			background-color: #fff;
			z-index: 997;
			&--top {
				top: 0;
				right: 0;
				left: 0;
				transform: translate3d(0, -100%, 0);
				border-bottom-left-radius: 20rpx;
				border-bottom-right-radius: 20rpx;
			}
			&--right {
				top: 0;
				right: 0;
				bottom: 0;
				transform: translate3d(100%, 0, 0);
			}
			&--bottom {
				right: 0;
				bottom: 0;
				left: 0;
				border-top-left-radius: 20rpx;
				border-top-right-radius: 20rpx;
				transform: translate3d(0, 100%, 0);
			}
			&--left {
				top: 0;
				bottom: 0;
				left: 0;
				transform: translate3d(-100%, 0, 0);
			}
			&--visible {
				transform: translate3d(0, 0, 0);
			}
		}
		&__close {
			position: absolute;
			top: 0;
			right: 0;
			padding: 20rpx;
			font-size: 34rpx;
		}
	}
</style>
