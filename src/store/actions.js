import axios from 'axios';

/**
 * 상품 리스트 조회
 * @param commit
 */
export const getProducts = ({ commit }) => {
	axios
		.get('http://localhost:8090/api/products')
		.then(response => {
			console.log('getProducts=====>', response);
			commit('SET_PRODUCTS', response.data);
		})
		.catch(error => console.log(error));
};

/**
 * 특정 상품 조회
 * @param commit
 * @param productId
 */
export const getProduct = ({ commit }, productId) => {
	axios
		.get(`http://localhost:8090/api/products/${productId}`)
		.then(response => {
			console.log('getProduct=====>', response);
			commit('SET_PRODUCT', response.data);
		})
		.catch(error => console.log(error));
};
