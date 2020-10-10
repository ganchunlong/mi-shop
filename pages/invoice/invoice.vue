<template>
	<view class="page">
		<view class="container">
			<m-form>
				<m-form-item label="发票类型">
					<m-radio-group>
						<m-radio-button>电子发票</m-radio-button>
					</m-radio-group>
					<view class="m-form-item__text">电子发票与纸制发票具有相同的法律效力，可做为报销、售后、维权凭证，推荐使用电子发票，不怕丢失，更方便，环保。</view>
				</m-form-item>

				<m-form-item label="发票抬头">
					<m-radio-group>
						<m-radio-button>个人</m-radio-button>
						<m-radio-button>单位</m-radio-button>
					</m-radio-group>
				</m-form-item>
			</m-form>

			<m-cell-group>
				<m-cell>
					<template slot="title">
						<text>个人姓名：</text>
						<text>个人</text>
					</template>
				</m-cell>
				<m-cell>
					<template slot="title">
						<text>发票内容：</text>
						<text>商品明细</text>
					</template>
				</m-cell>
			</m-cell-group>
			
			<m-cell-group>
				<m-cell>
					<template slot="title">
						<text>收票人手机：</text>
						<text>152****7021</text>
					</template>
				</m-cell>
			</m-cell-group>
			
			<view class="footer">
				<view>发票须知：</view>
				<view>1.发票为实际支付金额，不包括优惠券等；</view>
				<view>2.电子发票可在订单完成后，在订单详情中查看；</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'InvoicePage'
	}
</script>

<style lang="scss" scoped>
	.page {
		min-height: 100%;
		background-color: #f7fafa;
		/deep/ .m-form {
			overflow: hidden;
			&-item {
				margin-bottom: 20rpx;
				padding: 20rpx;
				background-color: #fff;
				&:first-child {
					margin-top: 20rpx;
				}
				&__label {
					margin-bottom: 20rpx;
				}
				&__text {
					margin-top: 20rpx;
					line-height: 50rpx;
					color: #b2b2b2;
				}
				.m-radio-button {
					margin-right: 20rpx;
				}
			}
		}
		.footer {
			padding: 20rpx;
			line-height: 50rpx;
			color: #b2b2b2;
		}
	}
</style>
