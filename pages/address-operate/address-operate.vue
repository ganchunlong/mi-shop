<template>
	<view class="page">
		<view class="container">
			<m-form label-width="260rpx">
				<m-form-item class="border-bottom" label="收货人:">
					<m-input placeholder="请输入收货人地址"></m-input>
				</m-form-item>
				<m-form-item class="margin-bottom" label="手机号码:">
					<m-input placeholder="请输入手机号码"></m-input>
				</m-form-item>
				<m-form-item class="border-bottom" label="所在地区:">
					<m-input placeholder="请输入所在地区"></m-input>
				</m-form-item>
				<m-form-item class="margin-bottom" label="详细地址">
					<m-input placeholder="请输入详细地址"></m-input>
				</m-form-item>
				<m-form-item class="flex-between" label="设置为默认地址：" label-width="280rpx">
					<switch checked color="#fd6900" />
				</m-form-item>

				<m-button block color="#fd6900">保存</m-button>
			</m-form>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'AddressOperate'
	}
</script>

<style lang="scss" scoped>
	.page {
		min-height: 100%;
		background-color: #eeeeee;
	}

	/deep/ .m-form {
		&-item {
			background-color: #fff;
			&__label {
				padding-left: 20rpx;
			}
		}
	}

	.m-button {
		margin: 30rpx auto;
		width: 694rpx;
	}

	.margin-bottom {
		margin-bottom: 20rpx;
	}

	.border-bottom {
		border-bottom: 1rpx solid #dce0e4;
	}

	.flex-between {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
</style>
