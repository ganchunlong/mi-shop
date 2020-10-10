<template>
	<view class="m-form">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		name: 'MForm',
		props: {
			labelWidth: [Number, String],
			border: Boolean
		},
		provide () {
			return {
				MForm: this
			}
		}
	}
</script>

<style lang="scss" scoped>
</style>
