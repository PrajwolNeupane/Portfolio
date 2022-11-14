import checkKey from '../middleware/checkKey.js'
import express from 'express'
import Skill from '../model/SkillModel.js';
import multer from 'multer';

const router = express.Router();

let image_name;

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads')
    },
    filename: function (req, file, cb) {
        image_name = Date.now() + '-' + Math.round(Math.random() * 10) + "-" + file.originalname.trim()
        cb(null, image_name)
    }
})

const upload = multer({ storage: storage });

router.get("/", checkKey, async (req, res) => {
    try {
        let data = await Skill.find().select("-__v");
        for (let d of data) {
            d.image = '/uploads/' + d.image;
        }
        res.send(data);
    } catch (e) {
        res.send(e);
    }
})

router.post("/", [checkKey, upload.single('image')], async (req, res) => {


    let skill = new Skill({
        name: req.body.name,
        image: image_name,
        type: req.body.type,
        description: req.body.description
    });

    try {

        skill = await skill.save();
        res.send(skill);

    } catch (e) {
        res.send({ message: e });
    }

});


export default router;