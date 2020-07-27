<template>
	<div>
		<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
			<span class="navbar-brand">VueStore</span>

			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav mr-auto">
					<li class="nav-item active">
						<router-link to="/" class="nav-link">Home</router-link>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">Product</a>
					</li>
				</ul>
				<div class="form-inline my-2 my-lg-0">
					<div class="dropdown open">
						<button
							class="btn btn-secondary dropdown-toggle"
							type="button"
							id="triggerId"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false"
						>
							{{ cartItemCount }} Cart
						</button>
						<!-- 
              하위 링크 클릭 시 이벤트가 상위로 전파되는 것을 방지 
              즉, remove, clear cart 클릭 시 드롭다운이 닫히는 것을 방지
            -->
						<div @click="$event.stopPropagation()">
							<mini-cart />
						</div>
					</div>
				</div>
			</div>
		</nav>
	</div>
</template>

<script>
import MiniCart from './MiniCart';
import { mapGetters } from 'vuex';
export default {
	components: {
		MiniCart,
	},
	computed: {
		...mapGetters('cart', ['cartItemCount']),
		// cartItemCount() {
		// 	return this.$store.getters.cartItemCount;
		// },
	},
};
</script>

<style></style>
