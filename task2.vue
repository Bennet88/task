<template>
	<div>
		<span v-for="(item, index) in arr" :key="index">
			<input type="checkbox" name="" id="" :value="item" v-model="newArr" />{{
				item
			}}
		</span>
		<ul>
			<li v-for="(item, index) in newArr" :key="index">{{ item }}</li>
		</ul>
	</div>
</template>

<script>
export default {
	data() {
		return {
			newArr: [],
			arr: ['科幻', '喜剧', '动漫', '冒险', '科技', '军事', '娱乐', '奇闻'],
		}
	},
}
</script>

<style></style>
