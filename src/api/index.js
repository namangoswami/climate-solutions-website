import axios from 'axios'
import { getUserId } from '../common/userIdService';
const orgId = "climatesolutions";


export const url = 'https://beta.blissbookstore.in/' + orgId;
const fallbackUrl = 'https://zippy-scythe-energy.glitch.me';
// export const url = 'http://localhost:5000/' + orgId;

let userId = getUserId();

export const getBooksPaginated = (pageNo, pageSize) => axios.get(`${url}/products?pageNo=${pageNo}&pageSize=${pageSize}`);

export const getBook = (id) => axios.get(`${url}/products/${id}`);
// export const getBooksBySearch=(searchQuery)=>axios.get(`${url}/books/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`);
export const updateCart = (cart) => axios.post(`${url}/cart`, cart);

export const getSearchResults = (searchTerm) => axios.get(`${url}/products/search/${searchTerm}`);

export const placeOrder = (cart) => axios.post(`${url}/orders`, {...cart, userId, orgId });

export const getCoupon = (coupon) => axios.get(`${url}/coupons/code/${coupon}`);

export const getRazorpayKey = () => axios.get(`${url}/orders/razorpay`);

export const logEvent = () => axios.post(`${fallbackUrl}/event`, { userId });

export const commonFetch = (postUrl) => axios.get(url + postUrl)