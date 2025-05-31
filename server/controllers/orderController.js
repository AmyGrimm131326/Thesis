const Order = require('../models/order');
const User = require('../models/user');

module.exports={
    allOrders(req, res) {
        Order.find().then(orders => {
            res.send(orders);
        }).catch(error => res.send(error));

    },
    newOrder(req, res) {
        Order.create(req.body).then(newOrder => {
          res.send({success:"Thank You for your order it will be ready for pick-up in 20 minutes.", order:newOrder});    
        }).catch(error => res.send(error));

    },//can be used as a put since it is updating?
    deleteOrder(req, res) {
        const { id } = req.params;
        Order.findByIdAndDelete(id).then(deletedOrder => {
            res.send(deletedOrder);
        }).catch(error => res.send(error));
    },
    viewOrder(req, res) {
        const { id } = req.params;
        Order.findById(id).then(oneOrder =>{
            res.send(oneOrder);
        }).catch(error => res.send(error));
},
completeOrder(req, res){
    const { id } = req.params;
    Order.findByIdAndUpdate(id, {complete: true}).then(oneOrder =>{
        res.send({success:true});
    }).catch(error => res.send(error));
}
};