<template>
	<view :class="[
			'm-button',
			type ? `m-button--${type}` : '',
			size ? `m-button--${size}` : '',
			{
				'is-disabled': disabled || loading,
				'is-block': block,
				'is-round': round,
				'is-square': square,
				'is-color': color
			}
		]"
		:style="style"
		@click="handleClick"
	>
		<text v-if="loading">loading</text>
		<text v-if="icon" :class="[
			'iconfont',
			`icon-${icon}`
		]"></text>
		<text v-if="$slots.default"><slot></slot></text>
	</view>
</template>

<script>
	export default {
		name: 'MButton',
		props: {
			type: {
				type: String,
				default: 'default'
			},
			size: {
				type: String
			},
			loading: Boolean,
			disabled: Boolean,
			block: Boolean,
			round: Boolean,
			square: Boolean,
			color: String,
			icon: String
		},
		computed: {
			style () {
				const style = {}

				if (this.color) {
					style.color = '#fff'
					style.background = this.color
				}

				return style
			}
		},
		methods: {
			handleClick (e) {
				if (this.disabled || this.loading) {
					return
				}
				this.$emit('click', e)
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "@/assets/styles/variable.scss";

	@mixin button-theme ($color) {
		border-color: $color;
		color: $color-white;
		background-color: $color;
	}

	.m-button {
		display: inline-block;
		padding: 24rpx 28rpx;
		border: 1px solid $border-color-base;
		border-radius: $radius-base;
		font-size: $text-size-base;
		color: $color-text-primary;
		text-align: center;
		cursor: pointer;
		background-color: $color-white;
		&--primary {
			@include button-theme($color-primary)
		}
		&--success {
			@include button-theme($color-success)
		}
		&--danger {
			@include button-theme($color-danger)
		}
		&--warning {
			@include button-theme($color-warning)
		}
		&--info {
			@include button-theme($color-info)
		}
		&--medium {
			padding: 18rpx 24rpx;
		}
		&--small {
			padding: 14rpx 16rpx;
			font-size: $text-size-small;
		}
		&--mini {
			padding: 4px 8px;
			font-size: $text-size-mini;
		}
	}

	.is-block {
		display: block;
	}

	.is-round {
		border-radius: $radius-round;
	}

	.is-disabled {
		opacity: 0.6;
	}

	.is-square {
		border-radius: 0;
	}

	.is-color {
		border: none;
	}
</style>
