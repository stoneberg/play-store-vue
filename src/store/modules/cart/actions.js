import { ProductModel } from '@/model';
import Cart from '@/apis/shop/cart';

/**
 * 장바구니 저장
 * @param commit
 * @param payload(product, quantity)
 */
export const addProductToCart = ({ commit, dispatch }, { product, quantity }) => {
	// 화면 리로드를 대비해서 서버에 장바구니 물품 정보 저장
	Cart.save({
		productId: product.id,
		quantity: quantity,
	}).then(() => {
		commit('ADD_TO_CART', { product, quantity });
		dispatch(
			'addNotification',
			{
				type: 'success',
				message: 'Product added to cart.',
			},
			{ root: true },
		);
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
			commit('SET_CART', cart);
		});
	});
};

/**
 * 고객 장바구니 품목 제거
 * @param commit
 * @param product
 */
export const removeItemFromCart = ({ commit, dispatch }, product) => {
	Cart.delete(product.id).then(() => {
		commit('REMOVE_ITEM_FROM_CART', product);
		dispatch(
			'addNotification',
			{
				type: 'success',
				message: 'Product removed from cart.',
			},
			{ root: true },
		);
	});
};

/**
 * 고객 장바구니 품목 모두 제거
 * @param commit
 */
export const clearCartItems = ({ commit, dispatch }) => {
	Cart.deleteAll().then(() => {
		commit('CLEAR_CART_ITEMS');
		dispatch(
			'addNotification',
			{
				type: 'success',
				message: 'All Products removed from cart.',
			},
			{ root: true },
		);
	});
};
