const cloudinary = require('cloudinary').v2;
const multer = require('multer');

cloudinary.config({
    cloud_name:'dbkbc8fgh',
    api_key:'762735896827424',
    api_secret:'ahlHWw0-QfD9z8axzUMy257yfQU',
})

const storage = multer.memoryStorage();

async function ImageUploadutil(file){
    const result = await cloudinary.uploader.upload(file, {
        resource_type: 'auto',
    });
    return result;
}

const upload = multer({ storage});

module.exports = { upload, ImageUploadutil };