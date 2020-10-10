<template>
	<view
		:class="[
			'm-grid-item'
		]"
		:style="style"
	>
		<slot></slot>
	</view>
</template>

<script>
	export default {
		name: 'MGridItem',
		inject: ['mGrid'],
		computed: {
			style () {
				const { col } = this.mGrid

				return {
					'flexBasis': `${(100 / col).toFixed(4)}%`
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.m-grid-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>
