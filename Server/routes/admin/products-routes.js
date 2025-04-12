const express = require('express');
const router = express.Router();

const { handleImageUpload } = require('../../controllers/admin/products-controller');

const { upload } = require('../../helpers/cloudinary');

router.post('/upload', upload.single('my_file'), handleImageUpload);

module.exports = router;