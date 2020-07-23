import axios from 'axios';
import { Product } from '@/model';

/**
 * 상품 리스트 조회
 * @param commit
 */
export const getProducts = ({ commit }) => {
	axios
		.get('http://localhost:8090/api/shop/products')
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
		.get(`http://localhost:8090/api/shop/products/${productId}`)
		.then(response => {
			console.log('getProduct=====>', response);
			commit('SET_PRODUCT', response.data);
		})
		.catch(error => console.log(error));
};

/**
 * 장바구니 저장
 * @param commit
 * @param payload(product, quantity)
 */
export const addProductToCart = ({ commit }, { product, quantity }) => {
	// 화면 리로드를 대비해서 서버에 장바구니 물품 정보 저장
	axios
		.post('http://127.0.0.1:8090/api/shop/cart', {
			productId: product.id,
			quantity: quantity,
		})
		.then(() => {
			console.log('addProductToCart=====>');
			commit('ADD_TO_CART', { product, quantity });
		});
};

/**
 * 장바구니 조회
 * @param commit
 */
export const getCartProducts = ({ commit }) => {
	axios.get('http://127.0.0.1:8090/api/shop/cart').then(response => {
		console.log('getCartProducts=====>', response.data);
		const data = response.data;
		const cart = [];

		data.forEach(item => {
			console.log('item===>', item);
			const product = new Product(item.title, item.description, item.image, item.price);
			cart.push({ product: product, quantity: item.quantity });
		});

		commit('SET_CART', cart);
	});
};
