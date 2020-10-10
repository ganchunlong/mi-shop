<!-- 测试页面 -->
<template>
	<view class="page">
		<view class="container">
			<view class="section">
				<view class="section__title">颜色</view>
				<view class="section__content">
					<view class="color-block color-block--primary"></view>
					<view class="color-block color-block--success"></view>
					<view class="color-block color-block--danger"></view>
					<view class="color-block color-block--warning"></view>
					<view class="color-block color-block--info"></view>
				</view>
			</view>
			
			<view class="section">
				<view class="section__title">字体大小</view>
				<view class="section__content"></view>
			</view>
			
			<view class="section">
				<view class="section__title">按钮</view>
				<view class="section__content">
					<view class="section__sub-title">按钮类型</view>
					<m-button>默认按钮</m-button>
					<m-button type="primary">基础按钮</m-button>
					<m-button type="success">成功按钮</m-button>
					<m-button type="danger">失败按钮</m-button>
					<m-button type="info">信息按钮</m-button>

					<view class="section__sub-title">禁用状态</view>
					<m-button type="primary" disabled>基础</m-button>
					<m-button type="success" disabled>成功</m-button>

					<view class="section__sub-title">按钮形状</view>
					<m-button square type="success">方形按钮</m-button>
					<m-button round type="danger">圆形按钮</m-button>

					<view class="section__sub-title">按钮大小</view>
					<m-button>默认按钮</m-button>
					<m-button size="medium" type="success">中型按钮</m-button>
					<m-button size="small" type="warning">小型按钮</m-button>
					<m-button size="mini" type="danger">迷你按钮</m-button>
					
					<view class="section__sub-title">块级按钮</view>
					<m-button block type="primary">块级元素</m-button>

					<view class="section__sub-title">图标按钮</view>
					<m-button icon="countdownfill" type="primary"></m-button>
					<m-button icon="locationfill" type="success"></m-button>
					<m-button icon="camerafill" type="danger"></m-button>

					<view class="section__sub-title">Loading</view>
					<m-button type="primary" loading>加载中...</m-button>

					<view class="section__sub-title">自定义颜色</view>
					<m-button color="#7232dd">单色按钮</m-button>
					<m-button color="linear-gradient(to right, rgb(75, 176, 255), rgb(97, 73, 246))">渐变色按钮</m-button>
				</view>
			</view>
			
			<view class="section">
				<view class="section__title">卡片</view>
				<view class="section__content">
					<view class="section__sub-title">默认卡片</view>
					<m-card style="margin: 20px;">
						<view slot="header">默认卡片</view>
						<view>
							<view>列表内容1</view>
							<view>列表内容2</view>
							<view>列表内容3</view>
							<view>列表内容4</view>
						</view>
					</m-card>

					<view class="section__sub-title">取消阴影</view>
					<m-card style="margin: 20px;" :shadow="false">
						<view slot="header">取消阴影</view>
						<view>
							<view>列表内容1</view>
							<view>列表内容2</view>
							<view>列表内容3</view>
							<view>列表内容4</view>
						</view>
					</m-card>
				</view>
			</view>
			
			<view class="section">
				<view class="section__title">单元格</view>
				<view class="section__content">
					<view class="section__sub-title">基础用法</view>
					<m-cell-group>
						<m-cell title="单元格" value="内容"></m-cell>
						<m-cell title="单元格" value="内容" label="描述信息"></m-cell>
					</m-cell-group>

					<view class="section__sub-title">单元格大小</view>
					<m-cell title="单元格" value="内容"></m-cell>
					<m-cell title="单元格" value="内容" label="描述信息"></m-cell>

					<view class="section__sub-title">展示图标</view>
					<m-cell title="单元格" value="内容" icon="location-o"></m-cell>

					<view class="section__sub-title">只设置value</view>
					<m-cell value="内容"></m-cell>

					<view class="section__sub-title">展示箭头</view>
					<m-cell title="单元格" is-link></m-cell>
					<m-cell title="单元格" value="内容" is-link></m-cell>
					<m-cell title="单元格" value="内容" is-link arrow-direction="down"></m-cell>

					<view class="section__sub-title">页面导航</view>
					<m-cell title="单元格" is-link url="/pages/goods-detail/goods-detail"></m-cell>
					
					<view class="section__sub-title">分组标题</view>
					<m-cell-group title="分组1">
						<m-cell title="单元格" value="内容"></m-cell>
						<m-cell title="单元格" value="内容" label="描述信息"></m-cell>
					</m-cell-group>
					<m-cell-group title="分组2">
						<m-cell title="单元格" value="内容"></m-cell>
						<m-cell title="单元格" value="内容" label="描述信息"></m-cell>
					</m-cell-group>

					<view class="section__sub-title">使用插槽</view>
					<m-cell value="内容" is-link>
					  <template slot="title">
					    <span>单元格</span>
					  </template>
					</m-cell>

					<view class="section__sub-title">垂直居中</view>
					<m-cell center title="单元格" value="内容" label="描述信息"></m-cell>
				</view>
			</view>

			<view class="section">
				<view class="section__title">Checkbox</view>
				<view class="section__content">
					<view class="section__sub-title">基础用法</view>
					<m-checkbox v-model="checkboxData.check1">复选框</m-checkbox>

					<view class="section__sub-title">禁用状态</view>
					<m-checkbox disabled>复选框</m-checkbox>
					<m-checkbox disabled>复选框</m-checkbox>

					<view class="section__sub-title">自定义形状</view>
					<m-checkbox square>方形checkbox</m-checkbox>

					<view class="section__sub-title">自定义颜色</view>
					<m-checkbox checked-color="#07c160">复选框</m-checkbox>

					<view class="section__sub-title">自定义大小</view>
					<m-checkbox icon-size="24">复选框</m-checkbox>

					<view class="section__sub-title">自定义图标</view>
					<m-checkbox>
						<!-- 作用域插槽 -->
						<template slot="icon" slot-scope="props">
							{{ props }}
						</template>
					</m-checkbox>

					<view class="section__sub-title">禁用文本点击</view>
					<m-checkbox label-disabled>复选框</m-checkbox>

					<view class="section__sub-title">复选框组</view>
					<m-checkbox-group v-model="checkboxData.check2">
						<m-checkbox>复选框a</m-checkbox>
						<m-checkbox>复选框b</m-checkbox>
					</m-checkbox-group>

					<view class="section__sub-title">水平排列</view>
					<m-checkbox-group horizontal>
						<m-checkbox>复选框a</m-checkbox>
						<m-checkbox>复选框b</m-checkbox>
					</m-checkbox-group>

					<view class="section__sub-title">限制最大可选数</view>
					<m-checkbox-group v-model="checkboxData.check3" max="2">
						<m-checkbox label="a">复选框a</m-checkbox>
						<m-checkbox label="b">复选框b</m-checkbox>
						<m-checkbox label="c">复选框c</m-checkbox>
					</m-checkbox-group>
					
					<view class="section__sub-title">全选与反选</view>
					<m-checkbox-group v-model="checkboxData.check4" ref="checkboxGroup">
						<m-checkbox label="a">复选框a</m-checkbox>
						<m-checkbox label="b">复选框b</m-checkbox>
						<m-checkbox label="c">复选框c</m-checkbox>
					</m-checkbox-group>
					<m-button type="success" @click="checkAll(true)">全选</m-button>
					<m-button type="primary" @click="checkAll(false)">反选</m-button>

					<view class="section__sub-title">搭配单元格组件使用</view>
					<m-cell-group>
						<m-cell title="复选框a">
							<template slot="right-icon">
								<m-checkbox></m-checkbox>
							</template>
						</m-cell>

						<m-cell title="复选框b">
							<template slot="right-icon">
								<m-checkbox></m-checkbox>
							</template>
						</m-cell>
					</m-cell-group>
				</view>
			</view>
			
			<view class="section">
				<view class="section__title">分割线</view>
				<view class="section__content">
					<view class="section__sub-title">基础用法</view>
					<m-divider></m-divider>

					<view class="section__sub-title">展示文本</view>
					<m-divider>文本</m-divider>

					<view class="section__sub-title">展示位置</view>
					<m-divider content-position="left">文本</m-divider>
					<m-divider content-position="right">文本</m-divider>

					<view class="section__sub-title">虚线</view>
					<m-divider dashed>虚线</m-divider>

					<view class="section__sub-title">自定义样式</view>
					<m-divider>文本</m-divider>
				</view>
			</view>

			<view class="section">
				<view class="section__title">表单</view>
				<view class="section__content">
					<view class="section__sub-title">基础表单</view>
					<m-form label-width="60" border>
						<m-form-item label="用户名">
							<m-input placeholder="请输入用户名"></m-input>
						</m-form-item>
						<m-form-item label="密码">
							<m-input placeholder="请输入密码" password></m-input>
						</m-form-item>
					</m-form>

					<m-form-item label="密码">
						<m-input placeholder="请输入密码"></m-input>
					</m-form-item>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'TestPage',
		data () {
			return {
				checkboxData: {
					check1: true,
					check2: [],
					check3: [],
					check4: []
				}
			}
		},
		methods: {
			checkAll(status) {
			  this.$refs.checkboxGroup.toggleAll(status)
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "@/assets/styles/variable.scss";

	.page {
		min-height: 100%;
		.title {
			margin: 20rpx 0;
			font-size: 36rpx;
			font-weight: bold;
		}
		.section {
			&__title {
				margin: 16rpx 0;
				font-size: 28rpx;
				font-weight: bold;
			}
			&__sub-title {
				margin: 14rpx 0;
				font-size: 24rpx;
			}
			.color-block {
				display: inline-block;
				width: 100rpx;
				height: 100rpx;
				&--primary {
					background: $color-primary;
				}
				&--success {
					background: $color-success;
				}
				&--danger {
					background: $color-danger;
				}
				&--warning {
					background: $color-warning;
				}
				&--info {
					background: $color-info;
				}
			}
		}
	}
</style>
