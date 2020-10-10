<template>
	<view v-show="showSync"
		:class="[
			'm-overlay',
			{
				'm-overlay--visible': visibleSycn
			}
		]"
		:style="style"
		@click="handleClick"
		@touchmove.stop.prevent
	>
		<slot></slot>
	</view>
</template>

<script>
	export default {
		name: 'MOverlay',
		props: {
			visible: Boolean,
			zIndex: {
				type: [String, Number],
				default: 996
			},
			duration: {
				type: [String, Number],
				default: 300
			}
		},
		data () {
			return {
				showSync: false,
				visibleSycn: false
			}
		},
		computed: {
			style () {
				return {
					zIndex: this.zIndex,
					transition: `all ${this.duration / 1000}s ease-in-out 0s`
				}
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
			handleClick (e) {
				if (!this.visible) {
					return
				}
				this.$emit('update:visible', false)
				this.$emit('click', e)
			},
			change (status) {
				if (status) {
					this.showSync = true
					// TODO 暂时方案使用setTimeout
					setTimeout(() => {
						this.visibleSycn = true
					}, 50)
				} else {
					this.visibleSycn = false
					setTimeout(() => {
						this.showSync = false
					}, this.duration)
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.m-overlay {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background: rgba(0, 0, 0, 0.7);
		opacity: 0;
		&--visible {
			opacity: 1;
		}
	}
</style>
