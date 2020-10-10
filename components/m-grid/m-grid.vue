<template>
	<view class="m-grid">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		name: 'MGrid',
		props: {
			col: {
				type: [String, Number],
				default: 3
			}
		},
		provide () {
			return {
				mGrid: this
			}
		}
	}
</script>

<style lang="scss" scoped>
	.m-grid {
		display: flex;
		flex-wrap: wrap;
		background-color: #fff;
	}
</style>
