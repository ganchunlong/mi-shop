<template>
	<view :class="[
			'm-form-item',
			{
				'm-form-item--border': currentBorder
			}
		]"
	>
		<view
			v-if="label"
			:style="{
				width: `${currentLabelWidth}px`
			}"
			:class="[
				'm-form-item__label',
				{
					'm-form-item__label--float': currentLabelWidth
				}
			]"
		>
			{{ label }}
		</view>
		<view
			:style="[
				{
					marginLeft: `${currentLabelWidth}px`
				}
			]"
			class="m-form-item__content">
			<slot></slot>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'MFormItem',
		props: {
			label: String,
			labelWidth: [Number, String],
			border: Boolean
		},
		inject: ['MForm'],
		computed: {
			currentLabelWidth () {
				return this.labelWidth || (this.MForm && this.MForm.labelWidth)
			},
			currentBorder () {
				return this.border || (this.MForm && this.MForm.border)
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "@/assets/styles/variable.scss";

	.m-form-item {
		position: relative;
		overflow: hidden;
		margin-bottom: 30rpx;
		&--border {
			border-bottom: 1rpx solid $border-color-base;
			&:last-child {
				border-bottom: none;
			}
		}
		&__label {
			display: inline-block;
			padding-right: 20rpx;
			text-align: left;
			font-size: 28rpx;
			&--float {
				float: left;
			}
		}
	}
</style>
