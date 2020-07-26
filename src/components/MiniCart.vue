<template>
	<div
		class="dropdown-menu p-2"
		style="min-width:320px; right:0; left:auto"
		aria-labelledby="triggerId"
	>
		<div v-if="cart.length">
			<div v-for="item in cart" :key="item.product.id">
				<div class="px-2 d-flex justify-content-between">
					<div>
						<strong>{{ item.product.title }}</strong>
						<br />
						{{ item.quantity }} x ${{ item.product.price }}
					</div>
					<div>
						<a
							href="#"
							class="badge badge-secondary"
							@click.prevent="removeProductFromCart(item.product)"
							>remove</a
						>
					</div>
				</div>
				<hr />
			</div>
		</div>
		<div v-else>
			<div class="px-2 d-flex justify-content-between">
				<div>
					<strong>No Item</strong>
					<br />0 x $0
				</div>
				<div>
					<a href="#" class="badge badge-secondary disabled">remove</a>
				</div>
			</div>
			<hr />
		</div>
		<div class="d-flex justify-content-between">
			<span>Total: ${{ cartTotalPrice || 0 }}</span>
			<a href="#">Clear Cart</a>
		</div>
	</div>
</template>

<script>
export default {
	computed: {
		cart() {
			return this.$store.state.cart;
		},
		cartTotalPrice() {
			return this.$store.getters.cartTotalPrice;
		},
	},
	// mounted() ==> 화면 (재)로딩 시 장바구니 정보 처리
	mounted() {
		this.$store.dispatch('getCartProducts');
	},
	methods: {
		removeProductFromCart(product) {
			console.log('remove product=====>', product);
			this.$store.dispatch('removeProductFromCart', product);
		},
	},
};
</script>
