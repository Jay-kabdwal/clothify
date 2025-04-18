import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetHeader,
  SheetTitle,
  SheetContent,
} from "@/components/ui/sheet";
import React, { useEffect, useState } from "react";
import CommonForm from "../../components/common comp/Form";
import { addProductFormElement } from "../../config";
import ProductImageUpload from "../../components/admin/image-upload";
import { addNewProduct, fetchAllProducts } from "@/store/admin/Products-slice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import AdminProductTile from "@/components/admin/product-tile";

// Initial form data
const initialFormData = {
  image: null,
  title: "",
  description: "",
  price: "",
  category: "",
  totalstock: "",
  brand: "",
  salePrice: "",
};

const Products = () => {

  const [openCreateProductDialog, setOpenCreateProductDialog] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [imageFile, setImageFile] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [imageLoadingState, setImageLoadingState] = useState(false);
  const { productList } = useSelector((state) => state.adminProducts);
  const dispatch = useDispatch();

  function onSubmit(e) {
    e.preventDefault();

    if (!uploadedImageUrl) {
      toast.error("Please upload an image first!");
      return;
    }

    dispatch(addNewProduct({
      ...formData,
      image: uploadedImageUrl,
    }))
      .then((data) => {
        if (data?.payload?.success) {
          dispatch(fetchAllProducts());
          setOpenCreateProductDialog(false);
          setImageFile(null);
          setFormData(initialFormData);
          toast.success("Product added successfully!");
        } else {
          toast.error("Failed to add product!");
        }
      })
      .catch((error) => {
        toast.error("Error adding product: " + error.message);
      });
  }

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  console.log("Product List", productList);

  return (
    <>
      <div className="mb-5 w-full flex justify-end">
        <Button onClick={() => setOpenCreateProductDialog(true)}>
          Add Products
        </Button>
      </div>
      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
          {
            productList && productList.length >0 ?
            productList.map(productItem => <AdminProductTile product={productItem} /> ): null
          }
      </div>
        <Sheet
          open={openCreateProductDialog}
          onOpenChange={setOpenCreateProductDialog}
        >
          <SheetContent side="right" className="overflow-y-auto max-h-screen">
            <SheetHeader>
              <SheetTitle className="text-xl text-center font-extrabold mt-3 tracking-tight shadow">
                Add New Product
              </SheetTitle>
            </SheetHeader>
            <div className="p-4">
              <ProductImageUpload
                imageFile={imageFile}
                setImageFile={setImageFile}
                uploadedImageUrl={uploadedImageUrl}
                setUploadedImageUrl={setUploadedImageUrl}
                setImageLoadingState={setImageLoadingState}
                imageLoadingState={imageLoadingState}
              />
              <div className="mt-1 text-lg font-semibold mb-2 block text-center">
                <CommonForm
                  formData={formData}
                  setFormData={setFormData}
                  formControls={addProductFormElement}
                  buttonText="Add Product"
                  onSubmit={onSubmit}
                />
              </div>
            </div>
          </SheetContent>
        </Sheet>
      
    </>
  );
};

export default Products;
