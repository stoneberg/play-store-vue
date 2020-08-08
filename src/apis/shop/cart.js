import SHOP_API from '@/apis';

const END_POINT = 'cart';

export default {
	all() {
		return SHOP_API.get(END_POINT);
	},
	save(payload) {
		return SHOP_API.post(END_POINT, payload);
	},
	delete(id) {
		return SHOP_API.delete(`${END_POINT}/${id}`);
	},
	deleteAll() {
		return SHOP_API.delete(END_POINT);
	},
};
