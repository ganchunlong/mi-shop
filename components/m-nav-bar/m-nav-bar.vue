<template>
	<view class="m-nav-bar" :style="style">
		<view class="m-nav-bar__status-bar"></view>
		<view class="m-nav-bar__core">
			<text
				v-if="leftText"
				class="m-nav-bar__button m-nav-bar__button--left"
				@click="handleClick('left')"
			>
				{{ leftText }}
			</text>
			<text class="m-nav-bar__title">
				<slot>自定义导航</slot>
			</text>
			<text
				v-if="rightText"
				class="m-nav-bar__button m-nav-bar__button--right"
				@click="handleClick('right')"
			>
				{{ rightText }}
			</text>
		</view>
		<view class="m-nav-bar__border"></view>
	</view>
</template>

<script>
	export default {
		name: 'MNavBar',
		props: {
			leftText: String,
			rightText: String,
			backgroundColor: {
				type: String,
				default: '#ffffff'
			}
		},
		computed: {
			style () {
				return {
					backgroundColor: this.backgroundColor
				}
			}
		},
		methods: {
			handleClick (type) {
				this.$emit('button-click', type)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.m-nav-bar {
		&__status-bar {
			height: var(--status-bar-height);
		}
		&__core {
			position: relative;
			height: 44px;
			line-height: 44px;
			text-align: center;
		}
		&__title {
			font-size: 17px;
		}
		&__button {
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
			font-size: 14px;
			&--left {
				left: 8px;
			}
			&--right {
				right: 8px;
			}
		}
		&__border {
			height: 1px;
			transform: scaleY(0.5);
			background-color: #cacaca;
		}
	}
</style>

