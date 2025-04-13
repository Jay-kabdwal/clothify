const { ImageUploadutil } = require("../../helpers/cloudinary");

const Product = require("../../models/Product");

const handleImageUpload = async (req, res) => {
  try {
    const b64 = req.file.buffer.toString("base64");
    const url = `data:${req.file.mimetype};base64,${b64}`;
    const result = await ImageUploadutil(url);

    res.json({
      success: true,
      message: "Image uploaded successfully",
      result,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "error occured",
    });
  }
};

//add a new product

const addProduct = async (req, res) => {
  try {
    const {
      image,
      title,
      description,
      price,
      category,
      totalstock,
      brand,
      salePrice,
    } = req.body;

    const newlyCreatedProduct = await Product.create({
      image,
      title,
      description,
      price,
      category,
      totalstock,
      brand,
      salePrice,
    });
    newlyCreatedProduct.save();
    res.status(201).json({
      success: true,
      message: "Product created successfully",
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "error occured",
    });
  }
};

//fetch all products

const fetchAllProducts = async (req, res) => {
  try {
    const listOfAllProducts = await Product.find({});
    res.status(200).json({
      success: true,
      message: "Products fetched successfully",
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "error occured",
    });
  }
};

//edit a product

const editProducts = async (req, res) => {
  try {
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "error occured",
    });
  }
};

//delete a product

const deleteProducts = async (req, res) => {
  try {
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "error occured",
    });
  }
};

module.exports = {
  handleImageUpload,
  addProduct,
  fetchAllProducts,
  editProducts,
  deleteProducts,
};
