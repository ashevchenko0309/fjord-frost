import Accordion from './components/Accordion';
import {FC} from "react";
import {Product} from "../../../lib/shopify/types";
import {RichTextRenderer} from "@novatize-mattheri/shopify-richtext-renderer";
import ProductActions from "./components/ProductActions";

const ProductDescription: FC<{ product: Product }> = ({ product }) => {
  return (
    <section className="product-description">
      <div className="px-4">
        <h1 className="mb-4 font-header text-4xl font-semibold uppercase leading-10 text-neutral-100">
          {product.title}
        </h1>
        <p className="mb-4 font-medium leading-6 text-neutral-100">{product.priceRange.maxVariantPrice.currencyCode} {product.priceRange.maxVariantPrice.amount}</p>
        <ProductActions product={product} />
        <div className="mb-6">
          <p className="mb-4 text-sm font-medium leading-5">{product.volume?.value}</p>
          <p className="text-sm leading-5 lg:text-base">
            {product.description}
          </p>
          {product.aroma && <p className="mt-4 text-sm leading-5 lg:text-base">{product.aroma.value}</p>}
        </div>
        <div className="mb-16">
          {product.benefits && (
              <Accordion title="Benefits">
                <div className="pl-5 text-sm lg:text-base leading-5">
                  <RichTextRenderer data={product.benefits.value} />
                </div>
              </Accordion>
          )}
          {product.ingredients && <Accordion title="Ingredients">
            <div className="text-sm lg:text-base leading-5 whitespace-pre-wrap">
              {product.ingredients.value}
            </div>
          </Accordion>}
        </div>
      </div>
    </section>
  );
};

export default ProductDescription;
