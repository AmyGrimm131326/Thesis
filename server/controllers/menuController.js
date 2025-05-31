const MenuItem = require('../models/menuItem');
module.exports = {
    allMenuItems(req, res) {
        MenuItem.find()
            .then(items => {
                res.send(items);
            }).catch(error => res.send(error));
    }
};