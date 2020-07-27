/**
 * getters
 * state 상태에서 특정 값을 획득
 */

// 장바구니에 추가된 상품의 품목 갯수
export const cartItemCount = state => {
	return state.cart.length;
};

// 장바구니에 추가된 상품 총 금액 계산
export const cartTotalPrice = state => {
	let total = 0;
	state.cart.forEach(item => {
		total += item.product.price * item.quantity;
	});
	return total;
};
