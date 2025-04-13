const express = require("express");
const router = express.Router();

const {
  handleImageUpload,
    addProduct,
    fetchAllProducts,
    editProducts,
    deleteProducts,
    
} = require("../../controllers/admin/products-controller");

const { upload } = require("../../helpers/cloudinary");

router.post("/upload", upload.single("my_file"), handleImageUpload);
router.post("/add", addProduct);
router.get("/get", fetchAllProducts);
router.put("/edit/:id", editProducts);
router.delete("/delete/:id", deleteProducts);

module.exports = router;
