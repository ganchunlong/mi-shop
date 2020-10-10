<template>
	<view class="m-cell-group">
		<view v-if="title" class="m-cell-group__title">{{ title }}</view>
		<view class="m-cell-group__content">
			<slot></slot>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'MCellGroup',
		props: {
			title: String
		}
	}
</script>

<style lang="scss" scoped>
	@import "@/assets/styles/variable.scss";

	.m-cell-group {
		&__title {
			padding: 14rpx 30rpx;
			font-size: $text-size-base;
			color: $color-info;
		}
	}
</style>
