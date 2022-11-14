import checkKey from '../middleware/checkKey.js';
import express from 'express';
import Message from '../model/MessageModel.js';

const router = express.Router();

router.get("/", checkKey, async (req, res) => {
    try {
        const data = await Message.find().select('-__v');
        res.send(data);
    } catch (e) {
        res.send({ message: "Unable to get Data", });
    }
});

router.post("/", checkKey, async (req, res) => {


    let message = new Message({
       email:req.body.email,
       message:req.body.message
    });

    try {

        message = await message.save();
        res.send(message);

    } catch (e) {
        res.send({ message: e });
    }

});

export default router;

