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
							class="badge badge-warning"
							@click.prevent="removeItemFromCart(item.product)"
							>remove</a
						>
					</div>
				</div>
				<hr />
			</div>
			<div class="d-flex justify-content-between">
				<span>Total: ${{ cartTotalPrice || 0 }}</span>
				<a href="#" class="badge badge-danger" @click.prevent="clearCartItems">Clear Cart</a>
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
			<div class="d-flex justify-content-between">
				<span>Total: ${{ cartTotalPrice || 0 }}</span>
				<a href="#" class="badge badge-secondary disabled">Clear Cart</a>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
export default {
	computed: {
		...mapState('cart', ['cart']),
		...mapGetters('cart', ['cartTotalPrice']),
		// ...mapState({
		// 	cart: state => state.cart.cart,
		// }),
		//...mapState(['cart']),
		//...mapGetters(['cart/cartTotalPrice']),
		// cart() {
		// 	return this.$store.state.cart;
		// },
		// cartTotalPrice() {
		// 	return this.$store.getters.cartTotalPrice;
		// },
	},
	// mounted() ==> 화면 (재)로딩 시 장바구니 정보 호출
	mounted() {
		this.getCartItems();
		// this.$store.dispatch('getCartItems');
	},
	methods: {
		...mapActions('cart', ['removeItemFromCart', 'clearCartItems', 'getCartItems']),
		// removeItemFromCart(product) {
		// 	this.$store.dispatch('removeItemFromCart', product);
		// },
		// clearCartItems() {
		// 	this.$store.dispatch('clearCartItems');
		// },
	},
};
</script>
