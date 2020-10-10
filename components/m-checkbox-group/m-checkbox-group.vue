<template>
	<view :class="[
		'm-checkbox-group',
		{
			'm-checkbox-group--horizontal': horizontal
		}
	]">
		<slot></slot>
	</view>
</template>

<script>
	import { findComponentsDownward } from '@/utils'

	export default {
		name: 'MCheckboxGroup',
		props: {
			value: {
				type: Array,
				default () {
					return []
				}
			},
			max: {
				type: [Number, String],
				default: 0
			},
			disabled: Boolean,
			horizontal: Boolean
		},
		mounted () {
			this.notify()
		},
		watch: {
			value () {
				this.notify()
			}
		},
		methods: {
			notify () {
				const childrens = findComponentsDownward(this, 'MCheckbox')
				childrens.forEach(child => child.updateModel())
			},
			change (value) {
				this.$emit('input', value)
				this.$emit('change', value)
			},
			toggleAll (status) {
				let value = new Set()
				if (status) {
					const childrens = findComponentsDownward(this, 'MCheckbox')
					let len = this.max > 0 ? this.max : childrens.length
					for (let i = 0; i < len; i++) {
						value.add(childrens[i].label)
					}
				}
				this.change([...value])
			}
		}
	}
</script>

<style lang="scss" scoped>
	.m-checkbox-group {
		&--horizontal {
			display: flex;
			flex-wrap: wrap;
		}
	}
</style>
