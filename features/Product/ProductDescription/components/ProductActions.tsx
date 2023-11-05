"use client"
import {AddToCart} from "../../../../components/cart/add-to-cart";
import {FC, KeyboardEvent, useState} from "react";
import {Product} from "../../../../lib/shopify/types";

const ProductActions: FC<{ product: Product }> = ({ product }) => {
    const [quantity, setQuantity] = useState(1)
    const onKeyDown = (event: KeyboardEvent) => {
        const allowedKeys = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight'];

        // Check for numbers 0-9
        if (event.key >= '0' && event.key <= '9') {
            return; // Allow numbers
        }

        if (allowedKeys.includes(event.key)) {
            return; // Allow specified keys
        }

        // Check for Ctrl+A
        if (event.ctrlKey && event.key === 'a') {
            return; // Allow Ctrl+A
        }

        event.preventDefault(); // Prevent default for disallowed keys
    }

    return (
        <>
            <div className="mb-6">
                <p className="mb-2 text-xs font-medium leading-4">Quantity</p>
                <input type="number" value={quantity} className="px-4 py-2.5 border border-neutral-40 w-24" onChange={(event) => setQuantity(Number(event.target.value))} onKeyDown={onKeyDown} />
            </div>
            <AddToCart variants={product.variants} availableForSale={product.availableForSale} quantity={quantity} />
        </>
    )
}

export default ProductActions
