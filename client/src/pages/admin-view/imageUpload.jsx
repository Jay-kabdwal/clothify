import React, { useRef } from 'react'
import { Input } from "../../components/ui/input"
import { UploadCloudIcon, XIcon } from 'lucide-react';
import { FileIcon } from 'lucide-react';

const ProductImageUpload = ({ imageFile, setImageFile, uploadedImageUrl, setUploadedImageUrl }) => {


    const inputRef = useRef(null);

    function handleImageFileChange(e) {
        const selecedFile = e.target.files[0];
        if (selecedFile) {
            setImageFile(selecedFile);
        }
    }

    function handleDragOver(e) {
        e.perventDefault()
    }
    function handleDrop(e) {
        e.perventDefault();
        const dropFile = e.dataTransfer.files?.[0];
        if (dropFile) {
            setImageFile(dropFile);
        }

    }


    return (
        <>
            <div className='w-full max-w-md mx-auto mt-4 '>
                <label className='text-lg font-semibold mb-2 block text-center'>Upload Image</label>
                <div
                    className='border-2 border-dashed border-gray-400 rounded-lg cursor-pointer'
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                >
                    <Input
                        id="image-upload"
                        type="file"
                        className='hidden'
                        ref={inputRef}
                        onChange={handleImageFileChange}
                    />
                    {
                        !imageFile ? (
                            <label htmlFor="image-upload"
                                className='flex flex-col items-center justify-center w-full h-32'
                            >
                                <UploadCloudIcon />
                                <span className='text-gray-500'>Drag and drop or click to upload</span>
                            </label>
                        ) : //3:37
                            <div className='flex items-center justify-between p-4'>
                                <div className='flex items-center'>
                                    <img
                                        src={URL.createObjectURL(imageFile)}
                                        alt="Uploaded"
                                        className='w-16 h-16 object-cover rounded mr-4'
                                    />
                                    <p className='text-sm font-medium'>{imageFile.name}</p>
                                </div>
                                <button
                                    className='text-red-500 hover:text-red-700'
                                    onClick={() => setImageFile(null)}
                                >
                                    <XIcon className='w-6 h-6' />
                                </button>
                            </div>
                        
                    }
                </div>
            </div>
        </>

)
}

export default ProductImageUpload

