const multer = require('multer');

//create storage
const storage = multer.diskStorage({
    //it contains of 2 keys
    //first is destination
    //second is filename
    destination: (req, file, callback) => {
        callback(null,'./uploads')
    },
    filename: (req, file, callback) => {
        const filename = `image-${Date.now()}-${file.originalname}`
        callback(null, filename)
    }
})

//implement file filter
const fileFilter = (req, file, callback) => {
    if (file.mimetype === 'image/png' || file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg' || file.mimetype === 'image/JPG') {
        callback(null, true)
    } else {
        callback(null, false)
        return callback(new Error("only png, jpeg, jpg are allowed "))
    }
}

const multerConfig = multer({
    storage,
    fileFilter
});
module.exports = multerConfig;