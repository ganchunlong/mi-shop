<template>
	<view :class="[
			'm-tag',
			type ? `m-tag--${type}` : ''
		]"
	>
		<text v-if="$slots.default"><slot></slot></text>
	</view>
</template>

<script>
	export default {
		name: 'MTag',
		props: {
			type: {
				type: String,
				default: 'default'
			}
		}
	}
</script>

<style lang="scss" scoped>
	.m-tag {
		display: inline-block;
		padding: 18rpx 24rpx;
		font-size: 24rpx;
		line-height: 1.8;
		border-radius: 0;
		vertical-align: middle;
		box-sizing: border-box;
		border: 1rpx solid transparent;
		color: #555;
		background-color: #f5f5f5;
	}

	.m-tag--primary {
		border-color: #b3e1e4;
		background-color: #e8f6f6;
	}

	.m-tag--success {
		border-color: #cdd8b5;
		background-color: #f2f6e8;
	}

	.m-tag--danger {
		border-color: #e3afb1;
		background-color: #f8eae9;
	}
</style>
