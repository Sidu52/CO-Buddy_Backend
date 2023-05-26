const coBuddy = require('../module/cobuddySchema');

createUser = async (req, res) => {

    try {
        const user = await coBuddy.create(req.body);
        return res.status(200).json({ message: "User Created" });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

getAllUser = async (req, res) => {
    try {
        const user = await coBuddy.find();
        return res.status(200).json({
            message: `User find`,
            data: user
        });

    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

module.exports = { createUser, getAllUser }