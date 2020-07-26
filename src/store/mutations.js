export const SET_PRODUCTS = (state, products) => {
	state.products = products;
};

export const SET_PRODUCT = (state, product) => {
	state.product = product;
};

export const ADD_TO_CART = (state, { product, quantity }) => {
	// 이미 장바구니에 추가된 상품이 존재하면 그 상품의 quantity만 증가시킴
	let productInCart = state.cart.find(item => {
		return item.product.id === product.id;
	});

	if (productInCart) {
		productInCart.quantity += quantity;
		return;
	}

	state.cart.push({
		product,
		quantity,
	});
};

export const SET_CART = (state, cart) => {
	state.cart = cart;
};

export const REMOVE_ITEM_FROM_CART = (state, product) => {
	state.cart = state.cart.filter(item => {
		return item.product.id !== product.id;
	});
};

export const CLEAR_CART_ITEMS = state => {
	state.cart = [];
};
