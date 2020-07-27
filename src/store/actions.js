import { ProductModel } from '@/model';
import Product from '@/apis/shop/product';
import Cart from '@/apis/shop/cart';

/**
 * 상품 리스트 조회
 * @param commit
 */
export const getProducts = ({ commit }) => {
	Product.all()
		.then(response => {
			commit('SET_PRODUCTS', response.data);
		})
		.catch(err => {
			if (err.response) {
				// client received an error response (5xx, 4xx)
				console.log(err.response);
			} else if (err.request) {
				// client never received a response, or request never left
				console.log(err.request);
			} else {
				// anything else
				console.log(err);
			}
		});
};

/**
 * 특정 상품 조회
 * @param commit
 * @param productId
 */
export const getProduct = ({ commit }, productId) => {
	Product.show(productId)
		.then(response => {
			commit('SET_PRODUCT', response.data);
		})
		.catch(err => {
			if (err.response) {
				// client received an error response (5xx, 4xx)
				console.log(err.response);
			} else if (err.request) {
				// client never received a response, or request never left
				console.log(err.request);
			} else {
				// anything else
				console.log(err);
			}
		});
};

/**
 * 장바구니 저장
 * @param commit
 * @param payload(product, quantity)
 */
export const addProductToCart = ({ commit }, { product, quantity }) => {
	// 화면 리로드를 대비해서 서버에 장바구니 물품 정보 저장
	Cart.store({
		productId: product.id,
		quantity: quantity,
	}).then(() => {
		commit('ADD_TO_CART', { product, quantity });
	});
};

/**
 * 고객 장바구니 전체 품목 조회
 * @param commit
 */
export const getCartItems = ({ commit }) => {
	Cart.all().then(response => {
		const items = response.data;
		const cart = [];

		items.forEach(item => {
			const product = new ProductModel(
				item.id,
				item.title,
				item.description,
				item.image,
				item.price,
			);
			cart.push({ product, quantity: item.quantity });
		});
		commit('SET_CART', cart);
	});
};

/**
 * 고객 장바구니 품목 제거
 * @param commit
 * @param product
 */
export const removeItemFromCart = ({ commit }, product) => {
	Cart.delete(product.id);
	commit('REMOVE_ITEM_FROM_CART', product);
};

/**
 * 고객 장바구니 품목 모두 제거
 * @param commit
 */
export const clearCartItems = ({ commit }) => {
	Cart.deleteAll();
	commit('CLEAR_CART_ITEMS');
};
