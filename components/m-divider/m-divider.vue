<template>
	<view :class="[
			'm-divider',
			`m-divider--${contentPosition}`,
			{
				'm-divider--dashed': dashed,
			}
		]"
	>
		<view :class="[
				'm-divider__line',
				{
					'm-divider__line--short': contentPosition === 'left'
				}
			]"
		></view>
		<text v-if="$slots.default" class="m-divider__text">
			<slot></slot>
		</text>
		<view :class="[
				'm-divider__line',
				{
					'm-divider__line--short': contentPosition === 'right'
				}
			]"
		></view>
	</view>
</template>

<script>
	export default {
		name: 'MDivider',
		props: {
			dashed: Boolean,
			contentPosition: {
				type: String,
				default: 'center'
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "@/assets/styles/variable.scss";

	.m-divider {
		display: flex;
		align-items: center;
		margin: 38rpx 0;
		line-height: 48rpx;
		border-color: $border-color-base;
		border-style: solid;
		border-width: 0;
		color: $color-text-placeholder;
		&__line {
			flex: 1;
			height: 1rpx;
			border: 0;
			border-bottom-width: 1rpx;
			border-color: inherit;
			border-style: inherit;
			&--short {
				max-width: 10%;
			}
		}
		&__text {
			padding: 0 30rpx;
		}
		&--dashed {
			border-style: dashed;
		}
	}
</style>
