<template>
	<view class="m-radio-group">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		name: 'MRadioGroup',
		model: {
			prop: 'value',
			event: 'change'
		},
		props: {
			value: {
				type: [Number, String],
				required: true
			}
		},
		provide () {
			return {
				mRadioGroup: this
			}
		},
		methods: {
			setVal (value) {
				this.$emit('change', value)
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>
