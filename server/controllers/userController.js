const User = require('../models/user')
module.exports = {
    loginUser(req, res) {
        const { email, password } = req.body;
        console.log(req.body)
        User.findOne({ email: email }).then(User => {
            if (!User) {
                res.send({ message: 'Email does not exist' });
            } else {
                User.password === password ? res.send(User) : res.send({ message: 'Password is Incorrect' });
            }
        }).catch(error => res.send(error));
    },
    createUser(req, res) {
        User.findOne({ email: req.body.email }).then(user => {
            if (!user) {
                User.create(req.body).then(newUser => {
                    res.send(newUser);
                }).catch(error => res.send(error));
            } else {
                res.send({ message: 'Email Already in Use' });
            }
        }).catch(error => res.send(error));
    },
    deleteUser(req, res) {
        const { id } = req.params
        User.findByIdAndDelete(id).then(deletedUser => {
            res.send(deletedUser);
        }).catch(error => res.send(error));
    },
    viewUser(req, res) {
        const { id } = req.params;
        User.findById(id).then(currentUser => {
            currentUser ? res.send(currentUser) : res.send({ message: 'User does not exist' })
        }).catch(error => res.send(error));
    }
};