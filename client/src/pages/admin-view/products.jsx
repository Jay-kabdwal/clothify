import { Button } from '@/components/ui/button';
import { Sheet, SheetHeader, SheetTitle, SheetContent } from '@/components/ui/sheet';
import React, { useState } from 'react';
import CommonForm from "../../components/common comp/Form"
import { addProductFormElement } from "../../config"
import ProductImageUpload from '../../components/admin/image-upload';

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

  function onSubmit() {
    
  }

  console.log(formData);

  return (
    <>
      <div className="mb-5 w-full flex justify-end">
        <Button
          onClick={() => setOpenCreateProductDialog(true)}>
          Add Products
        </Button>
      </div>
      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">

        <Sheet
          open={openCreateProductDialog}
          onOpenChange={setOpenCreateProductDialog}>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle className="text-xl text-center font-extrabold mt-3 tracking-tight shadow">Add New Product</SheetTitle>
            </SheetHeader>
            <div className="p-4">
              <ProductImageUpload
                imageFile={imageFile}
                setImageFile={setImageFile}
                uploadedImageUrl={uploadedImageUrl}
                setUploadedImageUrl={setUploadedImageUrl}
                setImageLoadingState={setImageLoadingState}

              />
              <div className='mt-1 text-lg font-semibold mb-2 block text-center'>
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
      </div>
    </>
  );
};

export default Products;
