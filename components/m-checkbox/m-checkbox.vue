<template>
	<view class="m-checkbox">
		<view
			:class="[
				'm-checkbox__core',
				{
					'm-checkbox__core--active': currentValue,
					'is-disabled': isDisabled
				}
			]"
			@click="toggle"
		>
			<slot name="icon" v-bind:props="{ checked: currentValue }">
				<text :class="[
					'm-checkbox__icon',
					'iconfont',
					'icon-check',
					{
						'is-square': square,
						'm-checkbox__icon--active': currentValue
					}
				]" :style="iconStyle"></text>
			</slot>
		</view>
		<text
			v-if="$slots.default"
			:class="[
				'm-checkbox__text',
				{
					'm-checkbox__text--disabled': isDisabled
				}
			]"
			@click="handleClickLabel"
		>
			<slot></slot>
		</text>
	</view>
</template>

<script>
	import { findComponentUpward } from '@/utils'

	export default {
		name: 'MCheckbox',
		props: {
			value: {
				type: [Boolean, String, Number],
				default: false
			},
			label: {
				type: [Boolean, String, Number]
			},
			trueValue: {
				type: [Boolean, String, Number],
				default: true
			},
			falseValue: {
				type: [Boolean, String, Number],
				default: false
			},
			disabled: Boolean,
			labelDisabled: Boolean,
			iconSize: {
				type: [Number, String],
				default: ''
			},
			square: Boolean,
			checkedColor: String
		},
		data () {
			return {
				currentValue: false,
				parent: null,
				group: false
			}
		},
		computed: {
			isDisabled () {
				return !!(this.disabled || (this.parent && this.parent.disabled))
			},
			iconStyle () {
				let style = {
					fontSize: `${this.iconSize}px`
				}
				if (this.currentValue) {
					let { checkedColor } = this
					Object.assign(style, {
						borderColor: checkedColor,
						backgroundColor: checkedColor
					})
				}
				return style
			}
		},
		mounted () {
			this.parent = findComponentUpward(this, 'MCheckboxGroup')
			if (this.parent) {
				this.group = true
			} else {
				this.updateModel()
			}
		},
		watch: {
			value (newVal) {
				if (!this.group && (newVal === this.trueValue || newVal === this.falseValue)) {
					this.updateModel()
				}
			}
		},
		methods: {
			toggle () {
				if (this.disabled) {
					return
				}
				this.emitChange(!this.currentValue)
			},
			handleClickLabel () {
				if (this.disabled || this.labelDisabled) {
					return
				}
				this.emitChange(!this.currentValue)
			},
			emitChange (value) {
				if (this.group) {
					const { value: parentValue, max } = this.parent
					if (value && max && parentValue.length >= max) {
						return
					}
					this.parent.change(value ? parentValue.concat(this.label) : parentValue.filter(item => item !== this.label))
				} else {
					const resultValue = value ? this.trueValue : this.falseValue
					this.$emit('input', resultValue)
					this.$emit('change', resultValue)
				}
				this.currentValue = value
			},
			updateModel () {
				if (this.group) {
					this.currentValue = this.parent.value.includes(this.label)
				} else {
					this.currentValue = this.value === this.trueValue
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "@/assets/styles/variable.scss";

	.m-checkbox {
		display: flex;
		vertical-align: middle;
		&__core {
			display: flex;
			align-items: center;
			justify-content: center;
			background-color: $color-white;
		}
		&__text {
			flex: 1;
			display: flex;
			align-items: center;
			margin-left: 16rpx;
			font-size: $text-size-mini;
			&--disabled {
				color: $border-color-base;
			}
		}
		&__icon {
			display: block;
			font-weight: bold;
			font-size: 28rpx;
			border-radius: 100%;
			border: 1px solid $border-color-base;
			color: $color-white;
			&--active {
				border-color: $color-primary;
				background-color: $color-primary;
			}
		}
	}

	.is-square {
		border-radius: $radius-base;
	}

	.is-disabled {
		opacity: 0.6;
	}
</style>
