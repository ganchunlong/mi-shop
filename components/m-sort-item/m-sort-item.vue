<template>
	<view class="m-sort-item" @click="handleClick">
		<text :class="[
				'm-sort-item__text',
				{
					'm-sort-item__text--active': isActive
				}
			]"
		>
			<slot></slot>
			<block v-if="!$slots.default">{{ label }}</block>
		</text>
		<view class="m-sort-item__icon">
			<text 
				:class="[
					'iconfont',
					'icon-triangleupfill',
					{
						'icon-triangleupfill--active': isAscending
					}
				]"
			></text>
			<text :class="[
				'iconfont',
				'icon-triangledownfill',
				{
					'icon-triangledownfill--active': isDescending
				}
			]"></text>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'MSortItem',
		props: {
			label: {
				type: [String, Number],
				require: true
			}
		},
		inject: ['mSort'],
		computed: {
			isActive () {
				return this.mSort.current === this.label
			},
			isAscending () {
				return this.isActive && this.mSort.order === 'ascending'
			},
			isDescending () {
				return this.isActive && this.mSort.order === 'descending'
			}
		},
		methods: {
			handleClick () {
				this.mSort.setVal(this.label)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.m-sort-item {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		&__text {
			margin-right: 6rpx;
			font-size: 30rpx;
			color: #6a767f;
			&--active {
				color: #d76a16;
			}
		}
	}

	.iconfont {
		line-height: 14rpx;
		display: block;
		font-size: 20rpx;
		color: #cdcdcd;
	}

	.icon-triangleupfill--active {
		color: #fe6a03;
	}

	.icon-triangledownfill--active {
		color: #fe6a03;
	}
</style>
