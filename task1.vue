<template>
	<div>
		<p>欢迎光临水果店</p>
		<tbody>
			<tr>
				<td><h3>苹果 10￥/斤，折扣&lt;8折&gt;</h3></td>
			</tr>
			<tr>
				<td>
					请输入你要购买的斤数<input type="number" v-model.number="num" />
				</td>
			</tr>
			<tr>
				<button @click="btn">结账买单</button>
			</tr>
			<tr>
				<p>
					结账单：总价{{ total }}￥元 折后价：{{ discount }}￥元 省了：{{
						save
					}}￥元
				</p>
			</tr>
		</tbody>
	</div>
</template>

<script>
export default {
	data() {
		return {
			num: '',
			total: '0',
			discount: '0',
			save: '0',
		}
	},
	methods: {
		btn() {
			this.total = this.num * 10
			this.discount = this.num * 10 * 0.8
			this.save = this.num * 10 - this.num * 10 * 0.8
		},
	},
}
</script>

<style></style>
