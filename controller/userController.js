const User = require('../models/userSchema');
const createUser = async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).send(user);
    } catch (error) {
        res.status(400).send(error);
    }
};

const getUserByEmail = async (req, res) => {
    try {
        const { email } = req.params;

        // Check if the user exists
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).send({ error: 'User not found' });
        }

        // Return user information including hashed password
        res.send({ exists: true, password: user.password });
    } catch (error) {
        res.status(500).send(error);
    }
};
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.send(users);
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = {createUser, getUserByEmail, getAllUsers};