const express = require('express')
const multer = require('multer')

const app = express()


const mystorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

const upload = multer({
    storage: mystorage,
    fileFilter: function (req, file, cb) {
        if (file.mimetype == "image/jpeg" || file.mimetype == "image/x-png") {
            cb(null, true);
        } else {
            cb(null, false);
            cb(new Error("Valid Extension are jpeg/png"))
        }
    },
    limits:{fileSize:1584675} //it's also consider byte value storage
})

app.post('/signup', upload.single('profilepic'), function (req, res) {

    // req.file -->for avatar file
    // req.body -> for signup field
    console.log(req.body);
    console.log(req.file);
    res.json({ msg: "Signup done", status: 200, data: "sign up done" })

})

//port 
app.listen(9999);