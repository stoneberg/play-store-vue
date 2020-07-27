import SHOP_API from '@/apis';

const END_POINT = 'products';

export default {
	all() {
		return SHOP_API.get(END_POINT);
	},
	show(id) {
		return SHOP_API.get(`${END_POINT}/${id}`);
	},
};
