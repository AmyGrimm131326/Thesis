// this is where i am importing axios
import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:4000/',
})
// exporting my apis
export const getOrders = () => api.get('orders');
export const viewOrder = (id) => api.get(`orders/viewOrder/${id}`);
export const getMenuItems = () => api.get("menuItems");
export const login = (payload) => api.post('admin/login', payload)
export const newOrder = (payload) => api.post('newOrder', payload)
export const deleteOrder = (id) => api.delete(`/orders/delete/${id}`)
export const completeOrder = (id) => api.put(`/orders/complete/${id}`)

const apis = {
    getMenuItems,
    login,
    getOrders,
    viewOrder,
    newOrder,
    deleteOrder,
    completeOrder
}

export default apis;