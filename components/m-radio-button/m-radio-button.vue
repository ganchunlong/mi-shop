<template>
	<view :class="[
			'm-radio-button',
			{
				'm-radio-button--active': isActive
			}
		]"
		@click="handleClick"
	>
		<text class="m-radio-button__text">
			<slot></slot>
			<block v-if="!$slots.default">{{ label }}</block>
		</text>
	</view>
</template>

<script>
	export default {
		name: 'MRadioButton',
		props: {
			label: {
				type: [Number, String],
				required: true
			}
		},
		inject: ['mRadioGroup'],
		computed: {
			isActive () {
				return this.mRadioGroup.value === this.label
			}
		},
		methods: {
			handleClick () {
				if (this.isActive) {
					return
				}
				this.mRadioGroup.setVal(this.label)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.m-radio-button {
		display: inline-block;
		padding: 18rpx 20rpx;
		border: 1rpx solid transparent;
		border-radius: 4rpx;
		text-align: center;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
		font-size: 24rpx;
		vertical-align: middle;
		background-color: #f7fafa;
		&--active {
			border-color: #e76c17;
			background-color: #fce1d5;
		}
	}
</style>
