<template>
	<view class="page">
		<view class="container">
			<template v-if="signInType">
				<view class="sign-in-form">
					<view class="sign-in-form__title">手机号登录</view>
					<m-form>
						<m-form-item border>
							<m-input placeholder="请输入手机号"></m-input>
						</m-form-item>
						<m-form-item border>
							<view class="m-row">
								<m-input placeholder="请输入验证码"></m-input>
								<text style="text-align: center;">获取验证码(60s)</text>
							</view>
						</m-form-item>
						<m-form-item>
							<view class="m-form-item__link" @click="signInType = 0">
								<text>用账号密码登录</text>
								<text class="iconfont icon-right"></text>
							</view>
						</m-form-item>
						<m-form-item>
							<m-button block color="#ff6700">登录</m-button>
						</m-form-item>
						<m-form-item>
							<m-checkbox square icon-size="14">
								已阅读并同意小米账号协议、隐私政策和小米商城用户协议
							</m-checkbox>
						</m-form-item>
					</m-form>
				</view>
			</template>

			<template v-else>
				<view class="sign-in-form">
					<view class="sign-in-form__title">密码登录</view>
					<m-form>
						<m-form-item>
							<m-input placeholder="请输入手机号/邮箱/小米账号"></m-input>
						</m-form-item>
						<m-form-item>
							<m-input placeholder="请输入密码"></m-input>
						</m-form-item>
						<m-form-item>
							<view class="m-form-item__link" @click="signInType = 1">
								<text>用手机短信登录</text>
								<text class="iconfont icon-right"></text>
							</view>
						</m-form-item>
						<m-form-item>
							<m-button block color="#ff6700">登录</m-button>
						</m-form-item>
						<m-form-item>
							<m-checkbox square icon-size="14">
								已阅读并同意小米账号协议、隐私政策和小米商城用户协议
							</m-checkbox>
						</m-form-item>
					</m-form>
				</view>
			</template>
		</view>
	</view>
</template>

<script>
	export default {
		name: "SignInPage",
		data () {
			return {
				signInType: 1
			}
		}
	}
</script>

<style lang="scss" scoped>
	.page {
		position: relative;
		min-height: 100%;
	}

	.sign-in-form {
		position: absolute;
		top: 180rpx;
		left: 0;
		right: 0;
		padding: 0 70rpx;
		&__title {
			margin-bottom: 50rpx;
			font-size: 50rpx;
			font-weight: bold;
		}
	}

	.m-row {
		display: grid;
		grid-template-columns: 1fr 190rpx;
		align-items: center;
	}

	.m-form-item {
		margin-bottom: 50rpx;
		&__link {
			display: inline-flex;
			align-items: center;
			color: #767676;
		}
	}
	
	/deep/ .m-checkbox__text {
		font-size: 16rpx;
		color: #767676;
	}
</style>
