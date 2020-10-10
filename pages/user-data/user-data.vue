<template>
	<view class="page">
		<view class="container">
			<m-cell-group>
				<m-cell title="头像" center>
					<view class="avatar" slot="value">
						<image class="avatar__img" src="/static/images/userpic.png" mode="widthFix"></image>
					</view>
				</m-cell>
				<m-cell title="姓名" is-link></m-cell>
				<m-cell title="性别" is-link></m-cell>
				<m-cell title="生日" is-link></m-cell>
			</m-cell-group>
			<m-cell-group>
				<m-cell title="修改密码" is-link></m-cell>
				<m-cell title="密保手机" is-link></m-cell>
			</m-cell-group>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'UserDataPage'
	}
</script>

<style lang="scss" scoped>
	.page {
		height: 100%;
		overflow: hidden;
		background-color: #eeeeee;
	}

	.m-cell-group {
		margin-top: 20rpx;
	}

	.avatar {
		display: inline-block;
		&__img {
			display: block;
			width: 100rpx;
			height: 100rpx;
		}
	}
</style>
