<template>
	<view class="page">
		<view class="sort">
			<m-sort>
				<m-sort-item label="0">综合</m-sort-item>
				<m-sort-item label="1">销量</m-sort-item>
				<m-sort-item label="2">价格</m-sort-item>
			</m-sort>
			<m-button class="sort-button" @click="visible = true">筛选</m-button>
		</view>

		<view class="container">
			<scroll-view class="page-scroll" scroll-y>
				<view class="page-content">
					<m-goods-group>
						<block v-for="item of 10" :key="item">
							<m-goods></m-goods>
						</block>
					</m-goods-group>
				</view>
			</scroll-view>
		</view>

		<m-popup
			:visible.sync="visible"
			position="right"
			width="300"
		>
			<m-form>
				<m-form-item label="服务">
					<m-radio-group v-model="serviceId">
						<m-radio-button :label="0">促销</m-radio-button>
						<m-radio-button :label="1">分期</m-radio-button>
						<m-radio-button :label="2">仅看有货</m-radio-button>
					</m-radio-group>
				</m-form-item>

				<m-form-item label="分类">
					<m-radio-group v-model="classId">
						<m-radio-button :label="0">耳机</m-radio-button>
						<m-radio-button :label="1">户外</m-radio-button>
						<m-radio-button :label="2">配件</m-radio-button>
					</m-radio-group>
				</m-form-item>

				<view class="button-group">
					<m-button square class="m-button--reset">重置</m-button>
					<m-button square color="#fd6900">确定</m-button>
				</view>
			</m-form>
		</m-popup>
	</view>
</template>

<script>
	export default {
		name: 'SearchListPage',
		data () {
			return {
				visible: false,
				serviceId: 0,
				classId: 0
			}
		}
	}
</script>

<style lang="scss" scoped>
	.page {
		display: flex;
		flex-direction: column;
		height: 100%;
		&-scroll {
			height: 100%;
		}
	}

	.sort {
		display: flex;
		border-top: 1rpx solid  #e7eaea;
		border-bottom: 1rpx solid #e7eaea;
		&-button {
			flex: 1;
			display: flex;
			align-items: center;
			justify-content: center;
			border: none;
			padding: 0;
			width: 158rpx;
			font-size: 30rpx;
			color: #d76a16;
		}
	}

	.m-sort {
		flex: 3;
		border: none;
	}

	.container {
		flex: 1;
		overflow: hidden;
	}

	/deep/ .m-form {
		position: relative;
		padding: 0 30rpx;
		height: 100%;
		&-item {
			&__label {
				margin: 24rpx 0;
				font-size: 30rpx;
			}
		}
	}

	.m-radio-group {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-gap: 20rpx;
	}

	.button-group {
		position: absolute;
		right: 0;
		bottom: 0;
		left: 0;
		display: flex;
	}

	.m-button {
		flex: 1;
		border: none;
		&--reset {
			border-top: 1rpx solid #e7eaea;
		}
	}
</style>
