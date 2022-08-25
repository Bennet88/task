<template>
	<div>
		<span v-for="(item, index) in arr" :key="index">
			<input type="checkbox" :value="item" v-model="newArr" />{{ item }}
		</span>
		<p>你选中的元素，累加的值和为：{{ total }}</p>
	</div>
</template>

<script>
export default {
	data() {
		return {
			newArr: [],
			arr: [9, 15, 19, 25, 29, 31, 48, 57, 62, 79, 87],
		}
	},
	computed: {
		total() {
			return this.newArr.reduce((pre, cur) => {
				return (pre += cur)
			},0)
		},
	},
}
</script>

<style></style>
