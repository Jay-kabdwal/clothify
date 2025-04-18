import React from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";

const AdminProductTile = ({ product }) => {
    return (
        <Card className=" w-full max-w-sm mx-auto">
            <div>
                <div className="relative ">
                    <img
                        src={product?.image}
                        alt={product.title}
                        className="w-full h-[300px] object-cover rounded-t-lg"
                    />
                </div>
                <CardContent>
                    <h2 className="text-xl font-bold mb-2">{product?.title}</h2>
                    <div className="flex justify-between items-center mb-2">
                        <span 
                        className={`${product?.salePrice > 0 ? 'line-through' : " "}text-lg font-semibold text-primary`}>
                            ${product?.price}
                        </span>
                        <span className="text-lg font-bold">{product?.salePrice}</span>
                    </div>
                </CardContent>
                <CardFooter 
                className="flex justify-between items-center">
                    <button>Edit</button>
                    <button>Delete</button>  
                </CardFooter>
            </div>
        </Card>
    );
};

export default AdminProductTile;
