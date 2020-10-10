<template>
	<view class="m-input">
		<input class="m-input__core" :type="type" :password="password" :placeholder="placeholder" @input="handleInput">
	</view>
</template>

<script>
	export default {
		name: 'MInput',
		props: {
			placeholder: String,
			type: {
				type: String,
				default: 'text'
			},
			password: Boolean
		},
		methods: {
			handleInput (e) {
				const { value } = e.detail
				this.$emit('input', value)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.m-input {
		&__core {
			padding: 20rpx 10rpx;
			font-size: 24rpx;
		}
	}
</style>
