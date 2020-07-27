<template>
	<div class="d-flex align-items-stretch flex-wrap">
		<!-- 조회된 데이터를 props를 통해 하위 컴포넌트에 전달 -->
		<product-card v-for="product in products" :key="product.id" :product="product" />
	</div>
</template>

<script>
import ProductCard from '@/components/ProductCard';
import { mapState, mapActions } from 'vuex';
export default {
	components: {
		ProductCard,
	},
	computed: {
		...mapState(['products']),
		// products() {
		// 	return this.$store.state.products;
		// },
	},
	mounted() {
		// this.$store.dispatch('getProducts');
		this.getProducts();
	},
	methods: {
		...mapActions(['getProducts']),
	},
};
</script>

<style></style>
