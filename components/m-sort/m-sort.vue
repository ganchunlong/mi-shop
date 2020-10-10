<template>
	<view class="m-sort">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		name: 'MSort',
		props: {
			defaultSort: {
				type: Object
			}
		},
		provide () {
			return {
				mSort: this
			}
		},
		data () {
			return {
				current: null,
				order: null, // ascending 表示升序，descending 表示降序，null 表示还原为原始顺序
			}
		},
		methods: {
			setVal (val) {
				if (val !== this.current) {
					this.current = val
					this.order = 'ascending'
					return
				}
				const order = this.order
				this.order = order === null ? 'ascending' : (order === 'ascending' ? 'descending' : null)
				this.current = this.order ? val : null
				this.$emit('change', this.current, this.order)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.m-sort {
		display: flex;
		height: 86rpx;
		border: 1rpx solid  #e7eaea;
	}
</style>
