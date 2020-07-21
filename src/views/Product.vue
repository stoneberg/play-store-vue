<template>
	<div class="row mt-5" v-if="product">
		<div class="col-4">
			<img :src="product.image" class="w-100" />
		</div>
		<div class="col-8">
			<h1>{{ product.title }}</h1>
			<h3>${{ product.price }}</h3>

			<input type="text" class="text-center col-1 mr-2 p-1" />
			<button class="btn btn-primary">Add to Cart</button>

			<p class="mt-4">{{ product.description }}</p>
		</div>
	</div>
</template>

<script>
export default {
	name: 'product',
	props: ['id'],
	// 화면 이동 시 아이디를 받아서 상품 조회
	mounted() {
		this.$store.dispatch('getProduct', this.id);
	},
	// 조횓된 결과를 스토어에서 받아서 화면에 표시
	computed: {
		product() {
			return this.$store.state.product;
		},
	},
};
</script>

<style></style>
