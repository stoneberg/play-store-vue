import axios from 'axios';

const SHOP_API = axios.create({
	baseURL: 'http://localhost:8090/api/shop',
});

export default SHOP_API;
