import checkKey from '../middleware/checkKey.js'
import express from 'express'
import Project from '../model/ProjectModel.js';
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
        const data = await Project.find().select('-__v');
        for (let d of data) {
            d.image = '/uploads/' + d.image;
        }
        res.send(data);
    } catch (e) {
        res.send({ message: "Unable to get Data", });
    }
});

router.post("/", [checkKey, upload.single('image')], async (req, res) => {


    let project = new Project({
        name: req.body.name,
        link: req.body.link,
        image: image_name,
        description: req.body.description,
        tagline: req.body.tagline
    });

    try {

        project = await project.save();
        res.send(project);

    } catch (e) {
        res.send({ message: e });
    }

});

router.get("/:id", checkKey, async (req, res) => {
    const { id } = req.params;
    if (id) {
        try {
            const data = await Project.findById(id).select("-__v");
            data.image = '/uploads/' + data.image;
            res.send(data);
        } catch (e) {
            res.send({ message: 'Cannot find Project' });
        }
    } else {
        res.send({ message: "Id cannnot be empty" });
    }

})

export default router;