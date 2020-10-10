<template>
	<view :class="[
		'm-card',
		{
			'is-shadow': shadow
		}
	]">
		<view class="m-card__header" v-if="$slots.header">
			<slot name="header"></slot>
		</view>
		<view class="m-card__body" style="bodyStyle">
			<slot />
		</view>
	</view>
</template>

<script>
	export default {
		name: 'MCard',
		props: {
			shadow: {
				type: Boolean,
				default: true
			},
			bodyStyle: Object
		}
	}
</script>

<style lang="scss" scoped>
	@import "@/assets/styles/variable.scss";

	.m-card {
		background-color: $color-white;
		border-radius: $radius-base;
		border: 1rpx solid $border-color-base;
		&__header {
			padding: 30rpx;
			border-bottom: 1rpx solid $border-color-base;
		}
		&__body {
			padding: 30rpx;
		}
	}

	.is-shadow {
		box-shadow: $shadow-base;
	}
</style>
