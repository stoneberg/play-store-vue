import Product from '@/apis/shop/product';

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
