<template>
	<view class="m-input-number">
		<view
			:class="[
				'm-input-number__button',
				{
					'm-input-number__button--disabled': isDisableCut
				}
			]"
			@click="cut"
		>
			<text class="iconfont icon-move"></text>
		</view>
		<input
			v-model.number="value"
			type="number"
			class="m-input-number__input"
			@input="handleInput"
		>
		<view
			:class="[
				'm-input-number__button',
				{
					'm-input-number__button--disabled': isDisableAdd
				}
			]"
			@click="add"
		>
			<text class="iconfont icon-add"></text>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'MInputNumber',
		props: {
			value: {
				type: [Number, String],
				required: true
			},
			min: {
				type: Number,
				default: -Infinity
			},
			max: {
				type: Number,
				default: +Infinity
			}
		},
		computed: {
			isDisableAdd () {
				return this.value >= this.max
			},
			isDisableCut () {
				return this.value <= this.min
			}
		},
		methods: {
			handleInput (e) {
				const { value } = e.detail
				this.$emit('input', value)
			},
			add () {
				if (this.isDisableAdd) {
					return
				}
				this.$emit('input', this.value + 1)
			},
			cut () {
				if (this.isDisableCut) {
					return
				}
				this.$emit('input', this.value - 1)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.m-input-number {
		display: inline-flex;
		align-items: center;
		&__button {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 60rpx;
			height: 60rpx;
			background-color: #f8f8f8;
			color: #606266;
			&--disabled {
				color: #c0c4cc;
				cursor: not-allowed;
			}
		}
		&__input {
			padding: 10rpx 20rpx;
			width: 80rpx;
			text-align: center;
			font-size: 30rpx;
		}
	}
</style>
