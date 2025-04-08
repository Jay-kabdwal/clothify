import { Button } from '@/components/ui/button';
import { Sheet, SheetHeader, SheetTitle, SheetContent } from '@/components/ui/sheet';
import React, { useState } from 'react';
import CommonForm from "../../components/common comp/Form"
import { addProductFormElement} from "../../config"

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

  function onSubmit() {
    console.log(formData);
  }

  return (
    <>
      <div className="mb-5 w-full flex justify-end">
        <Button onClick={() => setOpenCreateProductDialog(true)}>Add Products</Button>
      </div>
      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
        <Sheet open={openCreateProductDialog} onOpenChange={setOpenCreateProductDialog}>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>Add New Product</SheetTitle>
            </SheetHeader>
            <div className="p-6">
              <CommonForm
                formData={formData}
                setFormData={setFormData}
                formControls={addProductFormElement} // Ensure this is defined or imported
                buttonText="Add Product"
                onSubmit={onSubmit}
              />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

export default Products;
