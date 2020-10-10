<template>
	<view
		:class="[
			'm-cell',
			{
				'm-cell--center': center
			}
		]"
		@click="handleClick"
	>
		<view v-if="$slots.title || title" class="m-cell__title">
			<slot name="title">
				<text>{{ title }}</text>
			</slot>
			<view v-if="label" class="m-cell__label">{{ label }}</view>
		</view>

		<view
			v-if="$slots.value || value"
			:class="[
				'm-cell__value',
				{
					'm-cell__value--alone': isValueAlone
				}
			]"
		>
			<slot name="value">
				<text>{{ value }}</text>
			</slot>
		</view>

		<slot name="right-icon">
			<text v-if="isLink" class="m-cell__link iconfont icon-right"></text>
		</slot>
	</view>
</template>

<script>
	const routeMethods = {
		'navigateTo': uni.navigateTo,
		'redirectTo': uni.redirectTo,
		'reLaunch': uni.reLaunch,
		'switchTab': uni.switchTab
	}

	export default {
		name: 'MCell',
		props: {
			title: {
				type: String,
				default: ''
			},
			value: {
				type: String,
				default: ''
			},
			label: {
				type: String,
				default: ''
			},
			url: String,
			linkType: {
				type: String,
				default: 'navigateTo'
			},
			isLink: Boolean,
			center: Boolean
		},
		computed: {
			isValueAlone () {
				if (this.$slots.title || this.title) {
					return false
				}
				return !!(this.$slots.value || this.value)
			}
		},
		methods: {
			handleClick () {
				this.$emit('click')
				if (this.isLink && this.url) {
					let cb = routeMethods[this.linkType]
					cb && cb({ url: this.url })
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "@/assets/styles/variable.scss";

	.m-cell {
		position: relative;
		display: flex;
		padding: 30rpx;
		background-color: $color-white;
		border-bottom: 1rpx solid $border-color-base;
		&:last-child {
			border: none;
		}
		&---center {
			align-items: center;
		}
		&__title {
			flex: 1;
			font-size: $text-size-base;
		}
		&__value {
			flex: 1;
			display: flex;
			justify-content: flex-end;
			font-size: $text-size-base;
			&--alone {
				justify-content: flex-start;
			}
		}
		&__label {
			margin-top: 10rpx;
			font-size: $text-size-small;
		}
		&__link {
			display: flex;
			align-items: center;
			color: $color-info;
		}
	}
</style>
