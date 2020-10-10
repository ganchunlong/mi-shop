<template>
	<view class="page">
		<view class="container">
			<m-cell-group title="账号管理">
				<m-cell title="个人资料" is-link></m-cell>
				<m-cell title="收货地址" url="/pages/address-list/address-list" is-link></m-cell>
			</m-cell-group>
			<m-cell-group title="关于">
				<m-cell title="关于商城" is-link></m-cell>
				<m-cell title="意见反馈" is-link></m-cell>
				<m-cell title="协议规则" is-link></m-cell>
				<m-cell title="资质证件" is-link></m-cell>
				<m-cell title="用户协议" is-link></m-cell>
				<m-cell title="隐私政策" is-link></m-cell>
			</m-cell-group>
			<m-button block color="#f56c6c">退出登录</m-button>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'SettingPage'
	}
</script>

<style lang="scss" scoped>
	.page {
		min-height: 100%;
		background-color: #eeeeee;
	}

	.m-button {
		margin: 30rpx auto 0;
		width: 692rpx;
	}
</style>
