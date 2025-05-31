const express = require('express');

const UserController = require('../controllers/userController');
const MenuController = require('../controllers/menuController');
const OrderController = require('../controllers/orderController');

// this is how im grabbing the router method to use expresses built in router
const router = express.Router();

// menu routes
router.get('/menuItems', MenuController.allMenuItems)

//order routes
router.get('/orders', OrderController.allOrders);
router.get('/orders/viewOrder/:id', OrderController.viewOrder);
router.put('/orders/complete/:id', OrderController.completeOrder);

//Admin page
router.post('/newOrder', OrderController.newOrder);
router.delete('/orders/delete/:id', OrderController.deleteOrder);

// admin routes
router.post('/admin/login', UserController.loginUser);

module.exports = router;