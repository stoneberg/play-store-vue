<template>
	<div class="col-3 mt-3">
		<div class="card h-100 text-left">
			<img class="w-100" :src="product.image" alt="product image" />
			<div class="card-body">
				<h4 class="card-title">
					<router-link :to="{ name: 'product', params: { id: product.id } }">{{
						product.title
					}}</router-link>
				</h4>
				<strong>${{ product.price }}</strong>
				<p class="card-text">{{ product.description }}</p>
			</div>
			<div class="px-4 pb-3">
				<button class="btn btn-secondary" @click="addToCart">Add to Cart</button>
			</div>
		</div>
	</div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
	props: ['product'],
	methods: {
		...mapActions(['addProductToCart']),
		// 주의! action과 호출 함수의 이름이 같은면 오류남!
		// methods에서 action을 호출할 때는 함수로 한번 더 감싸야 함
		// mounted나 created에서 action을 호출할 때는 action명으로 바로 호출 가능
		addToCart() {
			this.addProductToCart({
				product: this.product,
				quantity: 1,
			});
			// this.$store.dispatch('addProductToCart', {
			// 	product: this.product,
			// 	quantity: 1,
			// });
		},
	},
	// created() {
	// 	this.addProductToCart({
	// 		product: this.product,
	// 		quantity: 1,
	// 	});
	// },
};
</script>

<style></style>
