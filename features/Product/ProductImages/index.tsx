"use client"

import MobilePresentation from "./components/MobilePresentation";
import {FC} from "react";

const ProductImages: FC<{ images: {src: string, altText: string}[] }> = ({ images }) => {
    return (
        <section>
            <MobilePresentation images={images} />
        </section>
    )
}

export default ProductImages
