import checkKey from '../middleware/checkKey.js'
import express from 'express'
import User from '../model/UserModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import 'dotenv/config';

const router = express.Router();

router.post("/login", checkKey, async (req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            const validPassword = await bcrypt.compare(req.body.password, user.password);
            if (validPassword) {
                const token = jwt.sign({
                    id: user._id,

                }, process.env.JWT_CODE);

                res.send(
                    {
                        token: token
                    });

            } else {
                return res.send({ message: "Log In credentials invalid" });
            }

        } else {
            res.send({ message: "Log In credential invalid" });
        }
    } catch (e) {
        res.send({ message: e });
    }
})

router.post("/createUser", checkKey, async (req, res) => {
    try {

        let user = new User({
            email: req.body.email,
            password: req.body.password
        });

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
        user = await user.save();

        const token = jwt.sign({
            id: user._id,

        }, process.env.JWT_CODE);

        res.send(
            {
                token: token
            });


    } catch (e) {
        res.send({ message: "Error on creating User" });
    }
})

export default router;